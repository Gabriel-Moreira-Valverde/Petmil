import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const SOUND_STORAGE_KEY = "petmil_sound_enabled";

const SoundContext = createContext(null);

function SoundProvider({ children }) {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const storedValue = window.localStorage.getItem(SOUND_STORAGE_KEY);
    return storedValue !== "false";
  });

  const audioContextRef = useRef(null);

  const ensureAudioContext = useCallback(async () => {
    if (typeof window === "undefined") {
      return null;
    }

    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        return null;
      }

      audioContextRef.current = new AudioContextClass();
    }

    if (audioContextRef.current.state === "suspended") {
      try {
        await audioContextRef.current.resume();
      } catch {
        return null;
      }
    }

    return audioContextRef.current;
  }, []);

  const playClick = useCallback(async () => {
    if (!enabled) {
      return;
    }

    const audioContext = await ensureAudioContext();
    if (!audioContext) {
      return;
    }

    const now = audioContext.currentTime;

    const masterGain = audioContext.createGain();
    const lowpass = audioContext.createBiquadFilter();
    const accentOsc = audioContext.createOscillator();
    const bodyOsc = audioContext.createOscillator();
    const accentGain = audioContext.createGain();
    const bodyGain = audioContext.createGain();

    const randomOffset = (Math.random() - 0.5) * 18;

    lowpass.type = "lowpass";
    lowpass.frequency.setValueAtTime(2100, now);
    lowpass.Q.setValueAtTime(0.9, now);

    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.9, now + 0.02);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.19);

    accentOsc.type = "sine";
    accentOsc.frequency.setValueAtTime(760 + randomOffset, now);
    accentOsc.frequency.exponentialRampToValueAtTime(410 + randomOffset, now + 0.11);

    accentGain.gain.setValueAtTime(0.0001, now);
    accentGain.gain.exponentialRampToValueAtTime(0.018, now + 0.01);
    accentGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

    bodyOsc.type = "triangle";
    bodyOsc.frequency.setValueAtTime(340 + randomOffset * 0.4, now);
    bodyOsc.frequency.exponentialRampToValueAtTime(190 + randomOffset * 0.2, now + 0.14);

    bodyGain.gain.setValueAtTime(0.0001, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.012, now + 0.015);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);

    accentOsc.connect(accentGain);
    bodyOsc.connect(bodyGain);
    accentGain.connect(lowpass);
    bodyGain.connect(lowpass);
    lowpass.connect(masterGain);
    masterGain.connect(audioContext.destination);

    accentOsc.start(now);
    bodyOsc.start(now);
    accentOsc.stop(now + 0.13);
    bodyOsc.stop(now + 0.16);
  }, [enabled, ensureAudioContext]);

  const toggleSound = useCallback(() => {
    setEnabled((previousValue) => !previousValue);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(SOUND_STORAGE_KEY, String(enabled));
    }
  }, [enabled]);

  useEffect(() => {
    const handleClick = (event) => {
      const element = event.target.closest?.("button, a, [data-sound='click']");
      if (!element || element.hasAttribute("data-sound-off")) {
        return;
      }

      playClick();
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [playClick]);

  const value = useMemo(
    () => ({
      enabled,
      toggleSound,
      playClick,
    }),
    [enabled, toggleSound, playClick]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound precisa ser usado dentro de SoundProvider.");
  }

  return context;
}

export { SoundProvider, useSound };

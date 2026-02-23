import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n/translations";

const LANGUAGE_STORAGE_KEY = "petmil_language";
const DEFAULT_LANGUAGE = "pt";

const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LANGUAGE;
    }

    const storedValue = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedValue === "en" ? "en" : DEFAULT_LANGUAGE;
  });

  const isEnglish = language === "en";

  const setLanguage = (nextLanguage) => {
    setLanguageState(nextLanguage === "en" ? "en" : "pt");
  };

  const toggleLanguage = () => {
    setLanguageState((prevLanguage) => (prevLanguage === "en" ? "pt" : "en"));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }

    if (typeof document !== "undefined") {
      document.documentElement.lang = isEnglish ? "en-US" : "pt-BR";
    }
  }, [language, isEnglish]);

  const value = useMemo(
    () => ({
      language,
      isEnglish,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language, isEnglish]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage precisa ser usado dentro de LanguageProvider.");
  }

  return context;
}

export { LanguageProvider, useLanguage };

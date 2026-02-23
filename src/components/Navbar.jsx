import { useState } from "react";
import { useSound } from "../context/SoundContext";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { enabled, toggleSound } = useSound();
  const { t, isEnglish, toggleLanguage } = useLanguage();

  const closeMobileMenu = () => setIsOpen(false);

  const languageShort = isEnglish ? t.languageToggle.portugueseShort : t.languageToggle.englishShort;
  const languageAria = isEnglish
    ? t.languageToggle.switchToPortuguese
    : t.languageToggle.switchToEnglish;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#191D19]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <img src="/Logo.png" alt="Logo Petmil" className="h-10 w-10" />
            <span className="select-none text-2xl font-bold tracking-wide text-white">Petmil</span>
          </a>

          <ul className="hidden items-center gap-8 text-sm font-medium text-white/75 lg:flex">
            {t.nav.items.map((item) => (
              <li key={item.href} className="group relative">
                <a href={item.href} className="transition-colors duration-300 hover:text-white">
                  {item.label}
                </a>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={languageAria}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-white/15 px-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              <span>{languageShort}</span>
            </button>

            <button
              type="button"
              data-sound-off
              onClick={toggleSound}
              aria-label={enabled ? t.nav.soundOn : t.nav.soundOff}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-white/30 hover:bg-white/5"
            >
              {enabled ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M11 6L7.8 9H5v6h2.8L11 18V6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9.5C15.8 10.2 16.2 11 16.2 12C16.2 13 15.8 13.9 15 14.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.8 7.5C19 8.8 19.7 10.3 19.7 12C19.7 13.8 19 15.3 17.8 16.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M11 6L7.8 9H5v6h2.8L11 18V6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 10.1L20 13.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 10.1L16.5 13.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>

            <div className="hidden lg:flex">
              <a
                href="#contato"
                className="rounded-lg bg-green-600 px-7 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-green-600 hover:shadow-green-500/30"
              >
                {t.nav.bookCta}
              </a>
            </div>

            <button
              type="button"
              aria-label={isOpen ? t.nav.menuClose : t.nav.menuOpen}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-white/30 hover:bg-white/5 lg:hidden"
            >
              <span className="sr-only">{t.nav.menuSr}</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                {isOpen ? (
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <ul className="space-y-2 text-sm font-medium text-white/85">
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            onClick={closeMobileMenu}
            className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-500"
          >
            {t.nav.bookCta}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

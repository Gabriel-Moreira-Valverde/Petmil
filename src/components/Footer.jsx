import { useLanguage } from "../context/LanguageContext";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: "/instagram.svg" },
  { label: "Facebook", href: "https://facebook.com", icon: "/facebook.svg" },
  { label: "Twitter", href: "https://twitter.com", icon: "/twitter.svg" },
];

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0f1410] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-6 h-48 w-48 rounded-full bg-green-500/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-2 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3">
              <img src="/Logo.png" alt="Logo Petmil" className="h-10 w-10" />
              <span className="text-2xl font-bold tracking-wide">Petmil</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">{t.footer.description}</p>
            <a
              href="#contato"
              className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-500"
            >
              {t.footer.scheduleCta}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
              {t.footer.navigationTitle}
            </h3>
            <nav aria-label={t.footer.navigationTitle} className="mt-4">
              <ul className="space-y-2.5 text-sm text-white/70">
                {t.footer.links.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition-colors duration-300 hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">{t.footer.socialTitle}</h3>
            <div className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-white/20"
                >
                  <img src={social.icon} alt={social.label} className="h-4 w-4 opacity-85" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/65">{t.footer.location}</p>
            <p className="mt-1 text-sm text-white/65">(11) 99999-9999</p>
            <p className="mt-1 text-sm text-white/65">contato@petmil.com</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Petmil. {t.footer.rights}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

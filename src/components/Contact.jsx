import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="relative overflow-hidden py-22 scroll-mt-24 sm:py-24">
      <div aria-hidden="true" className="contact-bg pointer-events-none absolute inset-0">
        <div className="contact-wave contact-wave-1" />
        <div className="contact-wave contact-wave-2" />
        <div className="contact-glow contact-glow-1" />
        <div className="contact-glow contact-glow-2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div data-aos="fade-right" className="text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-300">{t.contact.eyebrow}</span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">{t.contact.title}</h2>

            <p className="mx-auto mt-5 max-w-xl text-white/70 sm:text-lg lg:mx-0">{t.contact.description}</p>

            <ul className="mx-auto mt-9 max-w-md space-y-3 lg:mx-0">
              {t.contact.list.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl bg-white/8 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <p className="text-sm text-white/85">
                    <span className="font-semibold text-white">{item.label}:</span> {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-left" data-aos-delay="120" className="relative">
            <div className="rounded-[2rem] bg-white/8 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
              <h3 className="text-2xl font-semibold text-white">{t.contact.formTitle}</h3>

              <form className="mt-8 space-y-5">
                <div>
                  <label htmlFor="nome" className="text-sm font-medium text-white/80">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    className="mt-2 w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none ring-1 ring-white/10 transition focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-white/80">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="mt-2 w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none ring-1 ring-white/10 transition focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="text-sm font-medium text-white/80">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="mensagem"
                    rows="4"
                    placeholder={t.contact.messagePlaceholder}
                    className="mt-2 w-full resize-none rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none ring-1 ring-white/10 transition focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white shadow-lg shadow-green-700/25 transition-all duration-300 hover:bg-green-500 active:scale-[0.99]"
                >
                  {t.contact.submitCta}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

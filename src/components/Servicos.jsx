import { useLanguage } from "../context/LanguageContext";

function Servicos() {
  const { t } = useLanguage();

  return (
    <section id="servicos" className="relative overflow-hidden py-28 scroll-mt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(34,197,94,0.2),transparent_42%),radial-gradient(circle_at_88%_28%,rgba(16,185,129,0.16),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(22,163,74,0.14),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <p className="text-green-400 text-sm uppercase tracking-[0.2em]">{t.services.eyebrow}</p>

          <h2 className="mt-4 font-semibold leading-tight text-4xl sm:text-5xl md:text-6xl">
            {t.services.title}
          </h2>

          <p className="mt-5 text-white/70 text-base sm:text-lg">{t.services.description}</p>
        </header>

        <ul className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {t.services.items.map((service, index) => (
            <li key={service.title}>
              <article
                data-aos="fade-up"
                data-aos-delay={String(index * 100)}
                className="
                  h-full rounded-3xl border border-white/15 bg-white/8 p-8
                  backdrop-blur-sm shadow-lg shadow-black/25
                  transition-all duration-300 hover:-translate-y-2
                  hover:border-green-500/60 hover:bg-white/12
                "
              >
                <div className="inline-flex rounded-full bg-green-600/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green-300">
                  {t.services.tag}
                </div>

                <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>

                <p className="mt-4 text-white/75 leading-relaxed">{service.description}</p>

                <div className="mt-8 flex items-end justify-between gap-4">
                  <p className="text-lg font-medium text-green-300">{service.price}</p>

                  <button
                    className="
                      rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold
                      text-white transition-all duration-300 hover:bg-white
                      hover:text-green-600 active:scale-95
                    "
                  >
                    {t.services.cta}
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Servicos;

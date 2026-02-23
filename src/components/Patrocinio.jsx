import "aos/dist/aos.css";

const PARTNER_BENEFITS = [
  "Padrao de higiene e seguranca",
  "Atendimento agil para alta demanda",
  "Acompanhamento continuo com time dedicado",
];

const PARTNER_STATS = [
  { value: "+120", label: "parceiros ativos" },
  { value: "98%", label: "renovacao mensal" },
  { value: "24h", label: "retorno comercial" },
];

function Patrocinio() {
  return (
    <section id="patrocinios" className="relative overflow-hidden bg-white py-20 sm:py-24 scroll-mt-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-green-100/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-64 w-64 rounded-full bg-emerald-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div data-aos="fade-right" className="text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-green-700">Parcerias</span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Marcas que confiam no nosso cuidado
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-black/65 sm:text-lg lg:mx-0">
            Empresas e parceiros escolhem a Petmil para oferecer experiencia premium com foco em bem-estar
            e constancia no atendimento.
          </p>

          <ul className="mx-auto mt-8 max-w-md space-y-3 lg:mx-0">
            {PARTNER_BENEFITS.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-black/8 bg-black/[0.03] px-4 py-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600/15 text-green-700">
                  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                    <path d="M5 10.5L8.3 13.6L15 6.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-black/75">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="mt-8 inline-flex rounded-xl bg-green-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 active:scale-95"
          >
            Solicitar parceria
          </a>
        </div>

        <div data-aos="fade-left" data-aos-delay="120" className="relative">
          <div className="rounded-[2.2rem] border border-black/10 bg-gradient-to-br from-white to-green-50 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:p-7">
            <div className="rounded-[1.5rem] border border-black/8 bg-white p-4 sm:p-5">
              <img
                src="/empresas.png"
                alt="Logos de empresas parceiras"
                draggable="false"
                className="w-full rounded-2xl object-cover select-none"
              />
            </div>

            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {PARTNER_STATS.map((item) => (
                <li key={item.label} className="rounded-xl border border-black/8 bg-white/90 px-3 py-3 text-center">
                  <p className="text-xl font-bold text-black">{item.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-black/50">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Patrocinio;

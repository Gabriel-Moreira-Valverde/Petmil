import { useMemo, useState } from "react";

const PLANS = [
  {
    name: "Pet Start",
    subtitle: "Para manter seu pet limpo e cheiroso o mês inteiro.",
    monthlyPrice: 79,
    yearlyPrice: 790,
    cta: "Escolher Start",
    delay: "0",
    featured: false,
    features: [
      "1 banho completo por mês",
      "Hidratação suave",
      "Corte de unhas",
      "10% em produtos da loja",
    ],
  },
  {
    name: "Bem-Estar",
    subtitle: "Equilíbrio ideal entre cuidado e custo-benefício.",
    monthlyPrice: 129,
    yearlyPrice: 1290,
    cta: "Escolher Bem-Estar",
    delay: "100",
    featured: false,
    features: [
      "2 banhos completos por mês",
      "1 tosa higiênica por mês",
      "Limpeza de ouvidos",
      "Retorno de check-up em 15 dias",
    ],
  },
  {
    name: "Premium",
    subtitle: "O plano mais pedido por tutores que querem praticidade.",
    monthlyPrice: 189,
    yearlyPrice: 1890,
    cta: "Quero Premium",
    delay: "200",
    featured: true,
    features: [
      "4 banhos completos por mês",
      "2 tosas higiênicas por mês",
      "Hidratação premium e perfume importado",
      "Leva e traz com horário agendado",
    ],
  },
  {
    name: "Família Pet",
    subtitle: "Perfeito para casas com mais de um pet.",
    monthlyPrice: 279,
    yearlyPrice: 2790,
    cta: "Escolher Família",
    delay: "300",
    featured: false,
    features: [
      "Benefícios para até 2 pets",
      "4 banhos + 2 tosas por mês",
      "Atendimento prioritário aos sábados",
      "15% em vacinas e farmácia parceira",
    ],
  },
];

const ALL_PLANS_INCLUDE = [
  "Equipe especializada em banho e tosa",
  "Produtos de qualidade dermatológica",
  "Ambiente higienizado e seguro",
  "Lembretes de agendamento no WhatsApp",
];

const ENTERPRISE_BENEFITS = [
  "Tabela com preço por volume",
  "Coleta e entrega programada",
  "Gestor de conta dedicado",
  "Atendimento em horário estendido",
];

const formatCurrency = (value, withDecimals = false) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: withDecimals ? 2 : 0,
    maximumFractionDigits: withDecimals ? 2 : 0,
  }).format(value);

// Sub-componente para manter o código limpo
const PlanCard = ({ plan, billing, isYearly }) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const yearlySavings = plan.monthlyPrice * 12 - plan.yearlyPrice;

  return (
    <li className={plan.featured ? "xl:-mt-4" : ""}>
      <article
        className={`h-full flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
          plan.featured
            ? "relative border-green-600/35 bg-gradient-to-b from-green-50 to-white shadow-[0_24px_55px_rgba(22,163,74,0.15)] ring-2 ring-green-600/20"
            : "border-black/10 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
        }`}
        data-aos="fade-up"
        data-aos-delay={plan.delay}
      >
        {plan.featured && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
            Mais escolhido
          </span>
        )}

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
          <p className="mt-2 text-black/70 text-sm leading-relaxed min-h-[40px]">
            {plan.subtitle}
          </p>
        </div>

        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-black/40">
            {isYearly ? "Plano Anual" : "Plano Mensal"}
          </p>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-5xl font-bold text-black">{formatCurrency(price)}</span>
          </div>
          
          <div className="mt-2 min-h-[48px]">
            {isYearly ? (
              <>
                <p className="text-xs text-black/60 font-medium">
                  Equivale a {formatCurrency(plan.yearlyPrice / 12, true)}/mês
                </p>
                <p className="text-sm font-bold text-green-700">
                  Economize {formatCurrency(yearlySavings)} no ano
                </p>
              </>
            ) : (
              <p className="text-sm text-black/60 italic">
                ou {formatCurrency(plan.yearlyPrice)} no anual
              </p>
            )}
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-black/75">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600/15 text-green-700">
                <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                  <path d="M5 10.5L8.3 13.6L15 6.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`mt-auto w-full rounded-xl py-4 text-base font-bold transition-all duration-300 active:scale-95 ${
            plan.featured
              ? "bg-green-600 text-white shadow-md hover:bg-green-700"
              : "border border-black/20 bg-white text-black hover:bg-black hover:text-white"
          }`}
        >
          {plan.cta}
        </button>
      </article>
    </li>
  );
};

function Planos() {
  const [billing, setBilling] = useState("mensal");
  const isYearly = billing === "anual";

  const maxSavings = useMemo(() => 
    PLANS.reduce((max, plan) => {
      const discount = ((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12)) * 100;
      return Math.max(max, Math.round(discount));
    }, 0), []
  );

  return (
    <section id="planos" className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8faf9] to-white py-24 scroll-mt-24">
      {/* Background Decorativo */}
      <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-green-50 blur-3xl opacity-60" />
      <div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-emerald-50 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-green-700 text-xs font-bold uppercase tracking-[0.3em]">
            Assinaturas e Pacotes
          </span>
          <h2 className="mt-4 text-black font-bold leading-tight text-4xl sm:text-5xl">
            Escolha o cuidado ideal para o seu pet
          </h2>
          <p className="mt-6 text-black/60 text-lg">
            Planos recorrentes que garantem saúde, higiene e economia para você.
          </p>

          {/* Toggle Billing */}
          <div className="mt-10 inline-flex items-center rounded-2xl border border-black/5 bg-gray-50/50 p-1.5 shadow-inner">
            <button
              onClick={() => setBilling("mensal")}
              className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all ${
                !isYearly ? "bg-white text-black shadow-md" : "text-black/50 hover:text-black"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBilling("anual")}
              className={`relative rounded-xl px-6 py-2.5 text-sm font-bold transition-all ${
                isYearly ? "bg-white text-black shadow-md" : "text-black/50 hover:text-black"
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-4 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-black text-white shadow-sm animate-pulse">
                -{maxSavings}%
              </span>
            </button>
          </div>
        </header>

        {/* Grid de Planos */}
        <ul className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} billing={billing} isYearly={isYearly} />
          ))}
        </ul>

        {/* Info Extra */}
        <div className="mt-16 rounded-3xl border border-black/5 bg-white/60 p-8 backdrop-blur-sm" data-aos="fade-up">
          <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-6 text-center">
            Incluso em todos os pacotes
          </h4>
          <ul className="flex flex-wrap justify-center gap-4">
            {ALL_PLANS_INCLUDE.map((item) => (
              <li key={item} className="flex items-center gap-2 rounded-full bg-green-50 px-5 py-2.5 text-sm font-medium text-green-800 border border-green-100/50">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Banner Parcerias */}
        <div className="mt-12 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-800 to-green-600 p-1 bg-white/10 shadow-2xl" data-aos="zoom-in">
          <div className="grid gap-10 rounded-[2.3rem] bg-green-700/20 p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="text-white">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-200">
                Parcerias e Volume
              </span>
              <h3 className="mt-4 text-3xl font-bold leading-tight">
                Planos para canis, gatis e hotéis pet
              </h3>
              <p className="mt-4 max-w-xl text-green-50/80">
                Condições exclusivas para parceiros que possuem alta demanda e buscam excelência no atendimento recorrente.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {ENTERPRISE_BENEFITS.map((b) => (
                  <div key={b} className="flex items-center gap-3 text-sm font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-300" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 min-w-[240px]">
              <button className="w-full rounded-2xl bg-white py-4 text-green-800 font-black shadow-xl hover:bg-gray-50 transition-all active:scale-95">
                Solicitar Proposta
              </button>
              <button className="w-full rounded-2xl border-2 border-white/30 py-4 text-white font-bold hover:bg-white/10 transition-all">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planos;
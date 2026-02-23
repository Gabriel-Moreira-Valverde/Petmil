import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const formatCurrency = (value, language, withDecimals = false) =>
  new Intl.NumberFormat(language === "en" ? "en-US" : "pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: withDecimals ? 2 : 0,
    maximumFractionDigits: withDecimals ? 2 : 0,
  }).format(value);

const PlanCard = ({ plan, isYearly, language, copy, delay }) => {
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
        data-aos-delay={delay}
      >
        {plan.featured && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
            {copy.mostChosen}
          </span>
        )}

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
          <p className="mt-2 text-black/70 text-sm leading-relaxed min-h-[40px]">{plan.subtitle}</p>
        </div>

        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-black/40">
            {isYearly ? copy.yearlyPlanLabel : copy.monthlyPlanLabel}
          </p>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-5xl font-bold text-black">{formatCurrency(price, language)}</span>
          </div>

          <div className="mt-2 min-h-[48px]">
            {isYearly ? (
              <>
                <p className="text-xs text-black/60 font-medium">
                  {copy.yearlyEquivalent} {formatCurrency(plan.yearlyPrice / 12, language, true)}
                  {copy.yearlyEquivalentSuffix}
                </p>
                <p className="text-sm font-bold text-green-700">
                  {copy.yearlySavings} {formatCurrency(yearlySavings, language)} {copy.yearlySavingsSuffix}
                </p>
              </>
            ) : (
              <p className="text-sm text-black/60 italic">
                {copy.yearlyAlternative} {formatCurrency(plan.yearlyPrice, language)} {copy.yearlyAlternativeSuffix}
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
  const { t, language } = useLanguage();
  const [billing, setBilling] = useState("monthly");
  const isYearly = billing === "yearly";

  const maxSavings = useMemo(
    () =>
      t.plans.items.reduce((max, plan) => {
        const discount = ((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12)) * 100;
        return Math.max(max, Math.round(discount));
      }, 0),
    [t.plans.items]
  );

  return (
    <section
      id="planos"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8faf9] to-white py-24 scroll-mt-24"
    >
      <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-green-50 blur-3xl opacity-60" />
      <div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-emerald-50 blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-green-700 text-xs font-bold uppercase tracking-[0.3em]">{t.plans.eyebrow}</span>
          <h2 className="mt-4 text-black font-bold leading-tight text-4xl sm:text-5xl">{t.plans.title}</h2>
          <p className="mt-6 text-black/60 text-lg">{t.plans.description}</p>

          <div className="mt-10 inline-flex items-center rounded-2xl border border-black/5 bg-gray-50/50 p-1.5 shadow-inner">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all ${
                !isYearly ? "bg-white text-black shadow-md" : "text-black/50 hover:text-black"
              }`}
            >
              {t.plans.monthly}
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`relative rounded-xl px-6 py-2.5 text-sm font-bold transition-all ${
                isYearly ? "bg-white text-black shadow-md" : "text-black/50 hover:text-black"
              }`}
            >
              {t.plans.yearly}
              <span className="absolute -top-2 -right-4 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-black text-white shadow-sm animate-pulse">
                -{maxSavings}%
              </span>
            </button>
          </div>
        </header>

        <ul className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
          {t.plans.items.map((plan, index) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              isYearly={isYearly}
              language={language}
              copy={t.plans}
              delay={String(index * 100)}
            />
          ))}
        </ul>

        <div className="mt-16 rounded-3xl border border-black/5 bg-white/60 p-8 backdrop-blur-sm" data-aos="fade-up">
          <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-6 text-center">
            {t.plans.includeTitle}
          </h4>
          <ul className="flex flex-wrap justify-center gap-4">
            {t.plans.allInclude.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-full bg-green-50 px-5 py-2.5 text-sm font-medium text-green-800 border border-green-100/50"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-12 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-800 to-green-600 p-1 bg-white/10 shadow-2xl"
          data-aos="zoom-in"
        >
          <div className="grid gap-10 rounded-[2.3rem] bg-green-700/20 p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="text-white">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-200">{t.plans.enterpriseBadge}</span>
              <h3 className="mt-4 text-3xl font-bold leading-tight">{t.plans.enterpriseTitle}</h3>
              <p className="mt-4 max-w-xl text-green-50/80">{t.plans.enterpriseDescription}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.plans.enterpriseBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 text-sm font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-300" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 min-w-[240px]">
              <button className="w-full rounded-2xl bg-white py-4 text-green-800 font-black shadow-xl hover:bg-gray-50 transition-all active:scale-95">
                {t.plans.proposalCta}
              </button>
              <button className="w-full rounded-2xl border-2 border-white/30 py-4 text-white font-bold hover:bg-white/10 transition-all">
                {t.plans.whatsappCta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planos;

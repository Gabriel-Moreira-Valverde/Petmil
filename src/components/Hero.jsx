import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <main
      id="inicio"
      data-aos="fade-up"
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-6 pt-3 pb-24 scroll-mt-24"
    >
      <div aria-hidden="true" className="hero-bg pointer-events-none absolute inset-0">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-grid" />
      </div>

      <section className="relative z-10 max-w-4xl space-y-6">
        <h1 className="font-semibold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {t.hero.titleTop} <br className="hidden sm:block" />
          {t.hero.titleBottom}
        </h1>

        <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">{t.hero.description}</p>
      </section>

      <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#contato"
          className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-green-600 shadow-lg hover:shadow-green-500/30 active:scale-95"
        >
          {t.hero.primaryCta}
        </a>

        <a
          href="#servicos"
          className="select-none cursor-pointer rounded-xl border border-white/40 px-8 py-3 font-medium transition-all duration-300 hover:border-white hover:shadow-[inset_0_0_0_2px_white]"
        >
          {t.hero.secondaryCta}
        </a>
      </div>

      <div className="relative z-10 w-full max-w-5xl h-[420px] mt-20">
        <img
          src="/gato.png"
          alt={t.hero.altCat}
          draggable="false"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] md:w-[460px] rounded-3xl shadow-2xl select-none"
        />

        <img
          src="/cachorros.png"
          alt={t.hero.altDogs}
          draggable="false"
          className="absolute left-0 top-[70%] -translate-y-1/2 w-[200px] sm:w-[250px] md:w-[320px] rounded-2xl shadow-xl select-none"
        />

        <img
          src="/mulheres.png"
          alt={t.hero.altService}
          draggable="false"
          className="absolute right-0 top-[55%] -translate-y-1/2 w-[220px] sm:w-[280px] md:w-[350px] rounded-2xl shadow-xl select-none"
        />
      </div>
    </main>
  );
}

export default Hero;

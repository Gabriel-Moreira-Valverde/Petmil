function Hero() {
  return (
    <main
      id="inicio"
      data-aos="fade-up"
      className="
        min-h-screen
        flex flex-col items-center justify-center
        text-center
        px-6
        pt-3 pb-24
        scroll-mt-24
      "
    >

      {/* TITULO */}
      <section className="max-w-4xl space-y-6">
        <h1 className="
          font-semibold leading-tight
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
        ">
          Cuidado premium <br className="hidden sm:block" />
          para pets felizes
        </h1>

        <p className="
          text-white/60
          text-base sm:text-lg
          max-w-2xl
          mx-auto
        ">
          Banho, tosa e bem-estar em um espaço acolhedor, seguro e
          profissional. Seu pet merece carinho e atenção especializada.
        </p>
      </section>

      {/* BOTÕES */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button
          className="
            bg-green-600 text-white
            px-8 py-3
            rounded-xl
            font-semibold
            transition-all duration-300
            hover:bg-white hover:text-green-600
            shadow-lg hover:shadow-green-500/30
            active:scale-95
          "
        >
          Agendar
        </button>

        <a
          className="
            select-none cursor-pointer
            rounded-xl
            border border-white/40
            px-8 py-3
            font-medium
            transition-all duration-300
            hover:border-white
            hover:shadow-[inset_0_0_0_2px_white]
          "
        >
          Saiba mais
        </a>
      </div>

      {/* IMAGENS */}
      <div className="relative w-full max-w-5xl h-[420px] mt-20">

        <img
          src="/gato.png"
          alt="Gato"
          draggable="false"
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[300px] sm:w-[380px] md:w-[460px]
            rounded-3xl
            shadow-2xl
            select-none
          "
        />

        <img
          src="/cachorros.png"
          alt="Cachorros"
          draggable="false"
          className="
            absolute left-0 top-[70%]
            -translate-y-1/2
            w-[200px] sm:w-[250px] md:w-[320px]
            rounded-2xl
            shadow-xl
            select-none
          "
        />

        <img
          src="/mulheres.png"
          alt="Atendimento"
          draggable="false"
          className="
            absolute right-0 top-[55%]
            -translate-y-1/2
            w-[220px] sm:w-[280px] md:w-[350px]
            rounded-2xl
            shadow-xl
            select-none
          "
        />

      </div>
    </main>
  )
}

export default Hero
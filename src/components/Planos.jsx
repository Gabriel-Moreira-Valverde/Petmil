function Planos() {
  const btnOutline =
    "mt-6 w-full rounded-xl border border-black/40 py-3 text-base font-medium text-black transition-all duration-300 hover:bg-black hover:text-white active:scale-95"

  const cardBase =
    "h-full rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/10 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2"

  return (
    <section id="planos" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <header className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <p className="text-black/40 text-sm uppercase tracking-widest">
            Planos e preços
          </p>

          <h2 className="text-black font-semibold mt-4 leading-tight
                         text-4xl sm:text-5xl md:text-6xl">
            Escolha seu plano ideal
          </h2>
        </header>

        {/* GRID */}
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">

          {/* CARD */}
          <li>
            <article className={cardBase} data-aos="fade-up">
              <div>
                <h3 className="text-2xl font-semibold text-black">Gratuito</h3>
                <p className="mt-3 text-black/70">
                  Funcionalidades básicas para começar.
                </p>
              </div>

              <div className="mt-auto pt-10">
                <p className="text-5xl font-semibold text-black">R$0</p>
                <p className="mt-1 text-black/60">por mês</p>

                <button className={btnOutline}>
                  Começar
                </button>
              </div>
            </article>
          </li>

          {/* CARD */}
          <li>
            <article className={cardBase} data-aos="fade-up" data-aos-delay="100">
              <div>
                <h3 className="text-2xl font-semibold text-black">Básico</h3>
                <p className="mt-3 text-black/70">
                  Recursos essenciais do dia a dia.
                </p>
              </div>

              <div className="mt-auto pt-10">
                <p className="text-black/60">A partir de</p>
                <p className="text-5xl font-semibold text-black">R$19</p>
                <p className="mt-1 text-black/60">ou R$199 anual</p>

                <button className={btnOutline}>
                  Assinar
                </button>
              </div>
            </article>
          </li>

          {/* DESTAQUE */}
          <li>
            <article
              className="relative h-full rounded-3xl bg-white p-8 shadow-xl ring-2 ring-green-600 flex flex-col transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-4 py-1 rounded-full shadow-md">
                Mais escolhido
              </span>

              <div>
                <h3 className="text-2xl font-semibold text-black">Equipe</h3>
                <p className="mt-3 text-black/70">
                  Ideal para colaboração em equipe.
                </p>
              </div>

              <div className="mt-auto pt-10">
                <p className="text-black/60">A partir de</p>
                <p className="text-5xl font-semibold text-black">R$29</p>
                <p className="mt-1 text-black/60">ou R$299 anual</p>

                <button
                  className="mt-6 w-full rounded-xl bg-green-600 py-3 text-white font-medium transition-all duration-300 hover:bg-green-700 active:scale-95 shadow-md"
                >
                  Assinar
                </button>
              </div>
            </article>
          </li>

          {/* CARD */}
          <li>
            <article className={cardBase} data-aos="fade-up" data-aos-delay="300">
              <div>
                <h3 className="text-2xl font-semibold text-black">Business</h3>
                <p className="mt-3 text-black/70">
                  Soluções completas para empresas.
                </p>
              </div>

              <div className="mt-auto pt-10">
                <p className="text-black/60">A partir de</p>
                <p className="text-5xl font-semibold text-black">R$49</p>
                <p className="mt-1 text-black/60">ou R$499 anual</p>

                <button className={btnOutline}>
                  Assinar
                </button>
              </div>
            </article>
          </li>

        </ul>

        {/* ENTERPRISE */}
        <div
          className="mt-20 rounded-3xl bg-gradient-to-r from-green-600 to-green-700 p-10 text-white shadow-xl"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-semibold">Enterprise</h3>
          <p className="mt-3 text-white/90 max-w-2xl">
            Planos sob medida para grandes demandas. Fale conosco para uma
            proposta personalizada.
          </p>

          <button
            className="mt-6 rounded-xl bg-white px-6 py-3 text-green-700 font-medium transition-all duration-300 hover:bg-gray-100 active:scale-95"
          >
            Agendar
          </button>
        </div>

      </div>
    </section>
  )
}

export default Planos
function Planos() {
    const btnOutline =
        "mt-6 w-full rounded-xl border border-black/60 py-3 text-base font-medium text-black transition-all duration-300 hover:shadow-[inset_0_0_0_1px_black]"

    const cardBase =
        "h-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/10 flex flex-col"

    return (
        <section id="planos" className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center" data-aos="fade-up">
                    <p className="text-black/30 text-base">Planos e preços</p>
                    <h2 className="text-black text-6xl font-semibold mt-2">
                        Escolha seu plano ideal
                    </h2>
                </header>

                {/* Lista de planos */}
                <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                    {/* Plano 1 */}
                    <li>
                        <article className={cardBase} data-aos="fade-right">
                            <div>
                                <h3 className="text-2xl font-semibold text-black">Gratuito</h3>
                                <p className="mt-3 text-base text-black/70">
                                    Funcionalidades básicas <br />
                                    para começar.
                                </p>
                            </div>

                            <div className="mt-auto pt-10">
                                <p className="text-5xl font-semibold text-black">R$0</p>
                                <p className="mt-1 text-base text-black/60">por mês</p>

                                <button type="button" className={btnOutline}>
                                    Começar
                                </button>
                            </div>
                        </article>
                    </li>

                    {/* Plano 2 */}
                    <li>
                        <article className={cardBase} data-aos="fade-right">
                            <div>
                                <h3 className="text-2xl font-semibold text-black">Básico</h3>
                                <p className="mt-3 text-base text-black/70">
                                    Recursos essenciais do dia <br />
                                    a dia.
                                </p>
                            </div>

                            <div className="mt-auto pt-10">
                                <p className="text-base text-black/60">A partir de</p>
                                <p className="text-5xl font-semibold text-black">R$19</p>
                                <p className="mt-1 text-base text-black/60">ou R$199 anual</p>

                                <button type="button" className={btnOutline}>
                                    Assinar
                                </button>
                            </div>
                        </article>
                    </li>

                    {/* Plano 3 (destaque) */}
                    <li>
                        <article
                            className="h-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-green-700 flex flex-col"
                            data-aos="fade-left"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold text-black">Equipe</h3>
                                <p className="mt-3 text-base text-black/70">
                                    Colabore com seu time.
                                </p>
                            </div>

                            <div className="mt-auto pt-10">
                                <p className="text-base text-black/60">A partir de</p>
                                <p className="text-5xl font-semibold text-black">R$29</p>
                                <p className="mt-1 text-base text-black/60">ou R$299 anual</p>

                                <button
                                    type="button"
                                    className="mt-6 w-full rounded-xl bg-green-700 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-green-600"
                                >
                                    Assinar
                                </button>
                            </div>
                        </article>
                    </li>

                    {/* Plano 4 */}
                    <li>
                        <article className={cardBase} data-aos="fade-left">
                            <div>
                                <h3 className="text-2xl font-semibold text-black">Business</h3>
                                <p className="mt-3 text-base text-black/70">
                                    Soluções completas para <br />
                                    empresas.
                                </p>
                            </div>

                            <div className="mt-auto pt-10">
                                <p className="text-base text-black/60">A partir de</p>
                                <p className="text-5xl font-semibold text-black">R$49</p>
                                <p className="mt-1 text-base text-black/60">ou R$499 anual</p>

                                <button type="button" className={btnOutline}>
                                    Assinar
                                </button>
                            </div>
                        </article>
                    </li>
                </ul>

                {/* Enterprise */}
                <section
                    className="mt-16 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/10"
                    data-aos="fade-up"
                >
                    <header>
                        <h3 className="text-2xl font-semibold text-black">Enterprise</h3>
                        <p className="mt-2 text-black/70">
                            Planos sob medida para grandes demandas. Fale conosco para uma
                            proposta personalizada.
                        </p>
                    </header>

                    <div className="mt-6">
                        <button
                            type="button"
                            className="rounded-xl bg-green-700 px-6 py-3 text-white transition-colors duration-300 hover:bg-green-600"
                        >
                            Agendar
                        </button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Planos

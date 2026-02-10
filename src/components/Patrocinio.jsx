import "aos/dist/aos.css"

function Patrocinio() {
    return (
        <section className="bg-white py-24" id="patrocinios">
            <div
                className="max-w-7xl mx-auto px-6 flex justify-between items-center"
                data-aos="fade-up"
            >

                {/* Texto */}
                <div className="space-y-6" data-aos="fade-right">
                    <h2 className="text-7xl font-semibold text-black leading-tight" id="patrocinios">
                        Marcas que <br />confiam em<br /> nosso cuidado
                    </h2>

                    <p className="text-lg text-black/70">
                        Veja empresas que escolheram nossos <br />
                        serviços para pets felizes e saudáveis.
                    </p>
                </div>

                {/* Logos */}
                <img
                    src="/empresas.png"
                    alt="Empresas"
                    draggable="false"
                    data-aos="fade-left"
                    className="max-w-xl pointer-events-none select-none"
                />
            </div>
        </section>
    )
}

export default Patrocinio

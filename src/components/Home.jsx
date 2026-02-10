function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center pb-20 pt-6" data-aos="fade-up">

      {/* TITULO */}
      <section className="space-y-6" id="inicio">
        <h1 className="text-8xl font-semibold">Cuidado premium <br />para pets felizes</h1>
        <p className="text-white/50 text-lg">Banho, tosa e bem-estar em um espaço acolhedor, seguro e <br />profissional. Seu pet merece carinho e atenção especializada.</p>
      </section>

      {/* BOTÕES */}
      <div className="mt-8 flex gap-4">
        <button className="cursor-pointer hover:bg-white hover:text-green-700 select-none bg-green-700 py-3 px-5 rounded-lg transition-all duration-300">Agendar</button>
        <a className="cursor-pointer select-none rounded-lg border border-white py-3 px-5 hover:shadow-[inset_0_0_0_2px_white] transition-all duration-300">Saiba mais</a>
      </div>

      {/* IMAGENS */}
      <div className="relative w-full max-w-4xl h-[380px] mt-14">
        <img
          src="/gato.png"
          alt="Gato"
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[360px] md:w-[430px]
            rounded-3xl
            z-0
          "
        />

        <img
          src="/cachorros.png"
          alt="Cachorros"
          className="
            absolute left-0 top-[70%]
            -translate-y-1/2
            w-[240px] md:w-[300px]
            rounded-2xl
            z-20
          "
        />

        <img
          src="/mulheres.png"
          alt="Atendimento"
          className="
            absolute right-0 top-[55%]
            -translate-y-1/2
            w-[260px] md:w-[340px]
            rounded-2xl
            z-20
          "
        />
      </div>
    </main>
  )
}

export default Home

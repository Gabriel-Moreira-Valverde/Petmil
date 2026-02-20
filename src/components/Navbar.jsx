function Navbar() {
  return (
    <header className="border-b border-white/10 backdrop-blur-md bg-black/12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="w-full py-4 grid grid-cols-3 items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/Logo.png" alt="Logo Petmil" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-white tracking-wide select-none">
              Petmil
            </h1>
          </div>

          {/* Menu */}
          <ul className="flex justify-center items-center gap-10 text-white/70 text-sm font-medium">

            {[
              { label: "Início", href: "#inicio" },
              { label: "Serviços", href: "#servicos" },
              { label: "Patrocínio", href: "#patrocinios" },
              { label: "Planos", href: "#planos" },
              { label: "Contato", href: "#contato" }
            ].map((item) => (
              <li key={item.href} className="relative group">
                <a
                  href={item.href}
                  className="hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>

                {/* Linha animada embaixo */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}

          </ul>

          {/* Botão */}
          <div className="flex justify-end">
            <button
              className="bg-green-600 text-white px-7 py-2 rounded-lg
                         hover:bg-white hover:text-green-600
                         transition-all duration-300 font-semibold
                         shadow-lg hover:shadow-green-500/30"
            >
              Agendar
            </button>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Navbar
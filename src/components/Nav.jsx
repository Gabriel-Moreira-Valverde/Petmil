function App() {
  return (
    <div className="border-b border-white/10">
      <div className="max-w-8xl mx-auto px-6">
        <nav className="w-full py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">

            {/* Logo + Nome */}
            <div className="flex items-center gap-3">
              <img src="/Logo.png" alt="Logo" className="w-10 h-10" />
              <h1 className="text-2xl font-bold">Petmil</h1>
            </div>

            {/* Menu */}
            <ul className="flex items-center gap-8 font-medium">
              {/* Serviços */}
              <li className="relative group">
                <button className="cursor-pointer hover:text-green-700 select-none transition-all duration-300">
                  Serviços <span className="text-xs">▼</span>
                </button>

                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <ul className="w-40 bg-white shadow-lg rounded-md p-2">
                    <li className="px-4 py-2 rounded cursor-pointer  hover:text-green-700  text-black">
                      Tosa
                    </li>
                    <li className="px-4 py-2 rounded cursor-pointer  hover:text-green-700  text-black">
                      Banho
                    </li>
                    <li className="px-4 py-2 rounded cursor-pointer  hover:text-green-700  text-black">
                      Veterinario
                    </li>
                    <li className="px-4 py-2 rounded cursor-pointer  hover:text-green-700  text-black">
                      Delivery
                    </li>
                  </ul>
                </div>
              </li>

              <li className="cursor-pointer hover:text-green-700 transition-all duration-300">Sobre</li>
              <li className="cursor-pointer hover:text-green-700 transition-all duration-300">Blog</li>

              {/* Ajuda */}
              <li className="relative group">
                <button className="cursor-pointer hover:text-green-700 select-none transition-all duration-300">
                  Ajuda <span className="text-xs">▼</span>
                </button>

                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <ul className="w-40 bg-white shadow-lg rounded-md p-2">
                    <li className="px-4 py-2 rounded cursor-pointer hover:text-green-700  text-black">
                      WhatsApp
                    </li>
                    <li className="px-4 py-2 rounded cursor-pointer hover:text-green-700  text-black">
                      E-mail
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

          </div>

          {/* Botão */}
          <button className="bg-green-700 text-white px-7 py-2 rounded-md hover:bg-white hover:text-green-700 transition-all duration-300">
            Agendar
          </button>
        </nav>
      </div>
    </div>
  )
}

export default App

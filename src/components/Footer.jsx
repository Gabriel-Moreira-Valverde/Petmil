function Footer() {
    return (
        <footer className="text-white">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Logo / Nome */}
                <div className="flex gap-3 items-center">
                    <img src="/Logo.png" alt="Logo Petmil" className="w-10 h-10" />
                    <h3 className="text-3xl font-semibold">Petmil</h3>
                </div>

                {/* Navegação */}
                <nav aria-label="Rodapé">
                    <ul className="flex flex-wrap justify-center gap-6 text-base">
                        <li>
                            <a href="#inicio" className="hover:text-white transition-colors duration-300">
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="#patrocinios" className="hover:text-white transition-colors duration-300">
                                Patrocinios
                            </a>
                        </li>
                        <li>
                            <a href="#planos" className="hover:text-white transition-colors duration-300">
                                Planos
                            </a>
                        </li>
                        <li>
                            <a href="#contato" className="hover:text-white transition-colors duration-300">
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Redes sociais */}
                <div className="flex gap-4">
                    <a href="https://instagram.com" aria-label="Instagram">
                        <img
                            src="/instagram.svg"
                            alt="Instagram"
                            className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity duration-300"
                        />
                    </a>

                    <a href="https://facebook.com" aria-label="Facebook">
                        <img
                            src="/facebook.svg"
                            alt="Facebook"
                            className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity duration-300"
                        />
                    </a>

                    <a href="https://twitter.com" aria-label="Twitter">
                        <img
                            src="/twitter.svg"
                            alt="Twitter"
                            className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity duration-300"
                        />
                        <link rel="stylesheet" href="instagram.com" />
                    </a>
                </div>

            </div>

            {/* Linha final */}
            <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
                © {new Date().getFullYear()} Petmil. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer

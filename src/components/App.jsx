import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Nav from "./Nav.jsx"
import Home from "./Home.jsx"
import Patrocinio from "./Patrocinio.jsx"
import Planos from "./Planos.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"

function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
        })
    }, [])

    return (
        <>
            <Nav />
            <Home />
            <Patrocinio />
            <Planos />
            <Contact />
            <Footer />
        </>
    )
}

export default App

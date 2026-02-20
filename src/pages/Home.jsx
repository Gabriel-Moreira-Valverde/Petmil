import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Patrocinio from "../components/Patrocinio"
import Planos from "../components/Planos"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Patrocinio />
      <Planos />
      <Contact />
      <Footer />
    </>
  )
}

export default Home

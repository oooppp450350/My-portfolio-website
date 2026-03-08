import { HeroSection } from "../components/lyc-portfolio/HeroSection"
import { Navbar } from "../components/lyc-portfolio/Navbar"
import { Marquee } from "../components/lyc-portfolio/Marquee"
import { About } from "../components/lyc-portfolio/About"
import { Experience } from "../components/lyc-portfolio/Experience"
import { Skills } from "../components/lyc-portfolio/Skills"
import { Portfolio } from "../components/lyc-portfolio/Portfolio"
import { Articles } from "../components/lyc-portfolio/Articles"
import { Footer } from "../components/lyc-portfolio/Footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#2B2B2B] text-foreground selection:bg-primary/20 overflow-x-hidden font-sans md:px-12">
      <Navbar />
      <HeroSection />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Articles />
      <Footer />
    </main>
  )
}
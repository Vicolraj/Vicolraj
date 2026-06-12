import './App.css'
import Nav from './components/atom/Nav'
import HeroSection from './components/ui/HeroSection'
import Marquee from './components/atom/Marquee'
import Work from './components/atom/Work'
import ScrollVideoSection from './components/atom/ScrollVideoSection'
import TechStack from './components/atom/TechStack'
import Contact from './components/atom/Contact'
import Footer from './components/atom/Footer'
import { useCustomCursor } from './hooks/useCustomCursor'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useRef } from 'react'

function App() {
  useCustomCursor();
  useScrollReveal();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef}>
      <Nav />
      <HeroSection />
      <ScrollVideoSection sectionRef={containerRef} />
      <Marquee />
      <Work />
      <TechStack />
      <Contact />
      <Footer />
    </section>
  )
}

export default App

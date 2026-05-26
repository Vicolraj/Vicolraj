import './App.css'
import Marquee from './components/atom/Marquee'
import Nav from './components/atom/Nav'
import Hero from './components/ui/Hero'
import Work from './components/atom/Work'
import TechStack from './components/atom/TechStack'
import CodeExample from './components/atom/CodeExample'
import Contact from './components/atom/Contact'
import Footer from './components/atom/Footer'
import { useCustomCursor } from './hooks/useCustomCursor'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useCounters } from './hooks/useCounters'

function App() {
  useCustomCursor();
  useScrollReveal();
  useCounters();

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <TechStack />
      <CodeExample />
      <Contact />
      <Footer />
    </>
  )
}

export default App


import {useEffect, useRef } from 'react'
import './App.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
 

import HeaderComponent from './Components/Header.jsx'
import HeroComponent from './Components/HeroSection.jsx'
import TechStack from './Components/TechStack.jsx'
import Recommendation from './Components/Recommendation.jsx'
import Portfolio from './Components/Portfolio.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'


import ClickSpark from './ReactBits/ClickSpark/ClickSpark.jsx'
import FadeContent from './ReactBits/FadeContent/FadeContent.jsx'
 
import useAPIData from './Hooks/useAPIData.js'


  export default function App() {
    let url = import.meta.env.VITE_API + import.meta.env.VITE_SECTIONS;
    const { output, isLoading } = useAPIData(url, 'fetch');
    const scrollRef = useRef(null);

   
    useEffect(() => {
      AOS.init({
        easing: 'ease-in-out', // type of easing
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false // whether elements should animate out while scrolling past them
      });

   
     
   
    
   

      document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        window.location.href = "mailto:vicolraj@gmail.com";
       });

  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();

    if (
      key === "f12" ||
      key === "printscreen" ||
      (event.ctrlKey && key === "s") ||
      (event.ctrlKey && event.shiftKey && (key === "i" || key === "j")) ||
      (event.ctrlKey && key === "u")
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
      



    }, [])



  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
    <main className={`componentContainer`} ref={scrollRef} data-scroll-container> 

        <HeaderComponent/>
        <HeroComponent/>
        <About />
        
        <FadeContent blur={true} duration={800} easing="ease-out" initialOpacity={0}>
          <TechStack/>
        </FadeContent>

         <FadeContent blur={false} duration={800} easing="ease-out" initialOpacity={0}>
          <Portfolio />
          {output ? output[0].Testimonials.trim() && <Recommendation /> : ''}
        </FadeContent>
        <Contact/>
        <Footer />
      </main>
    </ClickSpark>
    
  )
}

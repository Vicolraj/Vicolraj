import { use, useEffect, useState } from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeaderComponent from './Components/Header.jsx'
import HeroComponent from './Components/HeroSection.jsx'
import TechStack from './Components/TechStack.jsx'
import Recommendation from './Components/Recommendation.jsx'
import Portfolio from './Components/Portfolio.jsx'
import About from './Components/About.jsx'


import ClickSpark from './ReactBits/ClickSpark/ClickSpark.jsx'
import FadeContent from './ReactBits/FadeContent/FadeContent.jsx'


  export default function App() {
    useEffect(() => {
      AOS.init({
        easing: 'ease-in-out', // type of easing
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false // whether elements should animate out while scrolling past them
      });

      



      // document.addEventListener("contextmenu", (event) => {
      //   event.preventDefault();
      //   alert("Right-click is disabled!");
      // });

      // document.addEventListener("keydown", (event) => {
      //   if (event.key === "PrintScreen" || (event.ctrlKey && event.key === "s")) {
      //     alert("Screenshots are not allowed!");
      //     event.preventDefault();
      //   }
      // });


    }, [])



  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
    <main className={`componentContainer`}> 

        <HeaderComponent/>
        <HeroComponent/>
        <About />
        
        <FadeContent blur={true} duration={800} easing="ease-out" initialOpacity={0}>
          <TechStack/>
        </FadeContent>

         <FadeContent blur={false} duration={800} easing="ease-out" initialOpacity={0}>
          <Portfolio />
          <Recommendation />
        </FadeContent>
         

        
      </main>
    </ClickSpark>
    
  )
}

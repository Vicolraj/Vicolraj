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
      AOS.init();
    }, [])

    //themeMode is use to get the system deafult mode whether dark or light


    const swMode = () => {
      if(cssClass == 'darkStyle'){
        setTheme('lightStyle')
      }
      else{
        setTheme('darkStyle')
      }
    }
    let x = "iutyrtetrykuti";

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
        
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <TechStack/>
        </FadeContent>

         <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
          <Portfolio />
          <Recommendation />
        </FadeContent>
        
      </main>
    </ClickSpark>
    
  )
}

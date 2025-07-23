import './styles/About.css'
import ScrollFloat from '../ReactBits/ScrollFloat/ScrollFloat.jsx'
import ScrollReveal from '../ReactBits/ScrollReveal/ScrollReveal.jsx'
import { StaticBgLogo } from './StaticBgLogo.jsx';


export default function About() {
    return(
        <section  id='aboutme'
            className={`aboutSection sectionContainer modSec`}
            data-aos="fade" data-aos-duration="800">
            <hr />
            <div>
            
            <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                  >
                    About Me
                  </ScrollFloat>

            <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            >
                I'm a frontend-focused developer with more than 4 years of experience specializing in React.js, Blazor(C#), Framer Motion, and Rive. I blend motion, interactivity, and design to craft immersive web experiences. I,m also a skilled graphic designer and proficient in Word and Excel, delivering visually polished, high-performing, and user-friendly solutions.
        </ScrollReveal>

        <StaticBgLogo/>

            </div>
            <hr />
        </section>
    )
}


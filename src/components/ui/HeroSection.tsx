import "./styles/HeroSection.css"
// @ts-ignore
import Silk from "../animation/Silk/Silk"
import SplitText from "../animation/SplitText/SplitText"
import TextType from "../animation/TextType/TextType"

import lapTop from "../../assets/img/laptop.webp"

export default function HeroSection() {


  return (
    <section className="hero-section">
      <div className="heroBg">
        <Silk speed={4} scale={1.2} color="#ec6b30" noiseIntensity={0.4} />
      </div>

      <div className="hero-left">
        <h1 className="hero-title">
          <SplitText
            text="Victor"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <br />
          <em>
            <SplitText
              text="Raji."
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"

            />
          </em><br />
            <SplitText
              text="Fullstack"
              delay={50}
              duration={1.45}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          <br />

          <SplitText
              text="Developer"
              delay={50}
              duration={1.65}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"

            />
          
        </h1>




        <p className="hero-sub">
          <TextType 
            text={"I build things for the web from Backends to Frontends Apps, from animated components to production-grade cloud infrastructure. 3+ years shipping apps people actually use."}
            typingSpeed={7}
            pauseDuration={1500}
            loop = {false}
            showCursor
            cursorCharacter=""
            // texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
            deletingSpeed={0}
            // variableSpeedEnabled={false}
            // variableSpeedMin={60}
            // variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">See my work ↓</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num" data-counter="3" data-suffix="+">3+</div>
            <div className="stat-label">Years building</div>
          </div>
          <div className="stat-item">
            <div className="stat-num" data-counter="15" data-suffix="+">15+</div>
            <div className="stat-label">Projects shipped</div>
          </div>
          <div className="stat-item">
            <div className="stat-num" data-counter="5">5</div>
            <div className="stat-label">Tech domains</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-name-bg">Victor</div>
        <img src={lapTop} alt="Code on laptop" />
      </div>
    </section>
  );
}

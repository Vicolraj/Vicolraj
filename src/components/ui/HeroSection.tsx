import "./styles/HeroSection.css"
// @ts-ignore
import Silk from "../animation/Silk/Silk"
import lapTop from "../../assets/img/laptop.webp"

export default function HeroSection() {

  // const apiLink = import.meta.env.VITE_API;
  // const projectsRoute = import.meta.env.VITE_PROJECTS;
  return (
    <section className="hero-section">
      <div className="heroBg">
        <Silk speed={4} scale={1.2} color="#ec6b30" noiseIntensity={0.4} />
      </div>

      <div className="hero-left">
        <h1 className="hero-title">
          Victor<br />
          <em>Raji.</em><br />
          Fullstack<br />
          Developer
        </h1>

        <p className="hero-sub">
          I build things for the web from Backends to Frontends Apps, from
          animated components to production-grade cloud infrastructure.
          3+ years shipping apps people actually use.
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

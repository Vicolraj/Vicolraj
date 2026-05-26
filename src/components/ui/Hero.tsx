import "./styles/hero.css"

export default function Hero(){


return (<section className="hero">
  <div className="hero-grid"></div>
  <div className="orb orb-1"></div>
  <div className="orb orb-2"></div>
  <div className="orb orb-3"></div>

  <div className="hero-eyebrow">Rive Animation · React · PWA · After Effect · Motion</div>

  <h1 className="hero-title">
    <span className="line"><span className="word">Bringing</span></span>
    <span className="line"><span className="word accent">Characters</span></span>
    <span className="line"><span className="word">To Life.</span></span>
  </h1>

  <p className="hero-sub">
    I'm a frontend focused developer skill in developing and creating animated component.
    I design and animate interactive Rive characters, then wire them directly into React + PWA frontends. State machines, skeletal rigs, systems production-ready from day one.
  </p>

  <div className="hero-actions">
    <a href="#work" className="btn-primary">View My Work ↓</a>
    <a href="#code" className="btn-ghost">See the Code</a>
  </div>
  <div className="hero-stats"> 
     {/* <div className="stat"><div className="stat-num" data-count="11">0</div><div className="stat-label">Characters Rigged</div></div>
    <div className="stat-div"></div>
    <div className="stat"><div className="stat-num" data-count="6">0</div><div className="stat-label">Island Scenes</div></div>
    <div className="stat-div"></div>
    <div className="stat"><div className="stat-num" data-count="40">0</div><div className="stat-label">Animations Built</div></div>
    <div className="stat-div"></div>  */}
    <div className="stat"><div className="stat-num">PWA</div><div className="stat-label">Integration Ready</div></div>
  </div>

  {/* <div className="scroll-hint">
    <span>SCROLL</span>
    <div className="scroll-line"></div>
  </div> */}
</section>)
}
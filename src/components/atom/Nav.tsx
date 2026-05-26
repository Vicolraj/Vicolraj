import { useEffect, useState } from 'react';
import "./styles/nav.css"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">
        <div className="nav-logo-dot"></div>
        Vicolraj
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#tech">Tech</a>
        <a href="#code">Code</a>
        <a href="#contact">Contact</a>
        <button className="nav-cta">Hire Me →</button>
      </div>
    </nav>
  );
}
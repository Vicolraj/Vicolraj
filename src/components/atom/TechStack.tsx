import { TECH } from '../../data';
import './styles/tech.css';

export default function TechStack() {
  return (
    <section id="tech">
      <div className="reveal">
        <div className="section-eyebrow">Stack</div>
        <h2 className="section-title">Built With Precision</h2>
      </div>
      <div className="tech-grid" id="tech-grid">
        {TECH.map((t, i) => (
          <div 
            key={t.name} 
            className={`tech-card reveal reveal-delay-${(i % 4) + 1}`}
            style={{ '--glow-color': t.glow } as React.CSSProperties}
          >
            <div className="tech-icon">
              <img src={`/${t.icon}`} alt={`${t.name} logo`} width="48" height="48" loading="lazy" />
            </div>
            <div className="tech-name">{t.name}</div>
            <div className="tech-desc">{t.desc}</div>
            <span 
              className="tech-badge" 
              style={{ background: t.badgeColor, color: t.badgeText }}
            >
              {t.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

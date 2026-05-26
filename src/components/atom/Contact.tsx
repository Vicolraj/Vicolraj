import './styles/contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="cta-box reveal">
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Let's Work Together</div>
        <h2 className="section-title">
          Ready to bring your<br />
          <span style={{ 
            background: 'linear-gradient(135deg,var(--gold),var(--coral))', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            backgroundClip: 'text' 
          }}>
            characters to life?
          </span>
        </h2>
        <p style={{ color: 'var(--text2)', marginTop: '16px', fontSize: '1rem', lineHeight: '1.7' }}>
          From character illustration with split body parts to full Rive integration inside your PWA; I handle the complete pipeline.
        </p>
        <div className="cta-actions">
          <a href="mailto:vicolraj@gmail.com" className="btn-primary">Get In Touch →</a>
          <a href="https://github.com/vicolraj" className="btn-ghost" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <p className="cta-email">vicolraj@gmail.com</p>
      </div>
    </section>
  );
}

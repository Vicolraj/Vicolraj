import type { CatalogItem } from '../../data';

interface Props {
  item: CatalogItem;
}

export default function PlaceholderAnim({ item }: Props) {
  const getOrbs = () => (
    <>
      <div className="float-orb" style={{ left: '20%', top: '20%', animationDelay: '-0s' }} />
      <div className="float-orb" style={{ left: '50%', top: '40%', animationDelay: '-1.5s' }} />
      <div className="float-orb" style={{ left: '80%', top: '60%', animationDelay: '-3s' }} />
    </>
  );

  const getRings = () => (
    <>
      <div className="ring-pulse" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', animationDelay: '-0s' }} />
      <div className="ring-pulse" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', animationDelay: '-0.8s' }} />
      <div className="ring-pulse" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', animationDelay: '-1.6s' }} />
    </>
  );

  const getParticles = () => {
    const colors = ['#f0b429', '#00d4aa', '#8b5cf6', '#ff6b6b', '#3b82f6'];
    const particles = [];
    for (let i = 0; i < 16; i++) {
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            background: colors[i % colors.length],
            animationDelay: `-${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      );
    }
    return <>{particles}</>;
  };

  return (
    <div className={`anim-canvas ${item.animBg}`}>
      {item.placeholderAnim === 'char' && getOrbs()}
      {item.placeholderAnim === 'rings' && getRings()}
      {item.placeholderAnim === 'particles' && getParticles()}
      <div className="char-silhouette">{item.placeholder}</div>
    </div>
  );
}

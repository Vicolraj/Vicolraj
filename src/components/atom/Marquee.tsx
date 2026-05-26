import './styles/marquee.css';

export default function Marquee() {
  const marqueeItems = [
    'Rive Animation', 'React TypeScript', 'PWA Integration', 'Skeletal Rigging',
    'State Machines', 'Character Design', 'Reward Systems', 'Preschool EdTech',
    'Interactive UX', 'Caribbean Characters', 'CorelDraw', 'Body Part Rigs',
  ];
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-section">
      <div className="marquee-track" id="marquee-track">
        {doubled.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>✦</span>{item}
          </div>
        ))}
      </div>
    </div>
  );
}
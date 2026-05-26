import { useEffect } from 'react';
import type { CatalogItem } from '../../data';
import PlaceholderAnim from './PlaceholderAnim';
import RiveCanvas from './RiveCanvas';

interface Props {
  item: CatalogItem;
  onClose: () => void;
}

const tagClasses: Record<string, string> = {
  purple: 'tag-purple', teal: 'tag-teal', coral: 'tag-coral', 
  gold: 'tag-gold', blue: 'tag-blue', pink: 'tag-pink', green: 'tag-green'
};

export default function Modal({ item, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal open" onClick={handleBackdropClick}>
      <div className="modal-inner">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-canvas anim-canvas">
          {item.rivFile ? <RiveCanvas item={item} /> : <PlaceholderAnim item={item} />}
        </div>
        <div className="modal-info">
          <div className="card-tags">
            {item.tags.map(([t, c]) => (
              <span key={t} className={`tag ${tagClasses[c] || 'tag-teal'}`}>{t}</span>
            ))}
          </div>
          <h3 className="modal-title">{item.title}</h3>
          <p className="modal-desc">{item.desc}</p>
          <div className="modal-details">
            <div className="detail-item"><label>File</label><span>{item.fileLabel}</span></div>
            <div className="detail-item"><label>States</label><span>{item.states.length}</span></div>
            <div className="detail-item"><label>Category</label><span>{item.filter}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

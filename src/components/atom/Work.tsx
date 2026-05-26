import { useState } from 'react';
import { CATALOG, type CatalogItem } from '../../data';
import PlaceholderAnim from '../ui/PlaceholderAnim';
import './styles/work.css';
import RiveCanvas from '../ui/RiveCanvas'; // We'll create this next
import Modal from '../ui/Modal'; // We'll create this next

const tagClasses: Record<string, string> = {
  purple: 'tag-purple', teal: 'tag-teal', coral: 'tag-coral', 
  gold: 'tag-gold', blue: 'tag-blue', pink: 'tag-pink', green: 'tag-green'
};

export default function Work() {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);

  const filteredCatalog = filter === 'all' ? CATALOG : CATALOG.filter(c => c.filter === filter);

  return (
    <section id="work">
      <div className="work-header reveal">
        <div>
          <div className="section-eyebrow">Selected Work</div>
          <h2 className="section-title">Animation Catalog</h2>
          <p className="section-desc">Interactive Rive animations.</p>
        </div>
        <div className="filter-pills">
          {['all', 'component', 'intro', 'generic', 'background'].map(f => (
            <button 
              key={f}
              className={`pill ${filter === f ? 'active' : ''}`} 
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="catalog" id="catalog">
        {filteredCatalog.map((item, i) => (
          <div 
            key={item.id} 
            className="card-item reveal" 
            style={{ transitionDelay: `${i * 0.06}s` }}
            onClick={() => setSelectedItem(item)}
          >
            <div className="card-canvas-wrap">
              {item.rivFile ? (
                <RiveCanvas item={item} />
              ) : (
                <PlaceholderAnim item={item} />
              )}
              <div className="card-overlay">
                <div className="overlay-play">▶ View Animation</div>
              </div>
            </div>
            
            <div className="card-body">
              <div className="card-tags">
                {item.tags.map(([t, c]) => (
                  <span key={t} className={`tag ${tagClasses[c] || 'tag-teal'}`}>{t}</span>
                ))}
              </div>
              <div className="card-title">{item.title}</div>
              <div className="card-desc">{item.desc}</div>
              <div className="card-meta">
                <div className="card-file">{item.fileLabel}</div>
                <div className="card-arrow">→</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
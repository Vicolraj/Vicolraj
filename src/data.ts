export type ProjectItem = {
  id: string;
  title: string;
  desc: string;
  category: 'website' | 'animation' | 'component';
  tags: [string, string][];
  year: string;
  tech: string[];
  link?: string;
  github?: string;
  placeholder: string;
  accentColor: string;
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'smoothiejuicy',
    title: 'SmoothieJuicy',
    desc: 'Animation-rich beverage marketing website — bringing a Figma concept to a fully functional live product with lush motion and rich interactions.',
    category: 'website',
    tags: [['Marketing', 'rust'], ['React', 'blue'], ['Framer Motion', 'purple']],
    year: '2024',
    tech: ['React', 'TypeScript', 'Framer Motion', 'CSS'],
    link: 'https://smoothiejuicy.vercel.app',
    github: 'https://github.com/vicolraj/SmoothieJuicy',
    placeholder: '🍹',
    accentColor: '#e0692b',
  },
  {
    id: 'vicautos',
    title: 'VicAutos',
    desc: 'Converting an automobile design concept pulled from Instagram into a functional, pixel-perfect live landing page.',
    category: 'website',
    tags: [['Automotive', 'warm'], ['CSS', 'blue'], ['Landing Page', 'rust']],
    year: '2024',
    tech: ['JavaScript', 'CSS', 'HTML'],
    link: 'https://vicautos.vercel.app',
    github: 'https://github.com/vicolraj/VicAutos',
    placeholder: '🚗',
    accentColor: '#60a5fa',
  },
  {
    id: 'futaquiz',
    title: 'FutaQuiz',
    desc: 'A quiz platform for students at FUTA Nigeria. Helped over 100 students revise and stay ahead academically.',
    category: 'website',
    tags: [['EdTech', 'green'], ['CSS', 'blue'], ['Community', 'warm']],
    year: '2024',
    tech: ['CSS', 'JavaScript', 'HTML'],
    github: 'https://github.com/vicolraj/FutaQuiz',
    placeholder: '📚',
    accentColor: '#5bc47a',
  },
  {
    id: 'infinixhot60',
    title: 'Infinix Hot 60',
    desc: 'Product reveal website for the Infinix Hot 60 smartphone — scroll-driven animations and immersive spec showcase.',
    category: 'website',
    tags: [['Product', 'rust'], ['JavaScript', 'blue'], ['Scroll Animation', 'purple']],
    year: '2025',
    tech: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/vicolraj/Infinixhot60',
    placeholder: '📱',
    accentColor: '#a78bfa',
  },
  {
    id: 'deemerald',
    title: 'DeEmeralds',
    desc: 'A TypeScript project with polished UI, built around a design-forward concept with clean component architecture.',
    category: 'website',
    tags: [['TypeScript', 'blue'], ['Design', 'rust'], ['UI', 'warm']],
    year: '2025',
    tech: ['TypeScript', 'React'],
    github: 'https://github.com/vicolraj/DeEmeralds',
    placeholder: '💎',
    accentColor: '#00d4aa',
  },
  {
    id: 'floralHeart',
    title: 'Floral Heart',
    desc: 'Rive animated splash screen for a dating app — character rig with wing clap, island landing, and loop states.',
    category: 'animation',
    tags: [['Rive', 'rust'], ['Character', 'purple'], ['Mobile App', 'warm']],
    year: '2024',
    tech: ['Rive', 'React', 'TypeScript'],
    placeholder: '💜',
    accentColor: '#a78bfa',
  },
  {
    id: 'stumblecrush',
    title: 'Stumble Crush',
    desc: 'App intro animation for Stumble Crush — logo reveal with VFX, stumble and crush state machine.',
    category: 'animation',
    tags: [['Rive', 'rust'], ['Intro', 'warm'], ['VFX', 'purple']],
    year: '2024',
    tech: ['Rive', 'After Effects'],
    placeholder: '💥',
    accentColor: '#e0692b',
  },
  {
    id: 'locationAvatar',
    title: 'Location Avatar',
    desc: 'Map pin to avatar reveal — smooth transition from a location pin to a vibrant character preview.',
    category: 'animation',
    tags: [['Rive', 'rust'], ['Character', 'purple'], ['UI Component', 'blue']],
    year: '2024',
    tech: ['Rive', 'React'],
    placeholder: '📍',
    accentColor: '#60a5fa',
  },
  {
    id: 'lanyardCard',
    title: '3D Lanyard Card',
    desc: 'Physics-based 3D ID card on a lanyard built with Three.js and React Three Fiber — drag, swing, and release.',
    category: 'component',
    tags: [['Three.js', 'blue'], ['Physics', 'rust'], ['Interactive', 'green']],
    year: '2025',
    tech: ['React', 'Three.js', 'React Three Fiber'],
    placeholder: '🪪',
    accentColor: '#5bc47a',
  },
  {
    id: 'scrollVideo',
    title: 'Scroll-Driven Video',
    desc: 'Scroll-scrubbed video playback — the timeline advances frame by frame as the user scrolls, ending exactly with the section.',
    category: 'component',
    tags: [['Scroll', 'rust'], ['Video', 'warm'], ['Interaction', 'green']],
    year: '2025',
    tech: ['React', 'TypeScript', 'IntersectionObserver'],
    placeholder: '🎬',
    accentColor: '#e0692b',
  },
];

export const TECH_STACK = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Blazor', 'TailwindCSS'] },
  { group: 'Backend', items: ['C# / ASP.NET core', 'Node.js / Express', 'SQL Server', 'Firebase', 'SUPABASE', 'NEONDB'] },
  { group: 'Animation', items: ['Rive', 'Framer Motion', 'After Effects', 'CSS Animation', 'Three.js', 'Lottie', 'GSap']},
  { group: 'Design & Tools', items: ['Figma', 'Photoshop', 'CorelDraw', 'Git / GitHub', 'Vite', 'Vercel'] },
];

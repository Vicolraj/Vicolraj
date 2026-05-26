export type CatalogItem = {
  id: string;
  title: string;
  desc: string;
  rivFile: string | null;
  artboard: string | null;
  stateMachine: string | null;
  tags: [string, string][];
  filter: string;
  animBg: string;
  placeholder: string;
  placeholderAnim: string;
  states: string[];
  fileLabel: string;
};

export const CATALOG: CatalogItem[] = [
  {
    id: 'floralheart',
    title: 'Floral Heart',
    desc: 'Animated Floral Heart rive for a splash screen intro  for a dating app',
    rivFile: 'riveFiles/heart.riv',
    artboard: null,
    stateMachine: null,
    tags: [['dating','purple'],['heart','gold'],['floral anime','teal']],
    filter: 'component',
    animBg: 'anim-bg-1',
    placeholder: '💜',
    placeholderAnim: 'char',
    states: ['idle_loop','flying_intro','wing_clap','shell_toss','island_landing'],
    fileLabel: 'heart.riv',
  },
  {
    id: 'stumblecrush',
    title: 'Stumble Crush',
    desc: 'Stmble Crush app intro.',
    rivFile: 'riveFiles/stumblecrush.riv',
    artboard: null,
    stateMachine: null,
    tags: [['intro','gold'],['VFX','coral'],['logo','purple']],
    filter: 'intro',
    animBg: 'anim-bg-5',
    placeholder: '💥',
    placeholderAnim: 'particles',
    states: ['idle','stumble','crush','celebrate'],
    fileLabel: 'stumblecrush.riv',
  },
  {
    id: 'zara',
    title: 'Let\'s Get Started',
    desc: 'Onboarding animation — a welcoming intro sequence that guides users into the app experience. ',
    rivFile: 'riveFiles/letgetstarted.riv',
    artboard: null,
    stateMachine: null,
    tags: [['UI','teal'],['onboarding','blue'],['interactive','coral']],
    filter: 'generic',
    animBg: 'anim-bg-2',
    placeholder: '🌊',
    placeholderAnim: 'rings',
    states: ['idle','intro','exit'],
    fileLabel: 'letgetstarted.riv',
  },
  {
    id: 'avatar1',
    title: 'Location Avatar 1',
    desc: 'Location-to-avatar avartar reveal animation. Smooth transition from map pin to vibrant avartar preview.',
    rivFile: 'riveFiles/locationtoavatar1.riv',
    artboard: null,
    stateMachine: null,
    tags: [['character','purple'],['location','coral'],['reveal','teal']],
    filter: 'character',
    animBg: 'anim-bg-3',
    placeholder: '📍',
    placeholderAnim: 'char',
    states: ['idle','reveal','selected'],
    fileLabel: 'locationtoavatar1.riv',
  },
  {
    id: 'pink_pin',
    title: 'Pink Location Pin',
    desc: 'Animated map pin UI component in pink/coral (popup effect).',
    rivFile: 'riveFiles/pink_location_pin.riv',
    artboard: null,
    stateMachine: null,
    tags: [['UI','coral'],['map','pink'],['interactive','teal']],
    filter: 'generic',
    animBg: 'anim-bg-2',
    placeholder: '📍',
    placeholderAnim: 'rings',
    states: ['idle','pulse','active'],
    fileLabel: 'pink_location_pin.riv',
  },
  {
    id: 'splashbg',
    title: 'Splash Background',
    desc: 'Full-screen animated splash screen background. Looping ambient scene with particle effects and smooth color transitions; used on app launch.',
    rivFile: 'riveFiles/splashbg.riv',
    artboard: null,
    stateMachine: null,
    tags: [['scene','blue'],['ambient loop','purple'],['splash','gold']],
    filter: 'background',
    animBg: 'anim-bg-3',
    placeholder: '🌌',
    placeholderAnim: 'particles',
    states: ['idle_loop','transition','exit'],
    fileLabel: 'splashbg.riv',
  },
  {
    id: 'stickman',
    title: 'Stickman Character',
    desc: 'Lightweight stickman character rig for rapid prototyping and placeholder animation.',
    rivFile: 'riveFiles/stickman.riv',
    artboard: null,
    stateMachine: null,
    tags: [['character','teal'],['prototype','blue'],['lightweight','green']],
    filter: 'intro',
    animBg: 'anim-bg-4',
    placeholder: '🧍',
    placeholderAnim: 'char',
    states: ['idle','walk','jump','wave'],
    fileLabel: 'stickman.riv',
  },
  {
    id: 'youronetap',
    title: 'Your One Tap',
    desc: 'Micro-interaction animation for the one-tap onboarding gesture. Finger tap with ripple effect and glow burst — guides new users through first interaction.',
    rivFile: 'riveFiles/youronetap.riv',
    artboard: null,
    stateMachine: null,
    tags: [['UI/UX','teal'],['micro-interaction','blue'],['onboarding','green']],
    filter: 'generic',
    animBg: 'anim-bg-7',
    placeholder: '👆',
    placeholderAnim: 'rings',
    states: ['idle','tap','burst'],
    fileLabel: 'youronetap.riv',
  },
];

export const TECH = [
  {icon:'icons/rive.svg',name:'Rive',desc:'Character animation, state machines, skeletal rigs',badge:'Core Tool',badgeColor:'rgba(240,180,41,0.1)',badgeText:'#f0b429',glow:'rgba(240,180,41,0.05)'},
  {icon:'icons/react.svg',name:'React + TypeScript',desc:'Component-based UI with full type safety',badge:'Frontend',badgeColor:'rgba(59,130,246,0.1)',badgeText:'#60a5fa',glow:'rgba(59,130,246,0.05)'},
  {icon:'icons/pwa.svg',name:'PWA',desc:'Progressive Web App — works offline, installs like native',badge:'Platform',badgeColor:'rgba(16,185,129,0.1)',badgeText:'#34d399',glow:'rgba(16,185,129,0.05)'},
  {icon:'icons/photoshop.svg',name:'Photoshop',desc:'Body part isolation, layer export, PNG preparation',badge:'Asset Prep',badgeColor:'rgba(139,92,246,0.1)',badgeText:'#a78bfa',glow:'rgba(139,92,246,0.05)'},
  {icon:'icons/bones.svg',name:'Skeletal Rigging',desc:'Bones, constraints, mesh deformation in Rive Editor',badge:'Animation',badgeColor:'rgba(255,107,107,0.1)',badgeText:'#ff6b6b',glow:'rgba(255,107,107,0.05)'},
  {icon:'icons/statemachine.svg',name:'State Machines',desc:'Logic-driven animation transitions without code',badge:'Rive Feature',badgeColor:'rgba(0,212,170,0.1)',badgeText:'#00d4aa',glow:'rgba(0,212,170,0.05)'},
];

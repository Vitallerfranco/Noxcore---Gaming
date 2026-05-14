const PRODUCTS = [
  {
    id: 1,
    name: "PlayStation 5 Disc Edition",
    desc: "Consola PS5 con lector de discos, control DualSense y cables incluidos.",
    price: 580000,
    category: "playstation",
    condition: "nuevo",
    icon: "assets/PlayStationDiscEdition.webp",
    inStock: true,
  },
  {
    id: 2,
    name: "FIFA 25 / EA Sports FC 25",
    desc: "Versión física para PS5. El juego de fútbol más completo del mercado.",
    price: 28000,
    originalPrice: 35000,
    category: "juegos",
    condition: "oferta",
    icon: "assets/fifa25.webp",
    inStock: true,
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    desc: "Consola Switch versión OLED, pantalla de 7 pulgadas, colores vibrantes.",
    price: 420000,
    category: "nintendo",
    condition: "nuevo",
    icon: "assets/nintendo.webp",
    inStock: true,
  },
  {
    id: 4,
    name: "Control DualSense Blanco",
    desc: "Control inalámbrico PS5 original. Gatillos adaptativos y háptica avanzada.",
    price: 65000,
    originalPrice: 80000,
    category: "accesorios",
    condition: "oferta",
    icon: "assets/dual sense.webp",
    inStock: true,
  },
  {
    id: 5,
    name: "PC Armada Gamer RTX 4060",
    desc: "PC gamer completa: Ryzen 5 7600, RTX 4060, 16GB RAM DDR5, SSD 1TB.",
    price: 1850000,
    category: "pc",
    condition: "nuevo",
    icon: "assets/pc armada.webp",
    inStock: true,
  },
  {
    id: 6,
    name: "PS4 Pro 1TB",
    desc: "Consola PS4 Pro en excelente estado, 2 controles y 5 juegos incluidos.",
    price: 210000,
    category: "playstation",
    condition: "usado",
    icon: "assets/ps4.webp",
    inStock: true,
  },
  {
    id: 7,
    name: "Headset Gaming HyperX Cloud",
    desc: "Auriculares gamer con sonido envolvente 7.1, micrófono desmontable.",
    price: 55000,
    category: "accesorios",
    condition: "nuevo",
    icon: "assets/eadsetGamingHyperXCloud.webp",
    inStock: true,
  },
  {
    id: 8,
    name: "Caja Random Gaming",
    desc: "¡Sorpresa! Juegos, accesorios o periféricos aleatorios. Siempre vale más de lo que pagás.",
    price: 15000,
    category: "accesorios",
    condition: "nuevo",
    icon: "assets/caja misteriosa.webp",
    inStock: true,
  },
  {
    id: 9,
    name: "The Last of Us Part II",
    desc: "Edición especial para PS4/PS5. Juego narrativo de acción aclamado por la crítica.",
    price: 22000,
    category: "juegos",
    condition: "usado",
    icon: "assets/TheLastofUsPartII.webp",
    inStock: true,
  },
  {
    id: 10,
    name: "Monitor Gamer 144Hz 24\"",
    desc: "Panel IPS Full HD, 1ms de respuesta, compatible con PS5 y PC.",
    price: 185000,
    category: "pc",
    condition: "nuevo",
    icon: "assets/MonitorGamer144Hz.webp",
    inStock: false,
  },
  {
    id: 11,
    name: "Nintendo Switch Joy-Con Neón",
    desc: "Controles Joy-Con originales de Nintendo, par, colores rojo y azul neón.",
    price: 38000,
    category: "nintendo",
    condition: "nuevo",
    icon: "assets/nintendo.webp",
    inStock: true,
  },
  {
    id: 12,
    name: "Teclado Mecánico Gamer RGB",
    desc: "Switches mecánicos azules, retroiluminación RGB, diseño compacto TKL.",
    price: 48000,
    originalPrice: 60000,
    category: "pc",
    condition: "oferta",
    icon: "assets/TecladoMecánicoGamerGB.webp",
    inStock: true,
  },
];

/* ===== ICONOS SVG MINIMALISTAS ===== */
const ICONS = {
  todos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>`,
  playstation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 3v13l3 1V7s4 .5 4 3.5S12 14 12 14l5 2s3-1 3-4.5S16 5 9 3z"/>
    <path d="M6 18.5l3 1.5v-2l-3-1.5v2z"/>
    <path d="M3 17l3 1.5"/>
  </svg>`,
  nintendo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="6" width="9" height="12" rx="4.5"/>
    <rect x="13" y="6" width="9" height="12" rx="4.5"/>
    <line x1="11" y1="12" x2="13" y2="12"/>
    <circle cx="5.5" cy="12" r="1.5"/>
    <line x1="18" y1="9.5" x2="18" y2="14.5"/>
    <line x1="15.5" y1="12" x2="20.5" y2="12"/>
  </svg>`,
  pc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>`,
  juegos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="3"/>
    <line x1="12" y1="3" x2="12" y2="9"/>
    <line x1="12" y1="15" x2="12" y2="21"/>
    <line x1="3" y1="12" x2="9" y2="12"/>
    <line x1="15" y1="12" x2="21" y2="12"/>
  </svg>`,
  accesorios: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>`,
  // Trust strip
  moto: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="5.5" cy="17.5" r="2.5"/><circle cx="18.5" cy="17.5" r="2.5"/>
    <path d="M8 17.5h7M15 6h2l3 6M5.5 15V9l5-3 3 4h2"/>
  </svg>`,
  garantia: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>`,
  pago: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>`,
  servicio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>`,
  respuesta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>`,
  caja: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="21 8 21 21 3 21 3 8"/>
    <rect x="1" y="3" width="22" height="5"/>
    <line x1="10" y1="12" x2="14" y2="12"/>
  </svg>`,
  // Reviews
  ubicacion: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>`,
  // Cart / carrito
  carrito: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>`,
  // No results
  busqueda: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>`,
  // Toast / gaming
  gaming: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/>
    <circle cx="15.5" cy="11" r="0.5" fill="currentColor"/><circle cx="17.5" cy="13" r="0.5" fill="currentColor"/>
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59l-.6 5.986A4 4 0 0 0 6.072 19h.001a4 4 0 0 0 3.274-1.7L10.6 16h2.8l1.253 1.3A4 4 0 0 0 17.927 19a4 4 0 0 0 3.972-4.424l-.6-5.987A4 4 0 0 0 17.32 5z"/>
  </svg>`,
};

const CATEGORIES = [
  { id: "todos",       label: "Todo",        icon: ICONS.todos },
  { id: "playstation", label: "PlayStation", icon: ICONS.playstation },
  { id: "nintendo",    label: "Nintendo",    icon: ICONS.nintendo },
  { id: "pc",          label: "PC Gamer",    icon: ICONS.pc },
  { id: "juegos",      label: "Juegos",      icon: ICONS.juegos },
  { id: "accesorios",  label: "Accesorios",  icon: ICONS.accesorios },
];

const CONDITIONS = [
  { id: "todos",  label: "Todos" },
  { id: "nuevo",  label: "Nuevo" },
  { id: "usado",  label: "Usado" },
  { id: "oferta", label: "Oferta" },
];

const REVIEWS = [
  {
    stars: 5,
    text: "Compré la PS5 y llegó en perfectas condiciones. Súper rápido el envío a Morón. Los recomiendo 100%!",
    name: "Matías R.",
    location: "Morón, GBA",
    avatar: "M",
  },
  {
    stars: 5,
    text: "Llevé mi PS4 a reparar y en 2 días estaba lista. Precio justo y muy buena atención. Ya volví dos veces.",
    name: "Carla V.",
    location: "Ituzaingó, GBA",
    avatar: "C",
  },
  {
    stars: 5,
    text: "La caja random fue una sorpresa increíble, me tocaron 3 juegos que valen el doble. Volvería a comprar!",
    name: "Franco L.",
    location: "Haedo, GBA",
    avatar: "F",
  },
  {
    stars: 5,
    text: "Armaron mi PC gamer en tiempo récord. Súper profesionales, buen precio y me explicaron todo. 10 puntos.",
    name: "Valentina G.",
    location: "Palermo, CABA",
    avatar: "V",
  },
];

const PHONE = "5491162855278";
const WSP_BASE = `https://wa.me/${PHONE}`;
import type { FaqItem } from "@/content/faqs";

export const uxHero = {
  eyebrow: "Servicios / UX UI & Diseño",
  words: "Diseñamos experiencias que las personas",
  accent: "entienden y disfrutan usar.",
  description:
    "Creamos experiencias digitales e interfaces a medida que combinan estrategia, diseño y tecnología. Desde la identidad visual de una marca hasta el diseño completo de una plataforma, trabajamos para que cada interacción sea clara, coherente y útil, ayudando a tus usuarios a encontrar lo que necesitan y a tu negocio a cumplir sus objetivos.",
} as const;

export const uxHeroStats = [
  { icon: "users" as const, label: "Experiencias centradas en el usuario" },
  { icon: "target" as const, label: "Diseño con estrategia" },
  { icon: "monitor" as const, label: "Interfaces modernas y funcionales" },
  { icon: "trending" as const, label: "Resultados que impulsan tu negocio" },
];

export const uxStrategy = {
  eyebrow: "Estrategia primero",
  titleBefore: "Antes de diseñar una pantalla, entendemos",
  titleAccent: "qué necesita resolver.",
  description:
    "Analizamos a tus usuarios, los objetivos de tu negocio y los desafíos del proyecto para definir una solución de diseño que realmente aporte valor. Investigamos, estructuramos la información y tomamos decisiones con criterio, no solo por preferencias estéticas.",
  asideTitle: "Más que diseño, una experiencia completa",
  asideBody:
    "Acompañamos cada etapa del diseño para que la solución sea usable, coherente y lista para implementarse con claridad.",
} as const;

export const uxStrategyCards = [
  {
    icon: "target" as const,
    lines: ["Investigación", "y análisis"] as const,
  },
  {
    icon: "list" as const,
    lines: ["Definición de objetivos", "y requerimientos"] as const,
  },
  {
    icon: "layout" as const,
    lines: ["Propuesta", "de experiencia"] as const,
  },
  {
    icon: "users" as const,
    lines: ["Acompañamiento", "en cada etapa"] as const,
  },
];

export const uxStrategyChecks = [
  "Soluciones alineadas a tus objetivos",
  "Diseño centrado en el usuario",
  "Interfaces claras y fáciles de usar",
  "Consistencia visual en todos los canales",
  "Preparado para desarrollo e implementación",
  "Soporte y mejoras continuas",
];

export const uxProjectTypes = {
  eyebrow: "Tipos de soluciones",
  titleBefore: "Diseñamos soluciones para",
  titleAccent: "cada necesidad.",
  items: [
    {
      title: "Diseño UX/UI para sitios web",
      description:
        "Experiencias claras y atractivas que facilitan la navegación y conectan con tus usuarios.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Diseño de plataformas y software",
      description:
        "Interfaces intuitivas para sistemas complejos, paneles y herramientas de gestión.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "E-commerce y experiencias de compra",
      description:
        "Diseñamos recorridos de compra que reducen fricciones y facilitan la decisión.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Identidad visual y branding",
      description:
        "Desarrollamos o adaptamos tu identidad para comunicar tu marca de forma coherente.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Prototipos y sistemas de diseño",
      description:
        "Wireframes, prototipos y componentes reutilizables para un desarrollo más eficiente.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Diseño de piezas y experiencias digitales",
      description:
        "Landing pages, campañas, contenidos y recursos visuales para tus canales digitales.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
  ],
} as const;

/** Principle omitted: least impact vs Figma/Adobe/Miro stack for this service. */
export const uxTechnologies = {
  eyebrow: "Herramientas y metodología",
  titleBefore: "Diseñamos con método,",
  titleAccent: "no solo con inspiración.",
  description:
    "Utilizamos herramientas de diseño y prototipado líderes del mercado, junto con procesos de investigación y validación, para crear soluciones consistentes, funcionales y realizables.",
  aside: "Y muchas más herramientas",
  items: [
    { id: "figma" as const, label: "Figma", tone: "brand" as const },
    {
      id: "adobecc" as const,
      label: "Adobe Creative Cloud",
      tone: "brand" as const,
    },
    { id: "notion" as const, label: "Notion", tone: "white" as const },
    { id: "miro" as const, label: "Miro", tone: "brand" as const },
    { id: "maze" as const, label: "Maze", tone: "brand" as const },
    { id: "hotjar" as const, label: "Hotjar", tone: "brand" as const },
    { id: "chatgpt" as const, label: "ChatGPT", tone: "brand" as const },
    { id: "midjourney" as const, label: "Midjourney", tone: "white" as const },
  ],
} as const;

export const uxResults = {
  eyebrow: "Diseño enfocado en resultados",
  titleBefore: "Una buena experiencia facilita que",
  titleAccent: "las cosas sucedan.",
  description:
    "Diseñamos experiencias que combinan estética y funcionalidad para mejorar la usabilidad, facilitar la conversión y generar confianza en cada interacción.",
} as const;

export const uxResultFeatures = [
  {
    icon: "blocks" as const,
    title: "Arquitectura de información",
    description: "Estructura clara y ordenada.",
  },
  {
    icon: "nav" as const,
    title: "Navegación y usabilidad",
    description: "Recorridos simples y efectivos.",
  },
  {
    icon: "devices" as const,
    title: "Diseño responsive",
    description: "Adaptado a todos los dispositivos.",
  },
  {
    icon: "a11y" as const,
    title: "Accesibilidad",
    description: "Buenas prácticas para más personas.",
  },
  {
    icon: "hierarchy" as const,
    title: "Jerarquía visual",
    description: "Información clara y bien destacada.",
  },
  {
    icon: "consistency" as const,
    title: "Consistencia",
    description: "Sistemas de diseño y componentes.",
  },
  {
    icon: "conversion" as const,
    title: "Conversión",
    description: "Interfaces que apoyan tus objetivos.",
  },
  {
    icon: "improve" as const,
    title: "Validación y mejora",
    description: "Ajustes según datos y feedback.",
  },
];

export const uxAi = {
  eyebrow: "IA aplicada al diseño",
  titleBefore: "IA como apoyo creativo",
  titleAccent: "y de investigación.",
  description:
    "Integramos herramientas de inteligencia artificial para acelerar procesos, explorar ideas, generar alternativas y analizar información, siempre con criterio humano y enfocados en las necesidades del proyecto.",
  ctaLines: [
    "La IA potencia el",
    "diseño, pero la",
    "estrategia la definen",
    "las personas.",
  ] as const,
  benefits: [
    "Exploración de ideas y conceptos",
    "Generación de contenidos visuales",
    "Análisis de usuarios y datos",
    "Prototipado asistido por IA",
    "Optimización de interfaces",
    "Diseño de experiencias con IA",
  ],
} as const;

export const uxProcessSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Conocemos tu negocio y definimos objetivos.",
    icon: "search" as const,
  },
  {
    n: "02",
    title: "Investigación y estructura",
    body: "Analizamos usuarios, contenidos y recorridos.",
    icon: "list" as const,
  },
  {
    n: "03",
    title: "Wireframes",
    body: "Creamos la estructura y flujo de las pantallas.",
    icon: "flow" as const,
  },
  {
    n: "04",
    title: "Diseño visual",
    body: "Desarrollamos una interfaz atractiva y funcional.",
    icon: "code" as const,
  },
  {
    n: "05",
    title: "Prototipo y validación",
    body: "Probamos la experiencia y realizamos ajustes.",
    icon: "cog" as const,
  },
  {
    n: "06",
    title: "Entrega y evolución",
    body: "Entregamos los archivos y te acompañamos en la implementación.",
    icon: "rocket" as const,
  },
];

export const uxRecentProjects = [
  {
    slug: "sorteo-seguro",
    title: "Sorteo Seguro",
    tags: ["Diseño UX/UI", "E-commerce"],
    image: "/portafolio/sorteo-desktop.jpg",
  },
  {
    slug: "pagate",
    title: "Pagate",
    tags: ["Plataforma digital", "UX/UI"],
    image: "/portafolio/pagate-desktop.jpg",
  },
  {
    slug: "san-mateo",
    title: "San Mateo Gestión Inmobiliaria",
    tags: ["Sitio web", "Branding"],
    image: "/portafolio/sanmateo-desktop.jpg",
  },
  {
    slug: "allisone",
    title: "Allisone",
    tags: ["Sitio corporativo", "Diseño visual"],
    image: "/portafolio/allisone-desktop.jpg",
  },
];

export const uxFaqs: FaqItem[] = [
  {
    question: "¿Cuál es la diferencia entre UX y UI?",
    answer:
      "UX se centra en la experiencia: investigación, flujos y usabilidad. UI se enfoca en la interfaz visual: tipografía, color, componentes y estilo. Trabajamos ambas de forma integrada.",
  },
  {
    question: "¿Pueden diseñar mi sitio aunque otro equipo lo desarrolle?",
    answer:
      "Sí. Entregamos wireframes, prototipos y sistemas de diseño listos para implementación, con especificaciones claras para tu equipo o proveedor de desarrollo.",
  },
  {
    question: "¿Pueden mejorar el diseño de una web existente?",
    answer:
      "Sí. Auditores UX/UI, rediseños parciales o totales y mejoras basadas en datos, feedback y objetivos de conversión.",
  },
  {
    question: "¿Incluyen diseño para dispositivos móviles?",
    answer:
      "Sí. Diseñamos responsive desde el inicio, priorizando la experiencia en móvil cuando el tráfico o el uso lo requieren.",
  },
  {
    question: "¿Pueden crear o renovar la identidad visual de mi marca?",
    answer:
      "Sí. Creamos o actualizamos identidad visual, guidelines y aplicaciones digitales para mantener coherencia en todos los canales.",
  },
  {
    question: "¿Qué recibo al finalizar el trabajo?",
    answer:
      "Archivos de diseño (Figma u otros), prototipos, componentes y documentación necesaria para desarrollo o handoff. Ajustamos el paquete según el alcance acordado.",
  },
];

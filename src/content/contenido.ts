import type { FaqItem } from "@/content/faqs";

export const cgHero = {
  eyebrow: "Servicios / Contenido & Growth",
  words: "Contenido que conecta con tu audiencia y",
  accent: "ayuda a crecer tu negocio.",
  description:
    "Diseñamos y producimos contenido digital a medida para que tu marca comunique mejor, conecte con las personas adecuadas y genere nuevas oportunidades comerciales. Integramos estrategia, creatividad, producción audiovisual, redes sociales y análisis de resultados para que cada pieza tenga un propósito dentro de tu negocio.",
} as const;

export const cgHeroStats = [
  { icon: "clapper" as const, label: "Contenido estratégico" },
  { icon: "users" as const, label: "Más alcance y comunidad" },
  { icon: "bars" as const, label: "Mayor engagement" },
  { icon: "trending" as const, label: "Crecimiento real y medible" },
];

export const cgStrategy = {
  eyebrow: "Estrategia primero",
  titleBefore: "Antes de crear contenido, entendemos",
  titleAccent: "qué necesitas lograr.",
  description:
    "Analizamos tu negocio, tu audiencia, tu propuesta de valor y los canales actuales para definir qué mensajes, formatos y acciones de contenido pueden aportar más valor. No se trata de publicar por publicar, sino de diseñar una estrategia de contenido que tenga sentido y se alinee con tus objetivos comerciales.",
  asideTitle: "Más que publicaciones, una estrategia de crecimiento",
  asideBody:
    "Conectamos creatividad, canales y medición para que cada pieza aporte a alcance, comunidad y oportunidades comerciales.",
} as const;

export const cgStrategyCards = [
  {
    icon: "target" as const,
    lines: ["Análisis de marca", "y audiencia"] as const,
  },
  {
    icon: "list" as const,
    lines: ["Definición de objetivos", "y mensajes clave"] as const,
  },
  {
    icon: "layout" as const,
    lines: ["Plan de contenidos", "personalizado"] as const,
  },
  {
    icon: "users" as const,
    lines: ["Acompañamiento", "en cada etapa"] as const,
  },
];

export const cgStrategyChecks = [
  "Contenido alineado a tus objetivos de negocio",
  "Formatos adaptados a cada canal",
  "Comunicación coherente con tu marca",
  "Integración con campañas y acciones comerciales",
  "Medición de resultados y oportunidades",
  "Soporte y optimización continua",
];

export const cgProjectTypes = {
  eyebrow: "Tipos de soluciones",
  titleBefore: "Desarrollamos contenido y estrategias para",
  titleAccent: "cada necesidad.",
  items: [
    {
      title: "Estrategia y planificación de contenidos",
      description:
        "Definimos pilares, mensajes, formatos y un calendario alineado con los objetivos de tu marca.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Producción audiovisual",
      description:
        "Creamos fotografías, videos, reels y piezas audiovisuales para comunicar productos, servicios, experiencias o campañas.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Diseño de contenido digital",
      description:
        "Desarrollamos piezas gráficas, carruseles, historias y recursos visuales coherentes con la identidad de tu marca.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Gestión de redes sociales",
      description:
        "Planificamos, publicamos y coordinamos contenidos para mantener una presencia digital consistente.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Contenido para campañas y conversión",
      description:
        "Creamos piezas y mensajes para anuncios, landing pages, email marketing y otras acciones comerciales.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Growth, fidelización y experimentación",
      description:
        "Diseñamos iniciativas de crecimiento, probamos formatos y desarrollamos acciones para mejorar la relación con tus clientes.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
  ],
} as const;

/** Metricool omitted to keep 8 logos (least impact vs core channels + creation tools). */
export const cgTechnologies = {
  eyebrow: "Herramientas y canales",
  titleBefore: "Creamos para los canales",
  titleAccent: "donde está tu audiencia.",
  description:
    "Utilizamos las principales plataformas y herramientas del mercado para desarrollar, gestionar y analizar contenido, adaptando los formatos y canales a tu estrategia.",
  aside: "Y muchas más herramientas",
  items: [
    { id: "instagram" as const, label: "Instagram", tone: "brand" as const },
    { id: "tiktok" as const, label: "TikTok", tone: "white" as const },
    { id: "youtube" as const, label: "YouTube", tone: "brand" as const },
    { id: "linkedin" as const, label: "LinkedIn", tone: "brand" as const },
    { id: "metaads" as const, label: "Meta Ads", tone: "brand" as const },
    {
      id: "adobecc" as const,
      label: "Adobe Creative Cloud",
      tone: "brand" as const,
    },
    { id: "capcut" as const, label: "CapCut", tone: "brand" as const },
    { id: "canva" as const, label: "Canva", tone: "brand" as const },
  ],
} as const;

export const cgResults = {
  eyebrow: "Contenido enfocado en resultados",
  titleBefore: "No basta con publicar. Hay que",
  titleAccent: "entender qué genera cada contenido.",
  description:
    "Diseñamos y gestionamos contenido con un enfoque estratégico y medible, conectando creatividad con objetivos comerciales para atraer, convertir y fidelizar clientes.",
} as const;

export const cgResultFeatures = [
  {
    icon: "kpi" as const,
    title: "Objetivos y planificación",
    description: "Contenido con un propósito.",
  },
  {
    icon: "camera" as const,
    title: "Producción adaptada al canal",
    description: "Formatos según tu audiencia.",
  },
  {
    icon: "megaphone" as const,
    title: "Distribución y amplificación",
    description: "Orgánico y pagado.",
  },
  {
    icon: "chart" as const,
    title: "Análisis de desempeño",
    description: "Resultados que guían decisiones.",
  },
  {
    icon: "brand" as const,
    title: "Identidad y consistencia",
    description: "Comunicación coherente de marca.",
  },
  {
    icon: "funnel" as const,
    title: "Contenido para cada etapa",
    description: "Reconocimiento, conversión y fidelización.",
  },
  {
    icon: "idea" as const,
    title: "Experimentación",
    description: "Probamos ideas y formatos.",
  },
  {
    icon: "improve" as const,
    title: "Mejora continua",
    description: "Ajustes constantes según resultados.",
  },
];

export const cgAi = {
  eyebrow: "IA aplicada al contenido",
  titleBefore: "IA para potenciar la creatividad",
  titleAccent: "y acelerar el crecimiento.",
  description:
    "Utilizamos inteligencia artificial para generar ideas, optimizar contenidos, analizar tendencias, adaptar formatos y agilizar procesos de producción, manteniendo siempre la identidad de tu marca y el criterio humano.",
  ctaLines: [
    "La IA potencia la",
    "creatividad, pero la",
    "estrategia y el criterio",
    "humano marcan la",
    "diferencia.",
  ] as const,
  benefits: [
    "Generación de ideas y guiones",
    "Adaptación de contenidos a distintos formatos",
    "Análisis de tendencias y audiencias",
    "Optimización de piezas y mensajes",
    "Automatización de procesos",
    "Apoyo en análisis de resultados",
  ],
} as const;

export const cgProcessSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Conocemos tu marca y tus objetivos.",
    icon: "search" as const,
  },
  {
    n: "02",
    title: "Estrategia",
    body: "Definimos mensajes, canales y contenidos.",
    icon: "list" as const,
  },
  {
    n: "03",
    title: "Planificación",
    body: "Creamos un calendario detallado.",
    icon: "flow" as const,
  },
  {
    n: "04",
    title: "Producción",
    body: "Desarrollamos las piezas y recursos.",
    icon: "code" as const,
  },
  {
    n: "05",
    title: "Publicación y distribución",
    body: "Gestionamos los contenidos en los canales definidos.",
    icon: "cog" as const,
  },
  {
    n: "06",
    title: "Análisis y evolución",
    body: "Medimos resultados y proponemos mejoras.",
    icon: "rocket" as const,
  },
];

export const cgRecentProjects = [
  {
    slug: "sorteo-seguro",
    title: "Sorteo Seguro",
    tags: ["Redes Sociales", "Campañas"],
    image: "/portafolio/sorteo-desktop.jpg",
  },
  {
    slug: "pagate",
    title: "Pagate",
    tags: ["Contenido Audiovisual", "Redes"],
    image: "/portafolio/pagate-desktop.jpg",
  },
  {
    slug: "san-mateo",
    title: "San Mateo Gestión Inmobiliaria",
    tags: ["Contenido", "Campañas"],
    image: "/portafolio/sanmateo-desktop.jpg",
  },
  {
    slug: "allisone",
    title: "Allisone",
    tags: ["Redes Sociales", "Diseño"],
    image: "/portafolio/allisone-desktop.jpg",
  },
];

export const contenidoFaqs: FaqItem[] = [
  {
    question: "¿Qué incluye un servicio de Contenido & Growth?",
    answer:
      "Depende de las necesidades de la marca. Puede incluir estrategia, planificación, diseño, producción audiovisual, gestión de redes, contenido para campañas y análisis de resultados.",
  },
  {
    question: "¿Pueden encargarse de la fotografía y los videos?",
    answer:
      "Sí, podemos contemplar producción audiovisual según el alcance, las necesidades y la ubicación del proyecto.",
  },
  {
    question: "¿Necesito contratar la gestión completa de redes sociales?",
    answer:
      "No. Podemos desarrollar una campaña, producir contenido específico o trabajar de manera continua, según lo que necesites.",
  },
  {
    question: "¿Pueden crear contenido para mis campañas publicitarias?",
    answer:
      "Sí. Podemos desarrollar piezas y mensajes adaptados a los objetivos, formatos y canales de cada campaña.",
  },
  {
    question: "¿Cómo se mide si el contenido está funcionando?",
    answer:
      "Definimos indicadores según el objetivo de cada acción y analizamos los resultados disponibles para orientar mejoras.",
  },
  {
    question: "¿Pueden trabajar con mi equipo de marketing actual?",
    answer:
      "Sí. Podemos complementar a tu equipo con estrategia, diseño, producción o apoyo especializado según el proyecto.",
  },
];

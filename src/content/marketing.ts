import type { FaqItem } from "@/content/faqs";

export const mktHero = {
  eyebrow: "Servicios / Marketing Digital 360°",
  words: "Marketing digital que conecta",
  accent: "estrategia, datos y crecimiento.",
  description:
    "Diseñamos e implementamos estrategias de marketing digital a medida para ayudar a tu negocio a ganar visibilidad, atraer clientes potenciales y generar oportunidades de venta. Integramos publicidad, contenido, posicionamiento, analítica y automatización para que cada acción tenga un propósito y pueda evaluarse con información real.",
} as const;

export const mktHeroStats = [
  { icon: "bars" as const, label: "Más visibilidad de tu marca" },
  { icon: "users" as const, label: "Clientes más calificados" },
  { icon: "funnel" as const, label: "Más conversiones y ventas" },
  { icon: "data" as const, label: "Estrategia basada en datos reales" },
];

export const mktStrategy = {
  eyebrow: "Estrategia primero",
  titleBefore: "Antes de invertir en publicidad, entendemos",
  titleAccent: "qué necesitas lograr.",
  description:
    "Analizamos tu negocio, tu mercado y tus clientes para definir una estrategia digital alineada a tus objetivos. Evaluamos tus canales actuales, la competencia y las oportunidades, para diseñar un plan de acción realista y medible. No se trata de estar en todas las plataformas, sino de utilizar las que tienen sentido para tu negocio.",
  asideTitle: "Más que campañas, un crecimiento sostenible",
  asideBody:
    "Construimos un plan medible, con canales priorizados y optimización continua para que tu inversión rinda de forma sostenida.",
} as const;

export const mktStrategyCards = [
  {
    icon: "target" as const,
    lines: ["Análisis de negocio", "y mercado"] as const,
  },
  {
    icon: "list" as const,
    lines: ["Definición de objetivos", "y canales"] as const,
  },
  {
    icon: "layout" as const,
    lines: ["Plan de acción", "personalizado"] as const,
  },
  {
    icon: "users" as const,
    lines: ["Acompañamiento", "en cada etapa"] as const,
  },
];

export const mktStrategyChecks = [
  "Estrategias alineadas a tus objetivos comerciales",
  "Uso eficiente del presupuesto",
  "Mensajes que conectan con tu audiencia",
  "Medición y análisis continuo",
  "Optimización constante de resultados",
  "Acompañamiento estratégico a largo plazo",
];

export const mktProjectTypes = {
  eyebrow: "Tipos de soluciones",
  titleBefore: "Desarrollamos estrategias completas para",
  titleAccent: "impulsar tu negocio.",
  items: [
    {
      title: "Estrategia y planificación digital",
      description:
        "Definimos objetivos, públicos, canales y un plan de acción alineado a tu negocio.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Publicidad digital y performance",
      description:
        "Creamos y optimizamos campañas en Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads y más.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "SEO y posicionamiento orgánico",
      description:
        "Mejoramos tu visibilidad en buscadores con contenido, estructura y optimización técnica.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Contenido y redes sociales",
      description:
        "Desarrollamos estrategias y piezas que comunican tu marca y generan interacción real con tu audiencia.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Remarketing, CRM y automatización",
      description:
        "Diseñamos flujos de seguimiento y comunicación para acompañar a tus clientes en todo el proceso.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Analítica y optimización comercial",
      description:
        "Medimos resultados, analizamos datos y proponemos mejoras para que cada acción genere más valor.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
  ],
} as const;

/** Dropped LinkedIn Ads + HubSpot: least impact vs Meta/Google/TikTok + analytics stack. */
export const mktTechnologies = {
  eyebrow: "Herramientas y canales",
  titleBefore: "Elegimos los canales",
  titleAccent: "según tu negocio.",
  description:
    "Trabajamos con las principales plataformas y herramientas del mercado, adaptando la estrategia a tus objetivos, tu audiencia y tu presupuesto.",
  aside: "Y muchas más herramientas",
  items: [
    { id: "metaads" as const, label: "Meta Ads", tone: "brand" as const },
    { id: "googleads" as const, label: "Google Ads", tone: "brand" as const },
    { id: "tiktok" as const, label: "TikTok Ads", tone: "white" as const },
    { id: "youtube" as const, label: "YouTube Ads", tone: "brand" as const },
    { id: "ga" as const, label: "Google Analytics", tone: "brand" as const },
    { id: "gtm" as const, label: "Google Tag Manager", tone: "brand" as const },
    { id: "looker" as const, label: "Looker Studio", tone: "brand" as const },
    { id: "brevo" as const, label: "Brevo", tone: "brand" as const },
  ],
} as const;

export const mktResults = {
  eyebrow: "Marketing enfocado en resultados",
  titleBefore: "No basta con generar tráfico. Hay que",
  titleAccent: "entender qué ocurre después.",
  description:
    "Diseñamos estrategias que combinan creatividad, tecnología y análisis, para atraer audiencias relevantes, mejorar la conversión y generar oportunidades reales de crecimiento para tu negocio.",
} as const;

export const mktResultFeatures = [
  {
    icon: "kpi" as const,
    title: "Objetivos y KPIs",
    description: "Indicadores según tu negocio.",
  },
  {
    icon: "users" as const,
    title: "Captación de clientes",
    description: "Audiencias relevantes.",
  },
  {
    icon: "store" as const,
    title: "Experiencia de conversión",
    description: "Landing pages y procesos claros.",
  },
  {
    icon: "remarketing" as const,
    title: "Remarketing y seguimiento",
    description: "Volvemos a conectar con tu audiencia.",
  },
  {
    icon: "trending" as const,
    title: "Medición y atribución",
    description: "Análisis de resultados reales.",
  },
  {
    icon: "optimize" as const,
    title: "Optimización de campañas",
    description: "Ajustes continuos para mejores resultados.",
  },
  {
    icon: "sales" as const,
    title: "Análisis comercial",
    description: "Conexión entre marketing y ventas.",
  },
  {
    icon: "improve" as const,
    title: "Mejora continua",
    description: "Nuevas oportunidades de crecimiento.",
  },
];

export const mktAi = {
  eyebrow: "IA aplicada al marketing",
  titleBefore: "IA para más creatividad,",
  titleAccent: "mejores decisiones y mayor eficiencia.",
  description:
    "Utilizamos inteligencia artificial para analizar información, generar ideas, crear contenidos, personalizar audiencias y automatizar tareas, potenciando el impacto de tus estrategias de marketing digital.",
  ctaLines: [
    "La IA potencia la",
    "estrategia, el criterio",
    "humano sigue siendo",
    "esencial.",
  ] as const,
  benefits: [
    "Generación de ideas y contenidos",
    "Análisis de datos y audiencias",
    "Personalización de mensajes",
    "Optimización de campañas",
    "Automatización de procesos",
    "Asistencia en la creación de piezas",
  ],
} as const;

export const mktProcessSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Conocemos tu negocio y definimos objetivos.",
    icon: "search" as const,
  },
  {
    n: "02",
    title: "Estrategia",
    body: "Definimos canales, mensajes y plan de acción.",
    icon: "list" as const,
  },
  {
    n: "03",
    title: "Preparación y medición",
    body: "Configuramos campañas, audiencias y analítica.",
    icon: "flow" as const,
  },
  {
    n: "04",
    title: "Implementación",
    body: "Lanzamos las campañas y acciones digitales.",
    icon: "code" as const,
  },
  {
    n: "05",
    title: "Optimización",
    body: "Analizamos resultados y ajustamos la estrategia.",
    icon: "cog" as const,
  },
  {
    n: "06",
    title: "Reportes y evolución",
    body: "Revisamos avances y proponemos nuevas oportunidades.",
    icon: "rocket" as const,
  },
];

export const mktRecentProjects = [
  {
    slug: "sorteo-seguro",
    title: "Sorteo Seguro",
    tags: ["Meta Ads", "Contenido", "Automatización"],
    image: "/portafolio/sorteo-desktop.jpg",
  },
  {
    slug: "san-mateo",
    title: "San Mateo Gestión Inmobiliaria",
    tags: ["Google Ads", "Redes Sociales", "SEO"],
    image: "/portafolio/sanmateo-desktop.jpg",
  },
  {
    slug: "pagate",
    title: "Pagate",
    tags: ["Estrategia Digital", "Performance"],
    image: "/portafolio/pagate-desktop.jpg",
  },
  {
    slug: "allisone",
    title: "Allisone",
    tags: ["Redes Sociales", "Contenido"],
    image: "/portafolio/allisone-desktop.jpg",
  },
];

export const marketingFaqs: FaqItem[] = [
  {
    question: "¿Qué incluye un servicio de marketing digital 360°?",
    answer:
      "Puede incluir estrategia, publicidad digital, SEO, contenido, redes, remarketing, CRM/automatización y analítica. Armamos el alcance según tus objetivos y presupuesto.",
  },
  {
    question: "¿Necesito contratar todos los servicios?",
    answer:
      "No. Priorizamos los canales y acciones con mayor impacto para tu negocio. Podemos empezar por un núcleo y escalar cuando tenga sentido.",
  },
  {
    question: "¿Qué presupuesto necesito para publicidad?",
    answer:
      "Depende del mercado, competencia y objetivos. Te proponemos un rango realista de inversión media y un plan de pruebas para validar qué funciona antes de escalar.",
  },
  {
    question: "¿Cuánto tiempo demora en verse resultados?",
    answer:
      "En paid media suelen verse señales en semanas. SEO y marca toman más tiempo. Definimos KPIs y horizontes claros desde el inicio para medir avance con criterio.",
  },
  {
    question: "¿Cómo sabré si las campañas están funcionando?",
    answer:
      "Configuramos medición (GA4, GTM, píxeles) y reportes con KPIs acordados: leads, ventas, CAC, ROAS u otros indicadores relevantes a tu negocio.",
  },
  {
    question: "¿Pueden trabajar con mi sitio web o equipo actual?",
    answer:
      "Sí. Integramos la estrategia con tu sitio, CRM y equipo interno o proveedores, y coordinamos handoffs claros para implementación y optimización.",
  },
];

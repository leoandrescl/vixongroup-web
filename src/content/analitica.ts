import type { FaqItem } from "@/content/faqs";

export const anHero = {
  eyebrow: "Servicios / Analítica & Datos",
  words: "Transformamos datos en",
  accent: "decisiones que impulsan tu negocio.",
  description:
    "Diseñamos e implementamos soluciones de analítica y medición para que puedas entender el comportamiento de tus usuarios, evaluar tus acciones digitales y tomar decisiones con información real. Integramos datos de sitios web, campañas, plataformas y procesos comerciales para construir una visión más clara de lo que ocurre en tu negocio.",
} as const;

export const anHeroStats = [
  { icon: "bars" as const, label: "Decisiones basadas en datos" },
  { icon: "target" as const, label: "Mejor rendimiento de tus campañas" },
  { icon: "users" as const, label: "Conoce a tus clientes" },
  { icon: "trending" as const, label: "Oportunidades reales de crecimiento" },
];

export const anStrategy = {
  eyebrow: "Estrategia primero",
  titleBefore: "Antes de medir, entendemos",
  titleAccent: "qué necesitas tomar decisiones.",
  description:
    "Analizamos tu negocio, tus objetivos, tus usuarios y los canales que utilizas para definir qué información necesitas, cómo medirla y qué indicadores realmente aportan valor. No se trata de medir todo, sino de implementar una solución clara, confiable y alineada a tus objetivos comerciales.",
  asideTitle: "Más que métricas, información que impulsa decisiones",
  asideBody:
    "Definimos qué medir, cómo interpretarlo y cómo usarlo para mejorar campañas, producto y operación comercial.",
} as const;

export const anStrategyCards = [
  {
    icon: "target" as const,
    lines: ["Análisis de negocio", "y objetivos"] as const,
  },
  {
    icon: "list" as const,
    lines: ["Definición de indicadores", "y eventos clave"] as const,
  },
  {
    icon: "layout" as const,
    lines: ["Plan de medición", "personalizado"] as const,
  },
  {
    icon: "users" as const,
    lines: ["Acompañamiento", "en cada etapa"] as const,
  },
];

export const anStrategyChecks = [
  "Medición alineada a tus objetivos de negocio",
  "Integración de distintas fuentes de datos",
  "Reportes claros y fáciles de interpretar",
  "Detección de oportunidades de mejora",
  "Implementación técnica confiable",
  "Soporte y optimización continua",
];

export const anProjectTypes = {
  eyebrow: "Tipos de soluciones",
  titleBefore: "Implementamos",
  titleAccent: "medición y análisis",
  titleMid: "para",
  titleAccent2: "cada necesidad.",
  items: [
    {
      title: "Analítica web y de aplicaciones",
      description:
        "Conoce cómo llegan tus usuarios, qué hacen y cómo interactúan con tu sitio o plataforma.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Medición de eventos y conversiones",
      description:
        "Registramos acciones relevantes como formularios, compras, registros o procesos completados.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "GTM, Pixel y Conversion API",
      description:
        "Implementamos y organizamos herramientas de medición para tus campañas y plataformas.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Dashboards y reportes personalizados",
      description:
        "Reunimos tus indicadores en paneles claros para facilitar el seguimiento y la toma de decisiones.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Integración de datos comerciales",
      description:
        "Conectamos información de campañas, e-commerce, CRM y otros sistemas para una visión completa.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Auditoría y optimización de medición",
      description:
        "Revisamos tus implementaciones actuales, detectamos inconsistencias y proponemos mejoras.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
  ],
} as const;

export const anTechnologies = {
  eyebrow: "Herramientas que se adaptan a tu ecosistema",
  titleBefore: "Conectamos tus datos",
  titleAccent: "con las mejores herramientas.",
  description:
    "Trabajamos con las principales plataformas de analítica, publicidad y visualización de datos, según las necesidades de tu proyecto.",
  aside: "Y muchas más herramientas",
  items: [
    { id: "ga" as const, label: "Google Analytics 4", tone: "brand" as const },
    { id: "gtm" as const, label: "Google Tag Manager", tone: "brand" as const },
    {
      id: "metapixel" as const,
      label: "Meta Pixel (CAPI)",
      tone: "brand" as const,
    },
    { id: "googleads" as const, label: "Google Ads", tone: "brand" as const },
    { id: "looker" as const, label: "Looker Studio", tone: "brand" as const },
    { id: "hubspot" as const, label: "HubSpot", tone: "brand" as const },
    { id: "shopify" as const, label: "Shopify", tone: "brand" as const },
    {
      id: "woocommerce" as const,
      label: "WooCommerce",
      tone: "brand" as const,
    },
  ],
} as const;

export const anResults = {
  eyebrow: "Medición enfocada en resultados",
  titleBefore: "No basta con tener datos. Hay que",
  titleAccent: "poder confiar en ellos.",
  description:
    "Implementamos soluciones de medición confiables y útiles para que puedas entender el comportamiento de tus usuarios, evaluar tus acciones y detectar oportunidades de mejora en todo el recorrido digital.",
} as const;

export const anResultFeatures = [
  {
    icon: "kpi" as const,
    title: "Objetivos y KPIs",
    description: "Indicadores según tu negocio.",
  },
  {
    icon: "quality" as const,
    title: "Calidad de datos",
    description: "Información confiable y consistente.",
  },
  {
    icon: "conversions" as const,
    title: "Medición de conversiones",
    description: "Registro y verificación de eventos.",
  },
  {
    icon: "behavior" as const,
    title: "Análisis de comportamiento",
    description: "Recorridos, abandonos y oportunidades.",
  },
  {
    icon: "attribution" as const,
    title: "Atribución y limitaciones",
    description: "Interpretación según cada plataforma.",
  },
  {
    icon: "optimize" as const,
    title: "Optimización de campañas",
    description: "Ajustes continuos según resultados.",
  },
  {
    icon: "dashboard" as const,
    title: "Dashboards útiles",
    description: "Información clara y accionable.",
  },
  {
    icon: "improve" as const,
    title: "Mejora continua",
    description: "Evolución de la medición con el tiempo.",
  },
];

export const anAi = {
  eyebrow: "IA aplicada a los datos",
  titleBefore: "IA para encontrar información útil y",
  titleAccent: "tomar mejores decisiones.",
  description:
    "Utilizamos inteligencia artificial para analizar datos, detectar patrones, generar resúmenes, explorar información y acelerar el análisis. También podemos desarrollar soluciones que integren IA en tus reportes o procesos de negocio.",
  ctaLines: [
    "La IA potencia tu",
    "información, pero las",
    "decisiones estratégicas",
    "siguen en manos de",
    "tu equipo.",
  ] as const,
  benefits: [
    "Análisis inteligente de datos",
    "Detección de patrones y anomalías",
    "Resúmenes y reportes automatizados",
    "Consultas en lenguaje natural",
    "Predicción de tendencias",
    "Apoyo en la toma de decisiones",
  ],
} as const;

export const anProcessSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Conocemos tu negocio y tus objetivos.",
    icon: "search" as const,
  },
  {
    n: "02",
    title: "Plan de medición",
    body: "Definimos qué medir y cómo hacerlo.",
    icon: "list" as const,
  },
  {
    n: "03",
    title: "Implementación",
    body: "Configuramos etiquetas, eventos y conexiones.",
    icon: "flow" as const,
  },
  {
    n: "04",
    title: "Validación",
    body: "Verificamos el correcto funcionamiento.",
    icon: "code" as const,
  },
  {
    n: "05",
    title: "Dashboards y análisis",
    body: "Creamos reportes útiles y fáciles de interpretar.",
    icon: "cog" as const,
  },
  {
    n: "06",
    title: "Optimización y evolución",
    body: "Ajustamos y proponemos nuevas oportunidades.",
    icon: "rocket" as const,
  },
];

export const anRecentProjects = [
  {
    slug: "sorteo-seguro",
    title: "Sorteo Seguro",
    tags: ["GA4", "CAPI", "Dashboards"],
    image: "/portafolio/sorteo-desktop.jpg",
  },
  {
    slug: "pagate",
    title: "Pagate",
    tags: ["Analítica", "Conversiones"],
    image: "/portafolio/pagate-desktop.jpg",
  },
  {
    slug: "san-mateo",
    title: "San Mateo Gestión Inmobiliaria",
    tags: ["GTM", "Reportes", "Integraciones"],
    image: "/portafolio/sanmateo-desktop.jpg",
  },
  {
    slug: "imppulsor-dmc",
    title: "Impulsor",
    tags: ["Analítica", "Performance"],
    image: "/portafolio/imppulsor-desktop.jpg",
  },
];

export const analiticaFaqs: FaqItem[] = [
  {
    question: "¿Qué diferencia hay entre GA4, Tag Manager y un Pixel?",
    answer:
      "GA4 analiza el comportamiento y conversiones en tu propiedad. Tag Manager organiza y publica etiquetas sin tocar código constantemente. Un Pixel (o CAPI) envía eventos a plataformas publicitarias como Meta para optimizar campañas.",
  },
  {
    question: "¿Pueden revisar una medición que ya está instalada?",
    answer:
      "Sí. Auditamos implementaciones existentes, detectamos duplicados, eventos mal configurados o brechas de atribución, y entregamos un plan de corrección priorizado.",
  },
  {
    question: "¿Por qué mis ventas no coinciden con las de Meta o Google Ads?",
    answer:
      "Es normal por diferencias de atribución, ventanas de conversión, consentimientos y modelos de cada plataforma. Alineamos definiciones, validamos eventos y te ayudamos a interpretar cada fuente con criterio.",
  },
  {
    question: "¿Pueden conectar los datos de mi tienda con mis campañas?",
    answer:
      "Sí. Integramos e-commerce (Shopify, WooCommerce u otros), CRM y plataformas publicitarias para unificar conversiones, audiencias y reportes.",
  },
  {
    question: "¿Pueden crear un dashboard personalizado?",
    answer:
      "Sí. Diseñamos paneles en Looker Studio u otras herramientas con los KPIs que tu equipo necesita revisar de forma recurrente.",
  },
  {
    question: "¿Qué ocurre si mi sitio cambia después de implementar la medición?",
    answer:
      "Podemos acompañar cambios de sitio o campañas con revalidación de eventos, actualización de contenedores y ajustes al plan de medición.",
  },
];

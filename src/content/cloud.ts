import type { FaqItem } from "@/content/faqs";

export const cipHero = {
  eyebrow: "Servicios / Cloud, Infraestructura y Performance",
  words: "Tu proyecto necesita una",
  accent: "infraestructura preparada para crecer.",
  description:
    "Diseñamos, configuramos y optimizamos entornos cloud para que tus sitios, tiendas y plataformas funcionen con estabilidad, seguridad y alto rendimiento. Evaluamos las necesidades de cada proyecto para implementar una solución adecuada a su operación, tráfico y proyección de crecimiento.",
} as const;

export const cipHeroStats = [
  { icon: "shield" as const, label: "Mayor estabilidad" },
  { icon: "bars" as const, label: "Mejor rendimiento" },
  { icon: "database" as const, label: "Escalabilidad según tu negocio" },
  { icon: "lock" as const, label: "Seguridad y respaldo de tu información" },
];

export const cipStrategy = {
  eyebrow: "Estrategia primero",
  titleBefore: "Antes de elegir un servidor, entendemos",
  titleAccent: "qué debe soportar.",
  description:
    "Analizamos el tipo de proyecto, tráfico esperado, procesos críticos, integraciones y proyección de crecimiento. Evaluamos la infraestructura actual y definimos la mejor solución, evitando costos innecesarios y garantizando un entorno estable y escalable.",
  asideTitle: "Más que servidores, tranquilidad para tu negocio",
  asideBody:
    "Definimos una infraestructura alineada a tu operación real: estable, segura y lista para crecer sin sobredimensionar costos.",
} as const;

export const cipStrategyCards = [
  {
    icon: "target" as const,
    lines: ["Análisis de necesidades", "y entorno actual"] as const,
  },
  {
    icon: "list" as const,
    lines: ["Propuesta técnica", "personalizada"] as const,
  },
  {
    icon: "users" as const,
    lines: ["Acompañamiento", "en cada etapa"] as const,
  },
];

export const cipStrategyChecks = [
  "Soluciones adaptadas a tu proyecto",
  "Entornos estables y de alto rendimiento",
  "Seguridad y respaldos implementados",
  "Optimización continua de recursos",
  "Soporte ante incidentes y contingencias",
  "Escalabilidad para el crecimiento",
];

export const cipProjectTypes = {
  eyebrow: "Tipos de soluciones",
  titleBefore: "Implementamos y",
  titleAccent: "optimizamos",
  titleAfter: "la infraestructura que necesitas.",
  items: [
    {
      title: "Hosting y entornos cloud",
      description:
        "Configuración y administración de entornos para sitios web, tiendas y aplicaciones.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Servidores y arquitectura",
      description:
        "Preparación de servidores, servicios y componentes para ejecutar tu plataforma de manera eficiente.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "CDN, caché y distribución de contenido",
      description:
        "Mejora en la entrega de recursos y reducción de carga sobre el servidor.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Bases de datos y almacenamiento",
      description:
        "Configuración y optimización de los servicios que almacenan y procesan tu información.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Seguridad, respaldos y recuperación",
      description:
        "Protección, copias de seguridad y planes de recuperación según la criticidad de tu sistema.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Monitoreo, mantenimiento y optimización",
      description:
        "Detección de problemas, revisión de recursos y mejora continua del rendimiento.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
  ],
} as const;

export const cipTechnologies = {
  eyebrow: "Tecnología sin límites",
  titleBefore: "Trabajamos con las mejores",
  titleAccent: "plataformas y herramientas.",
  description:
    "Utilizamos tecnología de primer nivel y elegimos la mejor arquitectura según los requerimientos de tu proyecto.",
  aside: "Y muchas más tecnologías",
  items: [
    { id: "aws" as const, label: "AWS", tone: "brand" as const },
    { id: "gcp" as const, label: "Google Cloud", tone: "brand" as const },
    { id: "cloudflare" as const, label: "Cloudflare", tone: "brand" as const },
    {
      id: "digitalocean" as const,
      label: "DigitalOcean",
      tone: "brand" as const,
    },
    { id: "nginx" as const, label: "NGINX", tone: "brand" as const },
    { id: "linux" as const, label: "Linux", tone: "brand" as const },
    { id: "docker" as const, label: "Docker", tone: "brand" as const },
    { id: "mysql" as const, label: "MySQL", tone: "brand" as const },
  ],
} as const;

export const cipResults = {
  eyebrow: "Rendimiento en resultados",
  titleBefore: "No basta con que tu sitio esté online.",
  titleAccent: "Debe responder bien.",
  description:
    "Optimizamos cada componente para que tu proyecto funcione de manera eficiente, ofreciendo una mejor experiencia a tus usuarios y preparándolo para el crecimiento.",
} as const;

export const cipResultFeatures = [
  {
    icon: "gauge" as const,
    title: "Velocidad de carga",
    description: "Optimización de recursos.",
  },
  {
    icon: "metrics" as const,
    title: "Core Web Vitals",
    description: "Mejora de métricas clave.",
  },
  {
    icon: "server" as const,
    title: "Servidor y aplicación",
    description: "Tiempos de respuesta.",
  },
  {
    icon: "database" as const,
    title: "Base de datos",
    description: "Consultas e índices optimizados.",
  },
  {
    icon: "cloud" as const,
    title: "Caché y CDN",
    description: "Entrega de contenido eficiente.",
  },
  {
    icon: "trending" as const,
    title: "Escalabilidad",
    description: "Preparado para más tráfico.",
  },
  {
    icon: "alert" as const,
    title: "Monitoreo continuo",
    description: "Detección y alertas.",
  },
  {
    icon: "wrench" as const,
    title: "Mantenimiento",
    description: "Actualizaciones y mejoras.",
  },
];

export const cipAi = {
  eyebrow: "IA y automatización",
  titleBefore: "IA y automatización para una",
  titleAccent: "operación más inteligente.",
  description:
    "Aplicamos inteligencia artificial y automatización en tareas de monitoreo, análisis de datos y gestión de infraestructura, para detectar problemas, optimizar recursos y facilitar la administración de tus servicios.",
  ctaLines: [
    "Tecnología para",
    "anticiparse a los",
    "problemas.",
  ] as const,
  benefits: [
    "Análisis de logs y detección de patrones",
    "Alertas inteligentes",
    "Optimización automática de recursos",
    "Reportes y resúmenes asistidos",
    "Automatización de tareas operativas",
    "Soporte en diagnóstico y documentación",
  ],
} as const;

export const cipProcessSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Revisamos tu entorno y definimos objetivos.",
    icon: "search" as const,
  },
  {
    n: "02",
    title: "Propuesta",
    body: "Presentamos la solución, técnica y plan de trabajo.",
    icon: "list" as const,
  },
  {
    n: "03",
    title: "Diseño de arquitectura",
    body: "Definimos servicios y configuraciones.",
    icon: "flow" as const,
  },
  {
    n: "04",
    title: "Implementación",
    body: "Configuramos y desplegamos la infraestructura.",
    icon: "code" as const,
  },
  {
    n: "05",
    title: "Pruebas y optimización",
    body: "Validamos funcionamiento y rendimiento.",
    icon: "cog" as const,
  },
  {
    n: "06",
    title: "Monitoreo y evolución",
    body: "Acompañamiento continuo y mejoras futuras.",
    icon: "rocket" as const,
  },
];

export const cipRecentProjects = [
  {
    slug: "sorteo-seguro",
    title: "Sorteo Seguro",
    tags: ["Hosting", "Optimización"],
    image: "/portafolio/sorteo-desktop.jpg",
  },
  {
    slug: "pagate",
    title: "Pagate",
    tags: ["Cloud", "Infraestructura"],
    image: "/portafolio/pagate-desktop.jpg",
  },
  {
    slug: "layer07",
    title: "Layer07",
    tags: ["Servidores", "Seguridad"],
    image: "/portafolio/layer07-desktop.jpg",
  },
  {
    slug: "imppulsor-dmc",
    title: "Impulsor",
    tags: ["Infraestructura", "Monitoreo"],
    image: "/portafolio/imppulsor-desktop.jpg",
  },
];

export const cloudFaqs: FaqItem[] = [
  {
    question: "¿Qué infraestructura necesita mi proyecto?",
    answer:
      "Depende del tipo de aplicación, tráfico, funcionalidades, presupuesto y necesidades de disponibilidad. Evaluamos esos factores antes de recomendar una solución.",
  },
  {
    question: "¿Pueden optimizar un sitio que ya está funcionando?",
    answer:
      "Sí. Podemos revisar su rendimiento e infraestructura actual para identificar oportunidades de mejora y proponer acciones concretas.",
  },
  {
    question: "¿Es necesario migrar a otro servidor o proveedor?",
    answer:
      "No siempre. Primero evaluamos si el entorno actual puede optimizarse o si existe una razón técnica para recomendar una migración.",
  },
  {
    question: "¿Qué ocurre si mi sitio recibe mucho tráfico?",
    answer:
      "Podemos evaluar la capacidad de la infraestructura y proponer medidas de optimización o escalabilidad según el comportamiento esperado y los recursos disponibles.",
  },
  {
    question: "¿Incluyen respaldos y seguridad?",
    answer:
      "Podemos contemplarlos dentro del servicio, definiendo frecuencia, alcance, retención y procedimientos de recuperación según las necesidades del proyecto.",
  },
  {
    question: "¿Ofrecen mantenimiento y monitoreo?",
    answer:
      "Sí, podemos considerar servicios de mantenimiento, monitoreo y soporte según el alcance y la modalidad contratada.",
  },
];

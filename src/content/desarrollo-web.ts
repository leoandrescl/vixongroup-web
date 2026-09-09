import type { FaqItem } from "@/content/faqs";

export const dwHeroStats = [
  { icon: "bars" as const, label: "Más visibilidad" },
  { icon: "users" as const, label: "Más clientes" },
  { icon: "cart" as const, label: "Más ventas" },
  { icon: "trending" as const, label: "Crecimiento sostenible" },
];

export const dwStrategyCards = [
  {
    icon: "target" as const,
    lines: ["Análisis de objetivos", "y requerimientos"] as const,
  },
  {
    icon: "list" as const,
    lines: ["Propuesta", "personalizada"] as const,
  },
  {
    icon: "users" as const,
    lines: ["Equipo especializado", "en cada etapa"] as const,
  },
];

export const dwStrategyChecks = [
  "Soluciones a la medida",
  "Tecnología moderna y escalable",
  "Diseño enfocado en resultados",
  "Acompañamiento antes y después",
  "Integraciones con tus sistemas actuales",
];

export const dwProjectTypes = [
  {
    title: "Sitios corporativos",
    description:
      "Comunica tu marca, servicios y diferenciales de forma profesional.",
    image: "/portafolio/sanmateo-desktop.jpg",
    href: "/contacto",
  },
  {
    title: "Tiendas online",
    description:
      "Vende tus productos en internet con una tienda segura y administrable.",
    image: "/portafolio/allisone-desktop.jpg",
    href: "/contacto",
  },
  {
    title: "Landing pages",
    description:
      "Páginas enfocadas en campañas, lanzamientos o generación de leads.",
    image: "/home/img-serv-06.jpg",
    href: "/contacto",
  },
  {
    title: "Portales y membresías",
    description:
      "Plataformas con acceso restringido, suscripciones, cursos y más.",
    image: "/portafolio/pagate-desktop.jpg",
    href: "/contacto",
  },
  {
    title: "Desarrollos a medida",
    description:
      "Soluciones personalizadas según tus procesos y requerimientos.",
    image: "/portafolio/sorteo-desktop.jpg",
    href: "/contacto",
  },
];

export const dwTechnologies = [
  { id: "wordpress" as const, label: "WordPress", tone: "white" as const },
  { id: "woocommerce" as const, label: "WOOCOMMERCE", tone: "white" as const },
  { id: "shopify" as const, label: "Shopify", tone: "brand" as const },
  { id: "react" as const, label: "React", tone: "brand" as const },
  { id: "nextjs" as const, label: "Next.js", tone: "white" as const },
  { id: "laravel" as const, label: "Laravel", tone: "brand" as const },
  { id: "mysql" as const, label: "MySQL", tone: "brand" as const },
  { id: "aws" as const, label: "AWS", tone: "brand" as const },
];

/** Orden visual: 2 columnas × 3 filas (columna izquierda / derecha). */
export const dwResultFeatures = [
  {
    icon: "monitor" as const,
    title: "Diseño UX/UI",
    description: "Experiencias intuitivas y atractivas.",
  },
  {
    icon: "gauge" as const,
    title: "Sitios rápidos",
    description: "Optimización de rendimiento y carga.",
  },
  {
    icon: "seo" as const,
    title: "Optimización SEO",
    description: "Estructura técnica preparada para posicionar.",
  },
  {
    icon: "wrench" as const,
    title: "Integraciones",
    description: "Con pasarelas de pago, CRM, ERP, APIs y más.",
  },
  {
    icon: "shield" as const,
    title: "Seguridad",
    description: "Implementamos buenas prácticas y monitoreo constante.",
  },
  {
    icon: "pie" as const,
    title: "Analítica y medición",
    description:
      "Configuración con Google Analytics, Tag Manager y eventos clave.",
  },
];

export const dwAiBenefits = [
  "Chatbots y asistentes virtuales",
  "Automatización de tareas y respuestas",
  "Generación de contenido asistida",
  "Búsqueda inteligente en tu sitio",
  "Integración con herramientas de IA (OpenAI, etc.)",
];

export const dwProcessSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Conocemos tu negocio, y definimos objetivos.",
    icon: "search" as const,
  },
  {
    n: "02",
    title: "Propuesta",
    body: "Presentamos la solución, tecnología y plan de trabajo.",
    icon: "list" as const,
  },
  {
    n: "03",
    title: "Diseño UX/UI",
    body: "Creamos una experiencia atractiva y funcional.",
    icon: "wand" as const,
  },
  {
    n: "04",
    title: "Desarrollo",
    body: "Implementamos y realizamos integraciones.",
    icon: "code" as const,
  },
  {
    n: "05",
    title: "Pruebas y ajustes",
    body: "Validamos funcionamiento, seguridad y rendimiento.",
    icon: "cog" as const,
  },
  {
    n: "06",
    title: "Lanzamiento",
    body: "Publicamos tu sitio y te acompañamos.",
    icon: "rocket" as const,
  },
];

export const dwRecentProjects = [
  {
    slug: "san-mateo",
    title: "San Mateo Gestión Inmobiliaria",
    tags: ["Sitio corporativo", "Inmobiliaria"],
    image: "/portafolio/sanmateo-desktop.jpg",
  },
  {
    slug: "sorteo-seguro",
    title: "Sorteo Seguro",
    tags: ["E-commerce", "Concursos"],
    image: "/portafolio/sorteo-desktop.jpg",
  },
  {
    slug: "pagate",
    title: "Pagate",
    tags: ["Sitio corporativo", "Servicios"],
    image: "/portafolio/pagate-desktop.jpg",
  },
  {
    slug: "allisone",
    title: "Allisone",
    tags: ["Sitio corporativo", "Industrial"],
    image: "/portafolio/allisone-desktop.jpg",
  },
];

export const desarrolloWebFaqs: FaqItem[] = [
  {
    question: "¿Cuánto tiempo demora el desarrollo de un sitio web?",
    answer:
      "Depende del alcance: una landing o sitio corporativo suele tomar entre 4 y 8 semanas; una tienda online o portal con integraciones, entre 8 y 14 semanas. En la propuesta te entregamos un cronograma con hitos claros.",
  },
  {
    question: "¿Qué plataforma me recomiendan?",
    answer:
      "Evaluamos tus objetivos, presupuesto, necesidad de administración y proyección. Según el caso recomendamos WordPress, WooCommerce, Shopify, Next.js u otra solución a medida. La decisión siempre la tomamos contigo.",
  },
  {
    question: "¿Puedo administrar el sitio yo mismo?",
    answer:
      "Sí. Entregamos un panel de administración intuitivo y capacitación para que puedas actualizar contenidos, productos y páginas sin depender de nosotros en el día a día.",
  },
  {
    question: "¿El sitio incluye optimización SEO?",
    answer:
      "Incluimos SEO técnico de base: estructura, velocidad, metadatos, sitemap y buenas prácticas de indexación. El SEO de contenidos y campañas se puede complementar según tus objetivos.",
  },
  {
    question: "¿Se puede integrar con mis sistemas actuales?",
    answer:
      "En la mayoría de los casos sí. Integramos pasarelas de pago, CRM, ERP, APIs y herramientas de marketing. Revisamos la factibilidad técnica en la etapa de diagnóstico.",
  },
  {
    question: "¿Qué sucede después del lanzamiento?",
    answer:
      "Te acompañamos en la puesta en marcha y una ventana de soporte post-lanzamiento. Luego puedes optar por mantención, evolución continua o handoff a tu equipo interno.",
  },
];

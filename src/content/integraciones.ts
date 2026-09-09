import type { FaqItem } from "@/content/faqs";

export const iauHero = {
  eyebrow: "Servicios / Integraciones & Automatización",
  words: "Conectamos tus sistemas.",
  accent: "Automatizamos tus procesos.",
  description:
    "Diseñamos e implementamos integraciones y automatizaciones a medida para que la información fluya entre tus plataformas y las tareas repetitivas dejen de depender de procesos manuales. Conectamos tecnología, datos y operaciones para ayudarte a trabajar con mayor eficiencia, reducir errores y hacer crecer tu negocio.",
} as const;

export const iauHeroStats = [
  { icon: "cog" as const, label: "Procesos más eficientes" },
  { icon: "alert" as const, label: "Menos errores operativos" },
  { icon: "timer" as const, label: "Ahorro de tiempo y costos" },
  { icon: "sync" as const, label: "Información siempre sincronizada" },
];

export const iauStrategy = {
  eyebrow: "Estrategia primero",
  titleBefore: "Entendemos cómo se mueve tu",
  titleAccent: "información.",
  description:
    "Analizamos tus procesos, las herramientas que utilizas y los objetivos de tu negocio, para diseñar una solución de integración y automatización que realmente aporte valor. No se trata solo de conectar sistemas, sino de optimizar tu operación y simplificar el trabajo de tu equipo.",
  asideTitle: "Más que conexiones, resultados reales",
  asideBody:
    "Diseñamos flujos que conectan tus herramientas, eliminan fricción operativa y entregan información confiable para decidir y ejecutar mejor.",
} as const;

export const iauStrategyCards = [
  {
    icon: "target" as const,
    lines: ["Análisis de procesos", "y sistemas actuales"] as const,
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

export const iauStrategyChecks = [
  "Identificamos oportunidades de automatización",
  "Conectamos tus herramientas actuales",
  "Reducimos tareas manuales y errores",
  "Aseguramos un flujo de información confiable",
  "Escalamos la solución según tu crecimiento",
  "Soporte y mantenimiento continuo",
];

export const iauProjectTypes = {
  eyebrow: "Tipos de soluciones",
  titleBefore: "Integramos y",
  titleAccent: "automatizamos",
  titleAfter: "lo que tu negocio necesita.",
  items: [
    {
      title: "APIs e integración entre plataformas",
      description:
        "Conecta sistemas para intercambiar información y ejecutar acciones en forma coordinada.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "E-commerce y gestión comercial",
      description:
        "Sincroniza pedidos, clientes, pagos, inventario y más, con tus herramientas de gestión.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "CRM y automatización de ventas",
      description:
        "Organiza contactos, seguimientos y oportunidades de venta de forma automática.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "WhatsApp, correo y comunicaciones",
      description:
        "Automatiza notificaciones, confirmaciones, recordatorios y mensajes según eventos de tu negocio.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Workflows y procesos internos",
      description:
        "Automatiza tareas, flujos de aprobación, generación de documentos y asignación de tu negocio.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
    {
      title: "Integraciones a medida",
      description:
        "Desarrollamos conexiones y procesos específicos según tus requerimientos.",
      image: "/home/img-hero-home.jpg",
      href: "/contacto",
    },
  ],
} as const;

export const iauTechnologies = {
  eyebrow: "Tecnología sin límites",
  titleBefore: "Utilizamos las mejores",
  titleAccent: "tecnologías y plataformas.",
  description:
    "Trabajamos con herramientas líderes del mercado y desarrollos personalizados, eligiendo siempre la mejor alternativa según los requerimientos de tu proyecto.",
  aside:
    "Y muchas más tecnologías. Evaluamos la mejor opción según tu proyecto.",
  items: [
    { id: "make" as const, label: "Make", tone: "brand" as const },
    { id: "zapier" as const, label: "Zapier", tone: "brand" as const },
    { id: "n8n" as const, label: "n8n", tone: "brand" as const },
    { id: "nodejs" as const, label: "Node.js", tone: "brand" as const },
    { id: "python" as const, label: "Python", tone: "brand" as const },
    { id: "gcp" as const, label: "Google Cloud", tone: "brand" as const },
    { id: "aws" as const, label: "AWS", tone: "brand" as const },
    { id: "php" as const, label: "PHP", tone: "brand" as const },
    { id: "mysql" as const, label: "MySQL", tone: "brand" as const },
  ],
} as const;

export const iauResults = {
  eyebrow: "Desarrollo enfocado en resultados",
  titleBefore: "Automatizaciones que",
  titleAccent: "impulsan tu negocio.",
  description:
    "Diseñamos soluciones confiables, seguras y escalables, para que tus procesos funcionen de manera eficiente y puedas concentrarte en lo más importante: hacer crecer tu negocio.",
} as const;

export const iauResultFeatures = [
  {
    icon: "fileCheck" as const,
    title: "Validación de datos",
    description: "Información correcta y sin errores.",
  },
  {
    icon: "alert" as const,
    title: "Manejo de errores",
    description: "Alertas y reintentos automáticos.",
  },
  {
    icon: "shield" as const,
    title: "Seguridad",
    description: "Protección de datos y control de accesos.",
  },
  {
    icon: "gauge" as const,
    title: "Monitoreo y trazabilidad",
    description: "Registro de eventos y seguimiento.",
  },
  {
    icon: "trending" as const,
    title: "Escalabilidad",
    description: "Preparado para crecer sin interrupciones.",
  },
  {
    icon: "wrench" as const,
    title: "Mantenimiento",
    description: "Soporte y actualizaciones continua.",
  },
];

export const iauAi = {
  eyebrow: "Innovación a tu favor",
  title: "Inteligencia artificial aplicada a tus procesos.",
  description:
    "Integramos IA en tus flujos de trabajo para analizar información, clasificar solicitudes, generar respuestas, automatizar tareas y mucho más. Soluciones prácticas que realmente aportan valor a tu negocio.",
  ctaLines: [
    "IA aplicada a",
    "procesos reales,",
    "no solo ideas.",
  ] as const,
  benefits: [
    "Asistentes virtuales y chatbots",
    "Clasificación automática de solicitudes",
    "Extracción y análisis de información",
    "Generación de contenido asistida",
    "Automatización de decisiones",
    "Integración con modelos de IA (OpenAI, etc.)",
  ],
} as const;

export const iauProcessSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Conocemos tu operación y definimos objetivos.",
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
    title: "Diseño del flujo",
    body: "Mapeamos procesos y configuramos la solución.",
    icon: "flow" as const,
  },
  {
    n: "04",
    title: "Implementación",
    body: "Desarrollamos e integramos las herramientas.",
    icon: "code" as const,
  },
  {
    n: "05",
    title: "Pruebas y ajustes",
    body: "Validamos el funcionamiento en distintos escenarios.",
    icon: "cog" as const,
  },
  {
    n: "06",
    title: "Puesta en marcha",
    body: "Lanzamos la solución y te acompañamos en la evolución.",
    icon: "rocket" as const,
  },
];

export const iauRecentProjects = [
  {
    slug: "sorteo-seguro",
    title: "Sorteo Seguro",
    tags: ["Integraciones", "Automatización"],
    image: "/portafolio/sorteo-desktop.jpg",
  },
  {
    slug: "pagate",
    title: "Pagate",
    tags: ["Integraciones", "Plataforma"],
    image: "/portafolio/pagate-desktop.jpg",
  },
  {
    slug: "imppulsor-dmc",
    title: "Impulsor",
    tags: ["Automatización", "CRM"],
    image: "/portafolio/imppulsor-desktop.jpg",
  },
  {
    slug: "san-mateo",
    title: "San Mateo Gestión Inmobiliaria",
    tags: ["Integraciones", "Procesos"],
    image: "/portafolio/sanmateo-desktop.jpg",
  },
];

export const integracionesFaqs: FaqItem[] = [
  {
    question: "¿Pueden integrar las herramientas que ya utiliza mi empresa?",
    answer:
      "En la mayoría de los casos sí. Evaluamos APIs, webhooks y conectores disponibles de tus plataformas actuales y diseñamos la integración más estable y mantenible.",
  },
  {
    question: "¿Necesito cambiar mis sistemas actuales?",
    answer:
      "No necesariamente. Priorizamos conectar lo que ya usas. Solo sugerimos cambios o migraciones cuando hay límites técnicos, costos o riesgos claros.",
  },
  {
    question: "¿Qué pasa si una integración falla?",
    answer:
      "Diseñamos manejo de errores, reintentos y alertas. Así puedes detectar incidencias rápido, evitar pérdida de datos y recuperar el flujo con trazabilidad.",
  },
  {
    question: "¿Se pueden automatizar procesos con aprobación humana?",
    answer:
      "Sí. Configuramos workflows con pasos de revisión, asignación y aprobación antes de ejecutar acciones críticas o notificaciones.",
  },
  {
    question: "¿Pueden integrar inteligencia artificial?",
    answer:
      "Sí. Incorporamos IA cuando aporta valor real: clasificación, extracción de datos, respuestas asistidas o decisiones dentro del flujo automatizado.",
  },
  {
    question: "¿Cuánto cuesta una integración o automatización?",
    answer:
      "Depende de la cantidad de sistemas, reglas de negocio y volumen de datos. Tras el diagnóstico entregamos una propuesta con alcance, fases y un rango de inversión claro.",
  },
];

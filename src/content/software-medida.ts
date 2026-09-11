import type { FaqItem } from "@/content/faqs";

export const smHero = {
  eyebrow: "Servicios / Software & Plataformas a Medida",
  words: "Software que se adapta a tu negocio,",
  accent: "no al revés.",
  description:
    "Diseñamos y desarrollamos plataformas digitales, sistemas internos y aplicaciones a medida para resolver las necesidades específicas de tu empresa. Combinamos estrategia, tecnología y experiencia de usuario para construir soluciones robustas, escalables y preparadas para el futuro.",
} as const;

export const smHeroStats = [
  { icon: "cog" as const, label: "Soluciones a medida para cada industria" },
  { icon: "code" as const, label: "Tecnología moderna y escalable" },
  { icon: "trending" as const, label: "Procesos más eficientes y automatizados" },
  { icon: "shield" as const, label: "Seguridad y continuidad de tu información" },
];

export const smStrategy = {
  eyebrow: "Estrategia primero",
  titleBefore: "Entendemos tu operación para construir",
  titleAccent: "la mejor solución.",
  description:
    "Analizamos tus procesos, objetivos y requerimientos para diseñar una solución tecnológica alineada a tu negocio. Evaluamos qué necesitas, qué se puede automatizar y cómo debe crecer el sistema para que realmente aporte valor a tu empresa.",
  asideTitle: "Más que desarrollo, una solución completa",
  asideBody:
    "Desarrollamos herramientas digitales que se integran a tu operación, optimizan tus procesos y te permiten crecer con control.",
} as const;

export const smStrategyCards = [
  {
    icon: "target" as const,
    lines: ["Análisis de procesos", "y requerimientos"] as const,
  },
  {
    icon: "list" as const,
    lines: ["Propuesta técnica", "y plan de desarrollo"] as const,
  },
  {
    icon: "users" as const,
    lines: ["Acompañamiento", "en cada etapa"] as const,
  },
];

export const smStrategyChecks = [
  "Soluciones diseñadas según tus objetivos",
  "Tecnología adecuada a tu operación",
  "Integración con tus sistemas actuales",
  "Enfoque en la experiencia del usuario",
  "Escalabilidad y flexibilidad",
  "Soporte y evolución a largo plazo",
];

export const smProjectTypes = {
  eyebrow: "Tipos de soluciones",
  titleBefore: "Desarrollamos tecnología para",
  titleAccent: "lo que tu negocio necesita.",
  items: [
    {
      title: "Sistemas internos y paneles admin",
      description:
        "Centraliza procesos, usuarios y operación de tu empresa.",
      icon: "admin" as const,
      href: "/contacto",
    },
    {
      title: "CRM y gestión comercial",
      description:
        "Organiza clientes, oportunidades y procesos de venta.",
      icon: "crm" as const,
      href: "/contacto",
    },
    {
      title: "Plataformas digitales a medida",
      description:
        "Soluciones con funcionalidades propias para tu negocio.",
      icon: "platform" as const,
      href: "/contacto",
    },
    {
      title: "Portales privados e intranets",
      description:
        "Acceso seguro para colaboradores, clientes o proveedores.",
      icon: "portal" as const,
      href: "/contacto",
    },
    {
      title: "Dashboards y reportes",
      description:
        "Información en tiempo real para una mejor toma de decisiones.",
      icon: "dashboard" as const,
      href: "/contacto",
    },
    {
      title: "Aplicaciones personalizadas",
      description:
        "Módulos y herramientas específicas según tus necesidades.",
      icon: "apps" as const,
      href: "/contacto",
    },
  ],
} as const;

export const smTechnologies = {
  eyebrow: "Tecnología sin límites",
  titleBefore: "Elegimos la tecnología",
  titleAccent: "según tu proyecto.",
  description:
    "Trabajamos con las mejores herramientas del mercado y definimos la arquitectura ideal según los requerimientos de tu solución. La tecnología se adapta a tus objetivos, no al revés.",
  aside:
    "Y muchas más tecnologías. Evaluamos la mejor combinación según tu proyecto.",
  items: [
    { id: "laravel" as const, label: "Laravel", tone: "brand" as const },
    { id: "react" as const, label: "React", tone: "brand" as const },
    { id: "nodejs" as const, label: "Node.js", tone: "brand" as const },
    { id: "python" as const, label: "Python", tone: "brand" as const },
    { id: "nextjs" as const, label: "Next.js", tone: "white" as const },
    { id: "mysql" as const, label: "MySQL", tone: "brand" as const },
    { id: "postgresql" as const, label: "PostgreSQL", tone: "brand" as const },
    { id: "aws" as const, label: "AWS", tone: "brand" as const },
  ],
} as const;

export const smResults = {
  eyebrow: "Tecnología enfocada en resultados",
  titleBefore: "Plataformas preparadas para operar,",
  titleAccent: "crecer y generar valor.",
  description:
    "Desarrollamos soluciones robustas, seguras y escalables, con una visión integral que considera eficiencia operativa, experiencia de usuario y proyección futura.",
} as const;

export const smResultFeatures = [
  {
    icon: "monitor" as const,
    title: "Experiencia de usuario (UX/UI)",
    description: "Interfaces claras y funcionales.",
  },
  {
    icon: "roles" as const,
    title: "Roles y permisos",
    description: "Accesos según cada usuario.",
  },
  {
    icon: "wrench" as const,
    title: "Integraciones",
    description: "Con pasarelas de pago, CRM, ERP y más.",
  },
  {
    icon: "shield" as const,
    title: "Seguridad",
    description: "Buenas prácticas y protección de datos.",
  },
  {
    icon: "trending" as const,
    title: "Rendimiento y escalabilidad",
    description: "Arquitectura preparada para crecer.",
  },
  {
    icon: "list" as const,
    title: "Analítica y trazabilidad",
    description: "Reportes y medición de procesos.",
  },
  {
    icon: "heart" as const,
    title: "Mantenimiento y evolución",
    description: "Acompañamiento a largo plazo.",
  },
  {
    icon: "refresh" as const,
    title: "Automatización",
    description: "Procesos más eficientes y sin tareas repetitivas.",
  },
];

export const smAi = {
  eyebrow: "Tecnología a tu favor",
  title: "Inteligencia artificial aplicada a tus procesos.",
  description:
    "Integramos soluciones de IA para automatizar tareas, analizar información y mejorar la experiencia de tus usuarios. Aplicamos la inteligencia artificial cuando realmente genera valor para tu negocio.",
  ctaLines: ["IA con criterio,", "para obtener", "resultados", "reales."] as const,
  benefits: [
    "Asistentes virtuales y chatbots",
    "Automatización de procesos",
    "Búsqueda inteligente en tus datos",
    "Generación asistida de contenido",
    "Análisis predictivo y clasificación de información",
    "Integración con modelos de IA (OpenAI, etc.)",
  ],
} as const;

export const smProcessSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Conocemos tu negocio y definimos objetivos.",
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
    title: "Diseño UX/UI",
    body: "Creamos una experiencia funcional y atractiva.",
    icon: "wand" as const,
  },
  {
    n: "04",
    title: "Desarrollo",
    body: "Implementamos la solución con buenas prácticas.",
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
    body: "Publicamos y te acompañamos en la evolución.",
    icon: "rocket" as const,
  },
];

export const smRecentProjects = [
  {
    slug: "sorteo-seguro",
    title: "Sorteo Seguro",
    tags: ["Plataforma de concursos", "E-commerce"],
    image: "/portafolio/sorteo-desktop.jpg",
  },
  {
    slug: "pagate",
    title: "Pagate",
    tags: ["Plataforma de pagos", "Servicios"],
    image: "/portafolio/pagate-desktop.jpg",
  },
  {
    slug: "layer07",
    title: "Layer07",
    tags: ["Sistema a medida", "Gestión"],
    image: "/portafolio/layer07-desktop.jpg",
  },
  {
    slug: "imppulsor-dmc",
    title: "Impulsor",
    tags: ["Plataforma de gestión", "Automatización"],
    image: "/portafolio/imppulsor-desktop.jpg",
  },
];

export const softwareMedidaFaqs: FaqItem[] = [
  {
    question: "¿Cuánto cuesta desarrollar un software a medida?",
    answer:
      "Depende del alcance, las funcionalidades, integraciones y complejidad. Primero evaluamos el requerimiento para proponer una solución y un presupuesto adecuados.",
  },
  {
    question: "¿Cuánto tiempo demora?",
    answer:
      "Se define según el tamaño del proyecto. Podemos organizar el desarrollo por etapas para validar funcionalidades y avanzar de manera controlada.",
  },
  {
    question: "¿Pueden mejorar o continuar un sistema existente?",
    answer:
      "Sí, podemos evaluar su arquitectura, código y estado actual para determinar si conviene optimizarlo, ampliarlo o desarrollar una nueva solución.",
  },
  {
    question: "¿Se puede integrar con las herramientas que ya utilizamos?",
    answer:
      "En muchos casos sí. Revisamos las APIs, posibilidades de integración y restricciones técnicas de cada plataforma.",
  },
  {
    question: "¿Podemos comenzar con una versión inicial y agregar funciones después?",
    answer:
      "Sí. Cuando el proyecto lo permite, podemos definir una primera versión con las funcionalidades prioritarias y planificar su evolución.",
  },
  {
    question: "¿Qué ocurre después del lanzamiento?",
    answer:
      "Podemos contemplar soporte, mantenimiento, monitoreo y nuevas funcionalidades según las necesidades del proyecto y el servicio contratado.",
  },
];

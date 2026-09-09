export const softwarePillarItems = [
  {
    title: "Sitios web y e-commerce",
    detail: "Corporativos, tiendas online, landing pages",
    icon: "globe",
  },
  {
    title: "Software a medida",
    detail: "Plataformas, sistemas internos, CRM",
    icon: "code",
  },
  {
    title: "Integraciones y automatización",
    detail: "APIs, pasarelas de pago, flujos inteligentes",
    icon: "cloud",
  },
  {
    title: "Infraestructura y performance",
    detail: "Cloud, seguridad, optimización, respaldo",
    icon: "server",
  },
  {
    title: "UX/UI y diseño digital",
    detail: "Interfaces que inspiran y convierten",
    icon: "monitor",
  },
] as const;

export const marketingPillarItems = [
  {
    title: "Publicidad digital",
    detail: "Meta Ads, Google Ads, TikTok Ads, LinkedIn",
    icon: "megaphone",
  },
  {
    title: "Estrategia y posicionamiento",
    detail: "Marca, audiencias, funnels de conversión",
    icon: "users",
  },
  {
    title: "Contenido y redes sociales",
    detail: "Estrategia, diseño, reels, producción audiovisual",
    icon: "pen",
  },
  {
    title: "Analítica y medición",
    detail: "GA4, GTM, Pixel, CAPI, dashboards",
    icon: "pie",
  },
  {
    title: "Automatización y fidelización",
    detail: "Email marketing, CRM, flujos inteligentes",
    icon: "cog",
  },
] as const;

export const softwareScope = softwarePillarItems.map((item) => item.title);

export const marketingScope = marketingPillarItems.map((item) => item.title);

export const softwareTech = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "GraphQL",
  "Shopify",
  "WordPress",
  "AWS",
  "Cloudflare",
];

export const marketingTech = [
  "GA4",
  "GTM / server-side",
  "Meta Ads",
  "Google Ads",
  "Looker Studio",
  "Hotjar / Clarity",
  "HubSpot",
  "Figma",
];

export const serviceCatalog = [
  {
    n: "01",
    title: "Desarrollo Web & E-commerce",
    description: "Sitios web que venden, comunican y generan resultados.",
    features: [
      "Sitios corporativos y landing pages",
      "Tiendas online (WooCommerce / Shopify)",
      "Portales y membresías",
      "Optimización de velocidad y SEO técnico",
      "Seguridad y mantención",
    ],
    icon: "monitor",
    iconBg: "#00b4d8",
    image: "/home/img-serv-01.jpg",
    href: "/servicios/desarrollo-web-ecommerce",
  },
  {
    n: "02",
    title: "Software & Plataformas a Medida",
    description: "Soluciones a medida para optimizar tu operación.",
    features: [
      "Sistemas internos y paneles admin",
      "CRMs y ERPs livianos",
      "Plataformas de concursos",
      "Intranets y portales privados",
      "Desarrollo de funcionalidades únicas",
    ],
    icon: "code",
    iconBg: "#1e3a8a",
    image: "/home/img-serv-02.jpg",
    href: "/servicios/software-plataformas-a-medida",
  },
  {
    n: "03",
    title: "Integraciones & Automatización",
    description: "Conectamos tus herramientas y automatizamos procesos.",
    features: [
      "APIs y pasarelas de pago",
      "Meta CAPI, WhatsApp, Brevo",
      "Conexión entre plataformas",
      "Workflows y automatizaciones",
      "IA aplicada a procesos",
    ],
    icon: "cog",
    iconBg: "#7c3aed",
    image: "/home/img-serv-03.jpg",
    href: "/servicios/integraciones-automatizacion",
  },
  {
    n: "04",
    title: "Cloud, Infraestructura y Performance",
    description: "Tu proyecto siempre online, seguro y escalable.",
    features: [
      "AWS, Google Cloud, Cloudflare",
      "Servidores y escalabilidad",
      "Backups y seguridad",
      "Monitoreo y optimización",
      "Soporte y mantención continua",
    ],
    icon: "cloud",
    iconBg: "#16a34a",
    image: "/home/img-serv-04.jpg",
    href: "/servicios/cloud-infraestructura-performance",
  },
  {
    n: "05",
    title: "UX/UI & Diseño",
    description: "Diseños que inspiran, conectan y convierten.",
    features: [
      "Diseño de interfaces y experiencia",
      "Wireframes y prototipos",
      "Identidad de marca",
      "Diseño de piezas digitales",
      "Diseño orientado a resultados",
    ],
    icon: "pen",
    iconBg: "#ec4899",
    image: "/home/img-serv-05.jpg",
    href: "#",
  },
  {
    n: "06",
    title: "Marketing Digital 360°",
    description: "Estrategias que atraen, convierten y hacen crecer.",
    features: [
      "Meta Ads, Google Ads, TikTok Ads",
      "Estrategia y planificación",
      "Campañas de performance",
      "Remarketing y funnels",
      "Captación de leads y ventas",
    ],
    icon: "chart",
    iconBg: "#0d9488",
    image: "/home/img-serv-06.jpg",
    href: "#",
  },
  {
    n: "07",
    title: "Analítica & Datos",
    description: "Decisiones basadas en datos reales, no suposiciones.",
    features: [
      "GA4, GTM, Pixel y CAPI",
      "Dashboards personalizados",
      "Medición de conversiones",
      "Análisis de comportamiento",
      "CRO y reportes automatizados",
    ],
    icon: "pie",
    iconBg: "#ea580c",
    image: "/home/img-serv-07.jpg",
    href: "#",
  },
  {
    n: "08",
    title: "Contenido & Growth",
    description: "Contenido que genera comunidad y resultados.",
    features: [
      "Estrategia de contenidos",
      "Producción audiovisual (foto y video)",
      "Gestión de redes sociales",
      "Email marketing y automatizaciones",
      "Fidelización y crecimiento",
    ],
    icon: "video",
    iconBg: "#dc2626",
    image: "/home/img-serv-08.jpg",
    href: "#",
  },
] as const;

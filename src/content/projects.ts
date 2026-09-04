export const projectCategories = ["software", "ecommerce", "marketing"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const categoryLabels: Record<ProjectCategory, string> = {
  software: "Software",
  ecommerce: "E-commerce",
  marketing: "Marketing digital",
};

export type Project = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  /** Label shown on featured cards (e.g. Inmobiliario). */
  sector?: string;
  year: number;
  liveUrl?: string;
  featured: boolean;
  /** Lower = earlier in featured grid. */
  featuredOrder?: number;
  cover: {
    src: string;
    alt: string;
  };
  gallery: { src: string; alt: string }[];
  stack: string[];
  services: string[];
  /** Pills on featured cards; falls back to stack. */
  tags?: string[];
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const projects: Project[] = [
  {
    slug: "allisone",
    client: "Allisone",
    title: "Storefront editorial de joyería",
    summary:
      "Tienda online de joyería con experiencia de compra premium, catálogo curado y checkout sincronizado.",
    category: "ecommerce",
    sector: "E-commerce",
    year: 2026,
    liveUrl: "https://allisone.cl",
    featured: true,
    featuredOrder: 3,
    cover: {
      src: "/portafolio/allisone-desktop.jpg",
      alt: "Vista de escritorio de Allisone Store",
    },
    gallery: [
      {
        src: "/portafolio/allisone-desktop.jpg",
        alt: "Allisone Store en escritorio",
      },
      {
        src: "/portafolio/allisone-mobile.jpg",
        alt: "Allisone Store en móvil",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "WooCommerce API", "Framer Motion"],
    services: ["E-commerce", "Storefront headless", "UX"],
    tags: ["WooCommerce", "Diseño UX/UI", "Meta Ads", "Email Marketing"],
    metrics: [
      { value: "+150%", label: "Ventas online" },
      { value: "+90%", label: "Conversión" },
      { value: "+60%", label: "Clientes recurrentes" },
    ],
    challenge:
      "La marca necesitaba una vitrina editorial, no un catálogo genérico: piezas atemporales con catálogo vivo desde WooCommerce.",
    solution:
      "Storefront Next.js App Router con colecciones, ficha de producto, carrito, checkout y sync con la API de WooCommerce. Contacto y avisos con Resend.",
  },
  {
    slug: "imppulsor-dmc",
    client: "Imppulsor",
    title: "Panel del Diagnóstico de Madurez Comercial",
    summary:
      "Aplicación privada en dmc.imppulsor.com para que empresas ingresen al DMC: evaluación comercial en 12 dimensiones.",
    category: "software",
    year: 2026,
    liveUrl: "https://dmc.imppulsor.com",
    featured: false,
    cover: {
      src: "/portafolio/imppulsor-desktop.jpg",
      alt: "Vista de escritorio del acceso Imppulsor DMC",
    },
    gallery: [
      {
        src: "/portafolio/imppulsor-desktop.jpg",
        alt: "Imppulsor DMC en escritorio",
      },
      {
        src: "/portafolio/imppulsor-mobile.jpg",
        alt: "Imppulsor DMC en móvil",
      },
    ],
    stack: ["PHP", "HTML", "CSS"],
    services: ["Software a medida", "Paneles internos", "Autenticación"],
    metrics: [
      { value: "12", label: "Dimensiones evaluadas" },
      { value: "100%", label: "Acceso autenticado" },
      { value: "-65%", label: "Tiempo de onboarding" },
      { value: "4.8×", label: "Más diagnósticos/mes" },
    ],
    challenge:
      "El DMC es un producto de consultoría con datos sensibles. No podía vivir en una planilla ni en un sitio público: hacía falta un acceso controlado para cada empresa.",
    solution:
      "Panel B2B con login por correo registrado, recuperación de clave y un entorno cerrado para aplicar el marco de 12 dimensiones de madurez comercial.",
  },
  {
    slug: "layer07",
    client: "Layer07",
    title: "Sitio de estudio de ingeniería",
    summary:
      "Web de marca en layer07.cl: capacidades, casos en producción y briefing técnico, con estética de terminal.",
    category: "software",
    year: 2026,
    liveUrl: "https://layer07.cl",
    featured: false,
    cover: {
      src: "/portafolio/layer07-desktop.jpg",
      alt: "Vista de escritorio de Layer07",
    },
    gallery: [
      {
        src: "/portafolio/layer07-desktop.jpg",
        alt: "Layer07 en escritorio",
      },
      {
        src: "/portafolio/layer07-mobile.jpg",
        alt: "Layer07 en móvil",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    services: ["Sitio web", "Identidad digital", "Performance"],
    metrics: [
      { value: "0.9s", label: "LCP promedio" },
      { value: "+2.4×", label: "Briefings recibidos" },
      { value: "100", label: "Lighthouse performance" },
      { value: "-55%", label: "Rebote móvil" },
    ],
    challenge:
      "Hacía falta un sitio de estudio que explicara ingeniería —sistemas a medida, headless commerce e integraciones— sin caer en una landing genérica de agencia.",
    solution:
      "Next.js App Router con TypeScript y Tailwind: home inmersivo, servicios, casos en producción y formulario de contacto con Resend y validación en tiempo real.",
  },
  {
    slug: "pagate",
    client: "Pagate",
    title: "SaaS para vender y entregar desde un link",
    summary:
      "Producto en producción para creadores en Chile: tienda en un link, cobro en CLP con Mercado Pago, agenda 1:1 y entrega automática.",
    category: "software",
    year: 2026,
    liveUrl: "https://pagate.cl",
    featured: true,
    featuredOrder: 4,
    cover: {
      src: "/portafolio/pagate-desktop.jpg",
      alt: "Vista de escritorio de Pagate",
    },
    gallery: [
      {
        src: "/portafolio/pagate-desktop.jpg",
        alt: "Pagate en escritorio",
      },
      {
        src: "/portafolio/pagate-mobile.jpg",
        alt: "Pagate en móvil",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Mercado Pago", "Google Calendar"],
    services: ["Software a medida", "Checkout", "Integraciones"],
    metrics: [
      { value: "<2 min", label: "Checkout completo" },
      { value: "+71%", label: "Pagos automatizados" },
      { value: "0", label: "Entregas manuales" },
      { value: "99.5%", label: "Uptime del checkout" },
    ],
    challenge:
      "Coaches, terapeutas y creadores cobraban por WhatsApp: precio, horario, comprobante y PDF se resolvían a mano en cada venta.",
    solution:
      "Construimos un SaaS con tienda en pagate.cl/usuario, checkout Mercado Pago, agenda con Google Calendar y Meet, y entrega de archivos o acceso sin operación manual.",
  },
  {
    slug: "san-mateo",
    client: "San Mateo Gestión Inmobiliaria",
    title: "Sitio inmobiliario para la V Región",
    summary:
      "Sitio web inmobiliario con catálogo de propiedades, búsqueda avanzada y generación de leads cualificados.",
    category: "software",
    sector: "Inmobiliario",
    year: 2026,
    liveUrl: "https://inmobiliariasanmateo.cl",
    featured: true,
    featuredOrder: 1,
    cover: {
      src: "/portafolio/sanmateo-desktop.jpg",
      alt: "Vista de escritorio de San Mateo Gestión Inmobiliaria",
    },
    gallery: [
      {
        src: "/portafolio/sanmateo-desktop.jpg",
        alt: "San Mateo en escritorio",
      },
      {
        src: "/portafolio/sanmateo-mobile.jpg",
        alt: "San Mateo en móvil",
      },
    ],
    stack: ["WordPress", "PHP", "LiteSpeed"],
    services: ["Sitio web", "Catálogo", "Captación de leads"],
    tags: ["WordPress", "Diseño UX/UI", "SEO", "Integraciones"],
    metrics: [
      { value: "+180%", label: "Consultas online" },
      { value: "+120%", label: "Visitas orgánicas" },
      { value: "+3x", label: "Propiedades vendidas" },
    ],
    challenge:
      "La inmobiliaria necesitaba un canal propio en Valparaíso: filtrar casa, depto o parcela, mostrar stock real y convertir visitas en consultas o publicaciones.",
    solution:
      "Sitio con buscador por tipo, operación y comuna, fichas con UF/CLP, simulador de crédito, blog y CTAs a WhatsApp, publicación de propiedad y contacto con asesores.",
  },
  {
    slug: "sorteo-seguro",
    client: "Sorteo Seguro",
    title: "Plataforma de concursos con DigiTicket",
    summary:
      "Plataforma de sorteos digitales con sistema de tickets, pagos integrados y gestión de usuarios.",
    category: "ecommerce",
    sector: "Plataforma digital",
    year: 2026,
    liveUrl: "https://sorteoseguro.cl",
    featured: true,
    featuredOrder: 2,
    cover: {
      src: "/portafolio/sorteo-desktop.jpg",
      alt: "Vista de escritorio de Sorteo Seguro",
    },
    gallery: [
      {
        src: "/portafolio/sorteo-desktop.jpg",
        alt: "Sorteo Seguro en escritorio",
      },
      {
        src: "/portafolio/sorteo-mobile.jpg",
        alt: "Sorteo Seguro en móvil",
      },
    ],
    stack: ["WordPress", "WooCommerce", "Mercado Pago", "TUU", "PHP", "LiteSpeed"],
    services: ["E-commerce", "Checkout", "UX"],
    tags: ["WooCommerce", "Integraciones", "Automatización", "Meta Ads"],
    metrics: [
      { value: "+250%", label: "Ventas online" },
      { value: "+70.000", label: "Usuarios registrados" },
      { value: "+4.8", label: "Rating" },
    ],
    challenge:
      "El negocio vive de la confianza y de un flujo de compra largo: bases notariales, packs, pasarelas y un ticket único. El front y el checkout no acompañaban ese estándar.",
    solution:
      "Mu-plugins a medida sobre WordPress/WooCommerce: home, fichas, carrito, checkout invitado, packs con Mercado Pago y TUU (Webpay), y emisión del DigiTicket tras el pago.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 3) {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
    .slice(0, limit);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[index - 1],
    next: projects[index + 1] ?? projects[0],
  };
}

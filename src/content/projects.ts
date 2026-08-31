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
  year: number;
  liveUrl?: string;
  featured: boolean;
  cover: {
    src: string;
    alt: string;
  };
  gallery: { src: string; alt: string }[];
  stack: string[];
  services: string[];
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
    slug: "pagate",
    client: "Pagate",
    title: "SaaS para vender y entregar desde un link",
    summary:
      "Producto en producción para creadores en Chile: tienda en un link, cobro en CLP con Mercado Pago, agenda 1:1 y entrega automática.",
    category: "software",
    year: 2026,
    liveUrl: "https://pagate.cl",
    featured: true,
    cover: {
      src: "/portafolio/pagate-cover.jpg",
      alt: "Landing de Pagate: un link para vender productos digitales y agendar sesiones",
    },
    gallery: [
      {
        src: "/portafolio/pagate-gallery.jpg",
        alt: "Flujos de Pagate para distintos oficios y pasos para lanzar la tienda",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Mercado Pago", "Google Calendar"],
    services: ["Software a medida", "Checkout", "Integraciones"],
    challenge:
      "Coaches, terapeutas y creadores cobraban por WhatsApp: precio, horario, comprobante y PDF se resolvían a mano en cada venta.",
    solution:
      "Construimos un SaaS con tienda en pagate.cl/usuario, checkout Mercado Pago, agenda con Google Calendar y Meet, y entrega de archivos o acceso sin operación manual.",
  },
  {
    slug: "sorteo-seguro",
    client: "Sorteo Seguro",
    title: "Plataforma de concursos con DigiTicket",
    summary:
      "Rediseño transaccional de sorteoseguro.cl: catálogo de concursos, packs, checkout y ticket digital numerado al instante.",
    category: "ecommerce",
    year: 2026,
    liveUrl: "https://sorteoseguro.cl",
    featured: true,
    cover: {
      src: "/portafolio/sorteo-cover.jpg",
      alt: "Home de Sorteo Seguro con concursos inmobiliarios y vehiculares",
    },
    gallery: [
      {
        src: "/portafolio/sorteo-gallery.jpg",
        alt: "Ficha de concurso inmobiliario con DigiTicket y llamado a participar",
      },
    ],
    stack: ["WordPress", "WooCommerce", "PHP", "Mercado Pago", "LiteSpeed"],
    services: ["E-commerce", "Checkout", "UX"],
    challenge:
      "El negocio vive de la confianza y de un flujo de compra largo: bases notariales, packs, pasarela y un ticket único. El front y el checkout no acompañaban ese estándar.",
    solution:
      "Mu-plugins a medida sobre WordPress/WooCommerce: home, fichas, carrito, checkout invitado, packs con Mercado Pago y emisión del DigiTicket tras el pago.",
  },
  {
    slug: "san-mateo",
    client: "San Mateo S.A.",
    title: "Sitio inmobiliario para la V Región",
    summary:
      "Portal de inmobiliariasanmateo.cl: búsqueda de propiedades, fichas en UF y pesos, simulador de crédito y captación de mandantes.",
    category: "software",
    year: 2026,
    liveUrl: "https://inmobiliariasanmateo.cl",
    featured: true,
    cover: {
      src: "/portafolio/sanmateo-cover.jpg",
      alt: "Home de San Mateo Gestión Inmobiliaria con buscador de propiedades",
    },
    gallery: [
      {
        src: "/portafolio/sanmateo-gallery.jpg",
        alt: "Listado de propiedades destacadas en venta con precios en UF y pesos",
      },
    ],
    stack: ["WordPress", "PHP", "LiteSpeed"],
    services: ["Sitio web", "Catálogo", "Captación de leads"],
    challenge:
      "La inmobiliaria necesitaba un canal propio en Valparaíso: filtrar casa, depto o parcela, mostrar stock real y convertir visitas en consultas o publicaciones.",
    solution:
      "Sitio con buscador por tipo, operación y comuna, fichas con UF/CLP, simulador de crédito, blog y CTAs a WhatsApp, publicación de propiedad y contacto con asesores.",
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
      src: "/portafolio/imppulsor-cover.jpg",
      alt: "Acceso autenticado al Diagnóstico de Madurez Comercial de Imppulsor",
    },
    gallery: [],
    stack: ["PHP", "HTML", "CSS"],
    services: ["Software a medida", "Paneles internos", "Autenticación"],
    challenge:
      "El DMC es un producto de consultoría con datos sensibles. No podía vivir en una planilla ni en un sitio público: hacía falta un acceso controlado para cada empresa.",
    solution:
      "Panel B2B con login por correo registrado, recuperación de clave y un entorno cerrado para aplicar el marco de 12 dimensiones de madurez comercial.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 3) {
  return projects.filter((project) => project.featured).slice(0, limit);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[index - 1],
    next: projects[index + 1] ?? projects[0],
  };
}

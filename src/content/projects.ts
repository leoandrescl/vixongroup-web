export const projectCategories = ["software", "ecommerce", "marketing"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const categoryLabels: Record<ProjectCategory, string> = {
  software: "Software",
  ecommerce: "E-commerce",
  marketing: "Marketing digital",
};

export type ProjectMetric = {
  value: string;
  label: string;
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
  metrics: ProjectMetric[];
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
    slug: "norte-market",
    client: "Norte Market",
    title: "E-commerce de alta conversión",
    summary:
      "Tienda headless con checkout en menos de tres pasos, catálogo sincronizado y LCP bajo 2.2 s en 4G.",
    category: "ecommerce",
    year: 2025,
    liveUrl: "https://example.com",
    featured: true,
    cover: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
      alt: "Checkout y vitrina de e-commerce en laptop",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        alt: "Dashboard de ventas en escritorio",
      },
      {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
        alt: "Vista móvil de la tienda",
      },
    ],
    stack: ["Next.js", "Shopify Hydrogen", "Sanity", "Cloudflare"],
    services: ["E-commerce", "Performance", "CRO"],
    metrics: [
      { value: "+38%", label: "Aumento de ventas" },
      { value: "2.1s", label: "Carga de página" },
    ],
    challenge:
      "La tienda en un monolito lento perdía carritos en móvil y no tenía atribución fiable entre ads y catálogo.",
    solution:
      "Migración a storefront headless, checkout reducido, edge caching y dataLayer unificado para Meta y Google Ads.",
    testimonial: {
      quote:
        "Por fin vemos el funnel completo. El sitio se siente premium y las campañas dejan de ser un salto de fe.",
      author: "Mariana Rivas",
      role: "Directora comercial, Norte Market",
    },
  },
  {
    slug: "atlas-ops",
    client: "Atlas Ops",
    title: "Plataforma operativa B2B",
    summary:
      "Software a medida para orquestar pedidos, inventario y SLAs entre sucursales en tiempo real.",
    category: "software",
    year: 2025,
    featured: true,
    cover: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      alt: "Dashboard analítico de plataforma B2B",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
        alt: "Equipo trabajando sobre la plataforma",
      },
      {
        src: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=900&q=80",
        alt: "Interfaz móvil de operaciones",
      },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "GraphQL"],
    services: ["Software a medida", "APIs", "Infraestructura"],
    metrics: [
      { value: "+50K", label: "Usuarios activos" },
      { value: "-41%", label: "Tiempo operativo" },
    ],
    challenge:
      "Operaban con hojas de cálculo y tres sistemas que no se hablaban. Los SLAs se rompían sin visibilidad.",
    solution:
      "Backoffice unificado, APIs versionadas y paneles de SLA con alertas. Despliegue por regiones con observabilidad.",
    testimonial: {
      quote:
        "Pasamos de apagar incendios a dirigir la operación. El tablero es la fuente de verdad del equipo.",
      author: "Diego Solano",
      role: "COO, Atlas Ops",
    },
  },
  {
    slug: "lumen-growth",
    client: "Lumen Studio",
    title: "Motor de growth y atribución",
    summary:
      "Estrategia de paid + SEO técnico y un data stack que conecta creatividades con ingresos reales.",
    category: "marketing",
    year: 2024,
    featured: true,
    cover: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      alt: "Analítica de campañas de marketing",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1600&q=80",
        alt: "Reporte de crecimiento en pantalla",
      },
      {
        src: "https://images.unsplash.com/photo-1432888498266-38ffec3bdb2d?auto=format&fit=crop&w=900&q=80",
        alt: "Creatividades y métricas en móvil",
      },
    ],
    stack: ["GA4", "Meta Ads", "Looker Studio", "Next.js"],
    services: ["Performance ads", "SEO", "Analítica"],
    metrics: [
      { value: "4.7x", label: "ROAS blended" },
      { value: "+62%", label: "Leads calificados" },
    ],
    challenge:
      "Inversión alta en ads sin lectura de calidad de lead. El sitio corporativo no convertía el tráfico pagado.",
    solution:
      "Reconstrucción de landing, eventos server-side, pruebas CRO y un calendario de contenidos alineado a keywords de intención.",
    testimonial: {
      quote:
        "Dejamos de discutir opiniones. Cada peso tiene una hipótesis y un resultado. Eso cambió al comité.",
      author: "Camila Ortega",
      role: "Head of Growth, Lumen Studio",
    },
  },
  {
    slug: "orbe-retail",
    client: "Orbe Retail",
    title: "Catálogo omnicanal",
    summary:
      "Integración de POS, inventario y web con búsqueda facetada y disponibilidad en sucursal.",
    category: "ecommerce",
    year: 2024,
    featured: false,
    cover: {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      alt: "Retail y experiencia de compra",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
        alt: "Experiencia de catálogo en escritorio",
      },
    ],
    stack: ["Next.js", "Shopify", "Algolia", "AWS"],
    services: ["E-commerce", "Integraciones", "UX"],
    metrics: [
      { value: "+27%", label: "Ticket promedio" },
      { value: "99.9%", label: "Uptime temporada" },
    ],
    challenge:
      "Stock desfasado entre tienda física y web. Clientes compraban online lo que ya no existía en bodega.",
    solution:
      "Sincronización de inventario casi en tiempo real, retiro en tienda y búsqueda que prioriza disponibilidad local.",
  },
  {
    slug: "pulse-health",
    client: "Pulse Health",
    title: "Portal de pacientes",
    summary:
      "Aplicación segura para agendar, ver resultados y reducir no-shows con recordatorios inteligentes.",
    category: "software",
    year: 2023,
    featured: false,
    cover: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
      alt: "Interfaz de producto de salud digital",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
        alt: "Flujo de agendamiento en desktop",
      },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Twilio"],
    services: ["Software a medida", "UX", "Integraciones"],
    metrics: [
      { value: "-33%", label: "No-shows" },
      { value: "LCP < 1.4s", label: "Portal autenticado" },
    ],
    challenge:
      "El call center saturado y un portal legado que no cumplía expectativas móviles de los pacientes.",
    solution:
      "Portal con auth moderna, flujos de cita en tres pantallas y mensajería transaccional con consentimiento explícito.",
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

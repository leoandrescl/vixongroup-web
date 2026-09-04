export const blogCategories = [
  "meta-ads",
  "google-ads",
  "ia",
  "marketing",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogCategoryLabels: Record<BlogCategory, string> = {
  "meta-ads": "Meta Ads",
  "google-ads": "Google Ads",
  ia: "Inteligencia Artificial",
  marketing: "Marketing Digital",
};

export const blogCategoryBadge: Record<
  BlogCategory,
  { label: string; className: string }
> = {
  "meta-ads": {
    label: "Meta Ads",
    className: "bg-[#1877F2] text-white",
  },
  "google-ads": {
    label: "Google Ads",
    className: "bg-[#34A853] text-white",
  },
  ia: {
    label: "Inteligencia Artificial",
    className: "bg-[#7C3AED] text-white",
  },
  marketing: {
    label: "Marketing Digital",
    className: "bg-brand text-brand-foreground",
  },
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readingMinutes: number;
  cover: {
    src: string;
    alt: string;
  };
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "meta-ads-nueva-era-ia",
    title: "Mark Zuckerberg presenta la nueva era de la IA en Meta Ads",
    excerpt:
      "Meta anuncia herramientas de IA generativa que automatizan creatividades, segmentación y optimización de campañas en tiempo real.",
    category: "meta-ads",
    date: "2026-08-12",
    readingMinutes: 5,
    cover: {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
      alt: "Ejecutivo de tecnología en oficina moderna",
    },
    featured: true,
  },
  {
    slug: "google-ads-ia-generativa",
    title: "Google Ads integra IA generativa en todas sus campañas",
    excerpt:
      "Performance Max y Search evolucionan con modelos generativos que crean anuncios, assets y pujas más precisas sin perder control estratégico.",
    category: "google-ads",
    date: "2026-08-08",
    readingMinutes: 4,
    cover: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      alt: "Equipo trabajando con dashboards de marketing digital",
    },
    featured: true,
  },
  {
    slug: "ia-transforma-marketing-digital",
    title: "Cómo la inteligencia artificial está transformando el marketing digital",
    excerpt:
      "De la personalización al forecasting: las marcas que adoptan IA con criterio miden mejor, iteran más rápido y reducen desperdicio en medios.",
    category: "ia",
    date: "2026-08-01",
    readingMinutes: 6,
    cover: {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      alt: "Visual abstracto de inteligencia artificial",
    },
    featured: true,
  },
  {
    slug: "cro-ecommerce-2026",
    title: "CRO para e-commerce en 2026: qué sí mueve la conversión",
    excerpt:
      "Velocidad, claridad de oferta y pruebas cortas. Un checklist práctico para tiendas que necesitan resultados medibles este trimestre.",
    category: "marketing",
    date: "2026-07-22",
    readingMinutes: 5,
    cover: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      alt: "Experiencia de compra online en dispositivo móvil",
    },
  },
  {
    slug: "meta-advantage-plus",
    title: "Advantage+ en Meta: cuándo automatizar y cuándo no",
    excerpt:
      "La automatización ayuda, pero sin tracking limpio y creatividades con hipótesis claras solo acelera el gasto. Guía para equipos de performance.",
    category: "meta-ads",
    date: "2026-07-14",
    readingMinutes: 4,
    cover: {
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
      alt: "Pantalla con métricas de redes sociales y anuncios",
    },
  },
  {
    slug: "search-intent-google-ads",
    title: "Search Intent: alinear keywords con la etapa del comprador",
    excerpt:
      "Estructura de campañas por intención, negativas y landing pages que convierten. Menos solapamiento, más calidad de lead.",
    category: "google-ads",
    date: "2026-07-05",
    readingMinutes: 5,
    cover: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      alt: "Análisis de datos y campañas de búsqueda",
    },
  },
];

const monthShort = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
] as const;

export function formatBlogDate(isoDate: string) {
  const d = new Date(`${isoDate}T12:00:00`);
  const day = d.getDate();
  const month = monthShort[d.getMonth()] ?? "";
  const year = d.getFullYear();
  return `${day} ${month}, ${year}`;
}

export function getFeaturedBlogPosts(limit = 3) {
  return blogPosts
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: BlogCategory | "all") {
  if (category === "all") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

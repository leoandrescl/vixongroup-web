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

export type BlogFeatureIcon =
  | "sparkles"
  | "users"
  | "chart"
  | "settings"
  | "target"
  | "zap";

export type BlogFeature = {
  icon: BlogFeatureIcon;
  title: string;
  description: string;
};

export type BlogQuote = {
  text: string;
  attribution: string;
  role?: string;
};

export type BlogAuthor = {
  name: string;
  role: string;
  bio: string;
  photo: {
    src: string;
    alt: string;
  };
  social: {
    linkedin?: string;
    instagram?: string;
    x?: string;
    email?: string;
  };
};

export type BlogPostBody = {
  paragraphs?: string[];
  secondaryImage?: {
    src: string;
    alt: string;
  };
  toolChips?: {
    icon: BlogFeatureIcon;
    label: string;
  }[];
  sections: {
    heading: string;
    paragraphs?: string[];
    features?: BlogFeature[];
  }[];
  quote?: BlogQuote;
  closing?: string[];
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
  author: BlogAuthor;
  body: BlogPostBody;
};

export const defaultBlogAuthor: BlogAuthor = {
  name: "Sebastián Vilches",
  role: "Director de Estrategia Digital",
  bio: "Especialista en marketing digital y performance con más de 10 años ayudando a marcas a escalar con Meta Ads, Google Ads e inteligencia artificial aplicada.",
  photo: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    alt: "Sebastián Vilches, Director de Estrategia Digital",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/vixon-group",
    instagram: "https://www.instagram.com/vixongroup",
    x: "https://x.com/",
    email: "hola@vixongroup.com",
  },
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
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1600&q=80",
      alt: "Ejecutivo de tecnología presentando en escenario",
    },
    featured: true,
    author: defaultBlogAuthor,
    body: {
      secondaryImage: {
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
        alt: "Pantalla con herramientas de IA para publicidad digital",
      },
      toolChips: [
        { icon: "sparkles", label: "Generate" },
        { icon: "users", label: "Audience" },
        { icon: "chart", label: "Optimise" },
      ],
      paragraphs: [
        "Durante el último evento de Meta, Mark Zuckerberg presentó un conjunto de capacidades de inteligencia artificial pensadas para que cualquier negocio —desde una pyme hasta una marca global— pueda crear, segmentar y optimizar anuncios con menos fricción y más precisión.",
      ],
      sections: [
        {
          heading: "¿Qué novedades se anunciaron?",
          features: [
            {
              icon: "sparkles",
              title: "Creación de anuncios con IA",
              description:
                "Generación automática de textos, imágenes y variantes creativas a partir de un brief corto, manteniendo coherencia de marca.",
            },
            {
              icon: "users",
              title: "Segmentación más inteligente",
              description:
                "Modelos que identifican audiencias con mayor probabilidad de conversión sin depender solo de intereses estáticos.",
            },
            {
              icon: "chart",
              title: "Optimización en tiempo real",
              description:
                "Ajustes automáticos de puja, presupuesto y creatividades según el rendimiento minuto a minuto.",
            },
            {
              icon: "settings",
              title: "Nuevas herramientas de medición",
              description:
                "Mejor atribución y señales de conversión para decidir con datos, no con intuición.",
            },
          ],
        },
        {
          heading: "¿Qué significa esto para tu negocio?",
          paragraphs: [
            "La oportunidad no es “activar IA por activarla”, sino usarla para acelerar experimentos con criterio: briefs claros, tracking limpio y hipótesis medibles. Quienes combinen automatización con dirección estratégica van a sacar más partido del mismo presupuesto.",
            "En Vixon Group ya estamos integrando estas capacidades en auditorías y planes de medios para que la adopción sea útil, no solo novedosa.",
          ],
        },
      ],
      quote: {
        text: "La IA nos permite hacer que la publicidad sea más personalizada, más relevante y más efectiva para todas las empresas del mundo.",
        attribution: "Mark Zuckerberg",
        role: "CEO de Meta",
      },
    },
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
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
      alt: "Equipo trabajando con dashboards de marketing digital",
    },
    featured: true,
    author: defaultBlogAuthor,
    body: {
      secondaryImage: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
        alt: "Análisis de campañas y métricas en pantalla",
      },
      paragraphs: [
        "Google está empujando la IA generativa al núcleo de Search, Performance Max y Demand Gen. El mensaje es claro: más assets, más señales y más automatización —con control humano donde importa.",
      ],
      sections: [
        {
          heading: "Qué cambia en la práctica",
          features: [
            {
              icon: "sparkles",
              title: "Assets generativos",
              description:
                "Textos e imágenes sugeridos desde el producto y la landing, listos para revisar y publicar.",
            },
            {
              icon: "target",
              title: "Mejor matching de intención",
              description:
                "Los modelos conectan consultas y creatividades con más matices de etapa del comprador.",
            },
            {
              icon: "chart",
              title: "Pujas con contexto",
              description:
                "Optimización que considera más señales de conversión y valor, no solo clics.",
            },
            {
              icon: "settings",
              title: "Controles de marca",
              description:
                "Límites, exclusiones y preferencias para que la automatización no diluya tu posicionamiento.",
            },
          ],
        },
        {
          heading: "Cómo prepararte",
          paragraphs: [
            "Prioriza feeds limpios, creatividades con hipótesis y conversiones bien definidas. La IA amplifica lo que ya tienes: si la base es débil, solo acelera el gasto.",
          ],
        },
      ],
      quote: {
        text: "La automatización gana cuando la estrategia y la medición están claras desde el día uno.",
        attribution: "Equipo Vixon Group",
        role: "Growth & Performance",
      },
    },
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
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
      alt: "Visual abstracto de inteligencia artificial",
    },
    featured: true,
    author: defaultBlogAuthor,
    body: {
      secondaryImage: {
        src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
        alt: "Concepto visual de inteligencia artificial aplicada",
      },
      paragraphs: [
        "La IA ya no es un experimento aislado: está en creatividades, audiencias, CRM y reporting. El diferencial no es usarla, sino usarla con hipótesis y gobernanza.",
      ],
      sections: [
        {
          heading: "Dónde aporta más valor",
          features: [
            {
              icon: "zap",
              title: "Velocidad de iteración",
              description:
                "Más variantes, más tests y ciclos de aprendizaje más cortos sin multiplicar el equipo.",
            },
            {
              icon: "users",
              title: "Personalización a escala",
              description:
                "Mensajes y ofertas adaptados al contexto sin perder coherencia de marca.",
            },
            {
              icon: "chart",
              title: "Forecasting y presupuesto",
              description:
                "Mejor estimación de demanda y asignación de inversión por canal o producto.",
            },
            {
              icon: "settings",
              title: "Operación más limpia",
              description:
                "Menos tareas repetitivas y más tiempo en estrategia, creativo y análisis.",
            },
          ],
        },
        {
          heading: "El riesgo a evitar",
          paragraphs: [
            "Sin datos confiables y sin criterios de marca, la IA solo produce ruido más rápido. Empieza por medición, brief y prioridades —después automatiza.",
          ],
        },
      ],
      quote: {
        text: "La IA no reemplaza el criterio estratégico: lo amplifica cuando el briefing y la medición están en orden.",
        attribution: "Sebastián Vilches",
        role: "Director de Estrategia Digital",
      },
    },
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
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
      alt: "Experiencia de compra online en dispositivo móvil",
    },
    author: defaultBlogAuthor,
    body: {
      paragraphs: [
        "En 2026 el CRO sigue siendo menos “rediseñar todo” y más eliminar fricción: velocidad, claridad de oferta y pruebas con alcance suficiente.",
      ],
      sections: [
        {
          heading: "Prioridades que sí mueven la aguja",
          features: [
            {
              icon: "zap",
              title: "Velocidad percibida",
              description:
                "Core Web Vitals y checkout rápido: cada segundo cuenta en móvil.",
            },
            {
              icon: "target",
              title: "Oferta cristalina",
              description:
                "Precio, envío y beneficio principal visibles sin scroll infinito.",
            },
            {
              icon: "chart",
              title: "Tests cortos",
              description:
                "Hipótesis semanales con métricas de negocio, no solo CTR.",
            },
            {
              icon: "settings",
              title: "Tracking fiable",
              description:
                "Sin eventos limpios, no hay CRO: solo opiniones.",
            },
          ],
        },
        {
          heading: "Cómo arrancar este mes",
          paragraphs: [
            "Elige un embudo crítico (ficha o checkout), define una hipótesis y mide conversión y AOV. Itera con evidencia, no con gustos.",
          ],
        },
      ],
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
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
      alt: "Pantalla con métricas de redes sociales y anuncios",
    },
    author: defaultBlogAuthor,
    body: {
      paragraphs: [
        "Advantage+ puede escalar resultados… o el gasto. La diferencia está en cuándo cedes control y qué señales le das al algoritmo.",
      ],
      sections: [
        {
          heading: "Cuándo tiene sentido",
          features: [
            {
              icon: "chart",
              title: "Volumen y señales",
              description:
                "Suficientes conversiones semanales para que el modelo aprenda.",
            },
            {
              icon: "sparkles",
              title: "Creatividades fuertes",
              description:
                "Varias hipótesis visuales y de copy listas para rotar.",
            },
            {
              icon: "settings",
              title: "Tracking limpio",
              description:
                "Pixel, CAPI y eventos de valor bien configurados.",
            },
            {
              icon: "target",
              title: "Oferta clara",
              description:
                "Landing y propuesta alineadas con el anuncio.",
            },
          ],
        },
        {
          heading: "Cuándo no forzar",
          paragraphs: [
            "Si el catálogo es confuso, el tracking falla o el presupuesto es demasiado bajo para aprender, Advantage+ solo acelera el ruido. Arregla la base primero.",
          ],
        },
      ],
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
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      alt: "Análisis de datos y campañas de búsqueda",
    },
    author: defaultBlogAuthor,
    body: {
      paragraphs: [
        "Search Intent bien mapeado reduce solapamiento, mejora Quality Score y sube la calidad del lead. Es estructura, no solo más keywords.",
      ],
      sections: [
        {
          heading: "Cómo estructurarlo",
          features: [
            {
              icon: "target",
              title: "Por etapa",
              description:
                "Informacional, consideración y conversión en campañas separadas.",
            },
            {
              icon: "settings",
              title: "Negativas activas",
              description:
                "Listas vivas para cortar tráfico irrelevante semana a semana.",
            },
            {
              icon: "sparkles",
              title: "Landing alineada",
              description:
                "Cada intención apunta a una página que responde esa pregunta.",
            },
            {
              icon: "chart",
              title: "Métricas por etapa",
              description:
                "No midas todo igual: awareness y purchase no comparten KPI.",
            },
          ],
        },
        {
          heading: "Resultado esperado",
          paragraphs: [
            "Menos canibalización entre campañas, CPA más estable y conversaciones de ventas con mejor contexto.",
          ],
        },
      ],
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

const monthLong = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

export function formatBlogDate(isoDate: string) {
  const d = new Date(`${isoDate}T12:00:00`);
  const day = d.getDate();
  const month = monthShort[d.getMonth()] ?? "";
  const year = d.getFullYear();
  return `${day} ${month}, ${year}`;
}

export function formatBlogDateLong(isoDate: string) {
  const d = new Date(`${isoDate}T12:00:00`);
  const day = d.getDate();
  const month = monthLong[d.getMonth()] ?? "";
  const year = d.getFullYear();
  return `${day} de ${month}, ${year}`;
}

export function getFeaturedBlogPosts(limit = 3) {
  return blogPosts.filter((post) => post.featured).slice(0, limit);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: BlogCategory | "all") {
  if (category === "all") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];

  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function getRecommendedBlogPosts(slug: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}

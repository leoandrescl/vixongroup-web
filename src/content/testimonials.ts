export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  projectSlug?: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    company: "San Mateo",
    quote:
      "Vixon transformó nuestra visión en una plataforma sólida y escalable.",
    author: "Sebastián Valenzuela",
    role: "Gerente General",
    rating: 5,
    projectSlug: "san-mateo",
    initials: "SV",
  },
  {
    company: "Sorteo Seguro",
    quote:
      "El rediseño del checkout y DigiTicket nos dio un flujo claro, confiable y listo para vender.",
    author: "Equipo Sorteo Seguro",
    role: "Operaciones",
    rating: 5,
    projectSlug: "sorteo-seguro",
    initials: "SS",
  },
  {
    company: "Allisone",
    quote:
      "La tienda refleja la marca: editorial, rápida y conectada a WooCommerce sin fricción.",
    author: "Equipo Allisone",
    role: "Dirección creativa",
    rating: 5,
    projectSlug: "allisone",
    initials: "AL",
  },
  {
    company: "Imppulsor",
    quote:
      "El panel del DMC nos permitió evaluar madurez comercial con una herramienta seria y usable.",
    author: "Equipo Imppulsor",
    role: "Producto",
    rating: 5,
    projectSlug: "imppulsor-dmc",
    initials: "IM",
  },
  {
    company: "Pagate",
    quote:
      "Pasamos de cobrar por WhatsApp a un SaaS con agenda, pagos y entrega automática.",
    author: "Equipo Pagate",
    role: "Fundadores",
    rating: 5,
    projectSlug: "pagate",
    initials: "PG",
  },
];

export const trustedBrands = [
  { name: "San Mateo", projectSlug: "san-mateo" },
  { name: "Sorteo Seguro", projectSlug: "sorteo-seguro" },
  { name: "Gana Seguro", projectSlug: "gana-seguro" },
  { name: "Allisone", projectSlug: "allisone" },
  { name: "Imppulsor", projectSlug: "imppulsor-dmc" },
  { name: "Pagate", projectSlug: "pagate" },
  { name: "Studio Vixon", projectSlug: "studio-vixon" },
] as const;

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

export const siteConfig = {
  name: "Vixon Group",
  legalName: "Vixon Group",
  tagline: "Tecnología que funciona. Marketing que la hace crecer.",
  description:
    "Agencia tecnológica integral: ingeniería, e-commerce y marketing digital. Productos que rinden y estrategias que los hacen crecer.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es",
  email: "hola@vixongroup.com",
  phone: "+58 412 000 0000",
  phoneDisplay: "+58 412 000 0000",
  address: "Santiago, Chile",
  hours: "Lun–Vie, 9:00–18:00 (GMT-3)",
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "584120000000",
    message:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
      "Hola Vixon Group, quiero hablar de un proyecto.",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/vixon-group",
    instagram: "https://www.instagram.com/vixongroup",
    facebook: "https://www.facebook.com/vixongroup",
    youtube: "https://www.youtube.com/@vixongroup",
  },
} as const;

export type NavItem = {
  href: string;
  label: string;
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const footerNav = {
  servicios: [
    { href: "/servicios#software", label: "Software y e-commerce" },
    { href: "/servicios#marketing", label: "Marketing digital" },
    { href: "/servicios#metodologia", label: "Metodología" },
    { href: "/portafolio", label: "Casos de éxito" },
  ],
  empresa: [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/servicios#metodologia", label: "Metodología" },
    { href: "/portafolio", label: "Proyectos" },
    { href: "/contacto", label: "Contacto" },
  ],
  legal: [
    { href: "/privacidad", label: "Política de privacidad" },
    { href: "/terminos", label: "Términos y condiciones" },
  ],
} as const;

export const homeStats = [
  { value: "+120", label: "Proyectos" },
  { value: "+80", label: "Clientes satisfechos" },
  { value: "10+", label: "Años de experiencia" },
  { value: "100%", label: "Comprometidos" },
] as const;

export const whyUsPillars = [
  {
    title: "Ingeniería con criterio comercial",
    body: "Arquitectura, rendimiento y entregables medibles. El código existe para mover el negocio, no para lucirse.",
  },
  {
    title: "Growth conectado al producto",
    body: "Ads, SEO y contenido sobre una base técnica sólida: tracking limpio, CRO y ciclos de iteración cortos.",
  },
  {
    title: "Velocidad y calidad de 2026",
    body: "Core Web Vitals, accesibilidad y stack moderno (Next.js, cloud, headless) como estándar, no como extra.",
  },
  {
    title: "Un equipo, un interlocutor",
    body: "Diseño, desarrollo y marketing en la misma mesa. Menos fricción entre agencias, más accountability.",
  },
] as const;

export const methodologySteps = [
  {
    n: "01",
    title: "Entendemos",
    body: "Diagnóstico de negocio, stack y fricción real del usuario.",
  },
  {
    n: "02",
    title: "Diseñamos",
    body: "Arquitectura, UX y plan de medición antes de escribir código.",
  },
  {
    n: "03",
    title: "Construimos",
    body: "Sprints con entregables visibles y calidad de producción.",
  },
  {
    n: "04",
    title: "Lanzamos",
    body: "Go-live controlado, observabilidad y plan de contingencia.",
  },
  {
    n: "05",
    title: "Medimos",
    body: "KPIs de producto, adquisición y conversión en un mismo tablero.",
  },
  {
    n: "06",
    title: "Optimizamos",
    body: "Iteramos sobre evidencia: LCP, CRO y unit economics.",
  },
  {
    n: "07",
    title: "Escalamos",
    body: "Infra, contenido y media cuando el sistema ya convierte.",
  },
] as const;

export const serviceInterestOptions = [
  { value: "software", label: "Software a medida" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "marketing", label: "Marketing digital" },
  { value: "integral", label: "Proyecto integral" },
  { value: "otro", label: "Otro / no lo tengo claro" },
] as const;

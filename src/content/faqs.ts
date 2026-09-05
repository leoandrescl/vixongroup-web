export type FaqItem = {
  question: string;
  answer: string;
};

export const servicesFaqs: FaqItem[] = [
  {
    question: "¿Qué tipo de proyectos desarrollan?",
    answer:
      "Sitios y productos web, e-commerce, software a medida y plataformas digitales. También proyectos integrales que combinan producto con marketing: ads, SEO, analítica y CRO sobre la misma base técnica.",
  },
  {
    question: "¿Trabajan solo con empresas grandes?",
    answer:
      "No. Trabajamos con startups, PYMEs y empresas en crecimiento. El criterio es el encaje: un objetivo claro, disposición a iterar y un alcance que podamos ejecutar con calidad.",
  },
  {
    question: "¿Cuánto tiempo toma un proyecto?",
    answer:
      "Un sitio o tienda de alcance medio suele estar en 6–10 semanas. Software a medida y plataformas, 12–20 semanas según integraciones. En la primera reunión acotamos un rango con supuestos explícitos.",
  },
  {
    question: "¿También se encargan del marketing?",
    answer:
      "Sí. Tenemos un pilar de marketing digital (ads, SEO, contenido y analítica) que puede ir solo o acoplado al desarrollo. Preferimos medir pipeline y unidad económica, no solo tráfico.",
  },
  {
    question: "¿Qué pasa después del lanzamiento?",
    answer:
      "Incluimos una ventana de soporte post-lanzamiento. Luego puedes continuar con retainer de evolución y growth, o hacer handoff a tu equipo interno con documentación y repositorio propios.",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: "¿En cuánto tiempo responden?",
    answer:
      "En horario hábil, en menos de un día laboral. Si el mensaje llega por WhatsApp, suele ser aún más rápido para una primera calificación.",
  },
  {
    question: "¿La cotización tiene costo?",
    answer:
      "La reunión de descubrimiento y una propuesta de alto nivel no tienen costo. Un discovery profundo con auditoría técnica sí se cotiza cuando el alcance lo exige.",
  },
  {
    question: "¿Cómo es la primera reunión?",
    answer:
      "30–40 minutos: contexto, objetivos, restricciones y siguiente paso. No es un pitch de 20 slides. Salimos con un plan de qué necesitamos para cotizar en firme.",
  },
  {
    question: "¿Trabajan con empresas fuera de Chile?",
    answer:
      "Sí. Operamos en remoto con clientes en Latam, España y US. Facturación y horarios se acuerdan en la propuesta.",
  },
];

export const faqHighlights = [
  {
    title: "Enfoque en resultados",
    body: "Priorizamos métricas de negocio, no entregables decorativos.",
    icon: "trophy" as const,
  },
  {
    title: "Equipo multidisciplinario",
    body: "Diseño, ingeniería y growth en la misma mesa.",
    icon: "team" as const,
  },
  {
    title: "Metodología clara",
    body: "Sprints cortos, demos y visibilidad del backlog.",
    icon: "method" as const,
  },
  {
    title: "Acompañamiento continuo",
    body: "Soporte post-lanzamiento y evolución del producto.",
    icon: "support" as const,
  },
] as const;

export const faqContactPoints = [
  {
    title: "Reunión online o presencial",
    body: "Elige el formato que te acomode",
    icon: "calendar" as const,
  },
  {
    title: "Propuesta personalizada",
    body: "Alcance, plazos y supuestos explícitos",
    icon: "proposal" as const,
  },
  {
    title: "Sin compromiso",
    body: "La primera conversación es gratuita",
    icon: "check" as const,
  },
] as const;

export const trustedBrands = [
  { name: "San Mateo", short: "San Mateo" },
  { name: "Sorteo Seguro", short: "Sorteo Seguro" },
  { name: "Gana Seguro", short: "Gana Seguro" },
  { name: "Allisone", short: "Allisone" },
  { name: "Imppulsor", short: "Imppulsor" },
  { name: "Pagate", short: "Pagate" },
  { name: "Studio Vixon", short: "Studio Vixon" },
] as const;

export const contactHero = {
  eyebrow: "Hagamos realidad tu proyecto",
  title: "Conversemos sobre tu",
  accent: "próximo paso.",
  description:
    "Cuéntanos qué quieres desarrollar, mejorar o hacer crecer. Te ayudamos a encontrar la mejor solución, sin compromiso.",
  image: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    alt: "Laptop abierta sobre un escritorio en una oficina moderna",
  },
} as const;

export const contactBenefits = [
  {
    icon: "message" as const,
    title: "Asesoría personalizada",
    body: "Analizamos tu idea y te proponemos el mejor camino.",
  },
  {
    icon: "file" as const,
    title: "Propuesta a medida",
    body: "Recibes una estrategia clara y enfocada en resultados.",
  },
  {
    icon: "users" as const,
    title: "Equipo experto",
    body: "Te acompaña un equipo multidisciplinario.",
  },
  {
    icon: "zap" as const,
    title: "Sin compromiso",
    body: "La primera conversación es 100% gratuita.",
  },
] as const;

export const contactTrust = [
  {
    icon: "shield" as const,
    title: "Confidencialidad",
    lines: ["Tu información está segura", "con nosotros."],
  },
  {
    icon: "clock" as const,
    title: "Respuesta rápida",
    lines: ["Te contactaremos en menos", "de 24 horas."],
  },
  {
    icon: "chart" as const,
    title: "Enfoque en resultados",
    lines: ["Hablamos de negocio,", "no de promesas."],
  },
  {
    icon: "users" as const,
    title: "Un equipo real",
    lines: ["Personas expertas que te acompañan", "de principio a fin."],
  },
] as const;

export const contactFormCopy = {
  eyebrow: "Cuéntanos tu proyecto",
  title: "Solicita una reunión",
  badge: "Primera conversación gratuita y sin compromiso.",
  consent:
    "Acepto ser contactado por el equipo de ViXon. Tus datos están seguros con nosotros.",
  submit: "Enviar mensaje",
} as const;

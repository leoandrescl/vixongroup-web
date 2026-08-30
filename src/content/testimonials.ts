export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  projectSlug?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Por fin vemos el funnel completo. El sitio se siente premium y las campañas dejan de ser un salto de fe.",
    author: "Mariana Rivas",
    role: "Directora comercial, Norte Market",
    projectSlug: "norte-market",
  },
  {
    quote:
      "Pasamos de apagar incendios a dirigir la operación. El tablero es la fuente de verdad del equipo.",
    author: "Diego Solano",
    role: "COO, Atlas Ops",
    projectSlug: "atlas-ops",
  },
  {
    quote:
      "Dejamos de discutir opiniones. Cada peso tiene una hipótesis y un resultado. Eso cambió al comité.",
    author: "Camila Ortega",
    role: "Head of Growth, Lumen Studio",
    projectSlug: "lumen-growth",
  },
  {
    quote:
      "Entienden producto y negocio. No tuvimos que traducir entre “los de ads” y “los de la web”.",
    author: "Luis Herrera",
    role: "Fundador, Orbe Retail",
    projectSlug: "orbe-retail",
  },
];

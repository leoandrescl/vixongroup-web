export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  photo: {
    src: string;
    alt: string;
  };
};

export const team: TeamMember[] = [
  {
    name: "Elena Vargas",
    role: "Dirección general",
    bio: "Estrategia de negocio y calidad de entrega. 12 años liderando productos digitales en Latam.",
    linkedin: "https://www.linkedin.com/",
    photo: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      alt: "Elena Vargas, dirección general",
    },
  },
  {
    name: "Mateo Ruiz",
    role: "Ingeniería",
    bio: "Arquitectura, rendimiento y plataformas. Next.js, cloud y disciplina de producción.",
    linkedin: "https://www.linkedin.com/",
    photo: {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      alt: "Mateo Ruiz, ingeniería",
    },
  },
  {
    name: "Sofía Delgado",
    role: "Growth y performance",
    bio: "Adquisición, atribución y CRO. Convierte tráfico en pipeline con hipótesis medibles.",
    linkedin: "https://www.linkedin.com/",
    photo: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      alt: "Sofía Delgado, growth y performance",
    },
  },
  {
    name: "Andrés Peña",
    role: "Diseño de producto",
    bio: "Sistemas de diseño, UX y storytelling visual. Interfaces que se sienten caras y claras.",
    linkedin: "https://www.linkedin.com/",
    photo: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      alt: "Andrés Peña, diseño de producto",
    },
  },
];

export const manifesto = [
  {
    title: "Claridad antes que volumen",
    body: "Menos decks, más decisiones. Cada iniciativa tiene un dueño, un KPI y una fecha.",
  },
  {
    title: "Calidad de producción",
    body: "No entregamos prototipos eternos. Accesibilidad, seguridad y velocidad van en el Definition of Done.",
  },
  {
    title: "Evidencia, no ego",
    body: "Diseñamos experimentos. Si el dato contradice la intuición, gana el dato.",
  },
  {
    title: "Relación de largo plazo",
    body: "Preferimos ser el equipo de confianza a ser un proveedor de tickets. Eso se nota en el recambio.",
  },
] as const;

export const valueProps = [
  {
    title: "Producto y growth en un mismo ciclo",
    body: "El sprint de ingeniería y el de campañas comparten tablero. Así no se rompe el relato entre lo que se construye y lo que se vende.",
  },
  {
    title: "Stack moderno, sin moda vacía",
    body: "Elegimos tecnología por TCO, talento y velocidad de iteración. Si WordPress es la respuesta correcta, lo decimos.",
  },
  {
    title: "Comunicación de adultos",
    body: "Estimaciones honestas, riesgos a la vista y demos semanales. Sin jerga para esconder retrasos.",
  },
  {
    title: "Resultados que se pueden auditar",
    body: "LCP, conversión, CAC y retención. Si no se puede medir, no entra al roadmap como éxito.",
  },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export const servicesFaqs: FaqItem[] = [
  {
    question: "¿Cuánto tarda un proyecto típico?",
    answer:
      "Un sitio o tienda de alcance medio suele estar en 6–10 semanas. Software a medida y plataformas, 12–20 semanas según integraciones. En la primera reunión acotamos un rango con supuestos explícitos.",
  },
  {
    question: "¿Qué incluyen los entregables?",
    answer:
      "Código en repositorio del cliente, entornos de preview, documentación de handoff, tablero de analítica y una ventana de soporte post-lanzamiento. El alcance exacto queda en la propuesta.",
  },
  {
    question: "¿Trabajan por proyecto o retainer?",
    answer:
      "Ambos. Construimos el activo (web, tienda, plataforma) y, si tiene sentido, un retainer de growth, CRO y evolución del producto. No atamos el retainer si el cliente prefiere un equipo interno.",
  },
  {
    question: "¿Cómo es la modalidad de trabajo?",
    answer:
      "Remoto, con rituales semanales, canal dedicado y demos. Usamos sprints cortos. El cliente tiene visibilidad del backlog; no hay “caja negra” de agencia.",
  },
  {
    question: "¿Pueden integrarse con un equipo interno?",
    answer:
      "Sí. Muchas veces somos el refuerzo de ingeniería o de performance junto a un equipo in-house. Definimos RACI en la semana uno.",
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

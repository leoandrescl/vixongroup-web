import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indica tu nombre.").max(80),
  email: z.string().trim().email("Correo no válido."),
  company: z.string().trim().max(80).optional().or(z.literal("")),
  interest: z.string().trim().min(1, "Selecciona un servicio."),
  message: z.string().trim().min(20, "Cuéntanos un poco más (mínimo 20 caracteres).").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

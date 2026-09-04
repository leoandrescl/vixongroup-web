import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/content/site";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Revisa los campos." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: true, demo: true });
  }

  const to = process.env.CONTACT_TO ?? siteConfig.email;
  const from = process.env.RESEND_FROM ?? "Vixon Group <onboarding@resend.dev>";
  const resend = new Resend(apiKey);
  const { name, email, company, phone, interest, message } = parsed.data;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Nuevo lead: ${name} (${interest})`,
    text: [
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Empresa: ${company || "—"}`,
      `Teléfono: ${phone || "—"}`,
      `Interés: ${interest}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "No se pudo enviar el correo." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

import { ContactHero } from "@/components/contacto/contact-hero";
import { ContactTrustBar } from "@/components/contacto/contact-trust";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contacto",
  path: "/contacto",
  description:
    "Conversemos sobre tu próximo paso. Agenda una reunión gratuita con Vixon Group: formulario, correo y WhatsApp.",
});

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <ContactTrustBar />
    </>
  );
}

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contacto/contact-form";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { contactFaqs } from "@/content/faqs";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contacto",
  path: "/contacto",
  description:
    "Agenda una reunión con Vixon Group. Formulario, correo corporativo, horario y WhatsApp.",
});

const channels = [
  { icon: Mail, label: "Correo", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Teléfono", value: siteConfig.phoneDisplay },
  { icon: Clock, label: "Horario", value: siteConfig.hours },
  { icon: MapPin, label: "Ubicación", value: siteConfig.address },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntanos el proyecto. Nosotros aterrizamos el siguiente paso."
        description="Una reunión corta basta para saber si encajamos. Completa el formulario o escribe por WhatsApp: eliges tú el canal."
      />
      <Section className="pt-0" tone="canvas">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div>
            <Eyebrow>Datos corporativos</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-canvas-foreground">
              Canales directos
            </h2>
            <ul className="mt-6 grid gap-4">
              {channels.map((item) => (
                <li
                  key={item.label}
                  className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-black/5"
                >
                  <item.icon className="mt-0.5 size-5 text-brand" />
                  <div>
                    <p className="text-xs tracking-wide text-canvas-foreground/50 uppercase">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-canvas-foreground hover:text-brand"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-canvas-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/5">
              <iframe
                title="Mapa de Santiago"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-70.85%2C-33.58%2C-70.50%2C-33.30&layer=mapnik"
                className="h-52 w-full border-0 grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-3xl">
          <Eyebrow>FAQ de pre-contacto</Eyebrow>
          <h2 className="mt-4 mb-8 text-3xl font-semibold">
            Antes de escribirnos
          </h2>
          <FaqAccordion items={contactFaqs} />
        </Container>
      </Section>
    </>
  );
}

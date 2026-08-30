import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Política de privacidad",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de privacidad"
        description={`Cómo ${siteConfig.name} trata los datos que nos envías por el formulario, correo o WhatsApp.`}
      />
      <Section className="pt-0">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Recogemos nombre, correo, empresa y el mensaje que nos envías para
            responder consultas y cotizar. No vendemos datos a terceros.
          </p>
          <p>
            El envío del formulario se procesa mediante un proveedor de correo
            transaccional (Resend) cuando está configurado. Conservamos los
            mensajes el tiempo necesario para la relación comercial.
          </p>
          <p>
            Puedes solicitar acceso o eliminación escribiendo a{" "}
            <a className="text-brand" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}

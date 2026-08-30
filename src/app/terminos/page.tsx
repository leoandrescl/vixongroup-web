import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Términos y condiciones",
  path: "/terminos",
});

export default function TerminosPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Términos y condiciones"
        description="Condiciones de uso del sitio web y del contenido publicado por la agencia."
      />
      <Section className="pt-0">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            El contenido de este sitio (textos, casos y marcas) es de{" "}
            {siteConfig.legalName} o se usa con autorización. No constituye una
            oferta vinculante hasta que exista una propuesta firmada.
          </p>
          <p>
            Los proyectos mostrados en esta fase son contenido de demostración
            con fines de diseño. Las métricas ilustran el formato de entrega, no
            resultados auditados de clientes reales.
          </p>
          <p>
            El uso del formulario implica que la información es veraz y que
            aceptas que te contactemos por los canales indicados.
          </p>
        </Container>
      </Section>
    </>
  );
}

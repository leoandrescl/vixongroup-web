import { PageHero } from "@/components/sections/page-hero";
import { ProjectCta } from "@/components/sections/project-cta";
import { TestimonialsSection } from "@/components/sections/testimonial-slider";
import { ProjectGallery } from "@/components/portafolio/project-gallery";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portafolio",
  path: "/portafolio",
  description:
    "Trabajo en producción: SaaS, e-commerce y sitios a medida. Entra al detalle de cada caso y abre el sitio en vivo.",
});

export default function PortafolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Trabajo en producción, no mockups."
        description="Casos que se pueden abrir en el navegador: SaaS, e-commerce, sitios a medida y paneles B2B. Filtra y entra al detalle."
        visual="portafolio"
      />
      <Section tone="surface">
        <Container>
          <ProjectGallery />
        </Container>
      </Section>
      <TestimonialsSection moreHref="/contacto" />
      <ProjectCta />
    </>
  );
}

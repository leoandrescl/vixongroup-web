import { PortafolioHero } from "@/components/portafolio/portafolio-hero";
import { ProjectGallery } from "@/components/portafolio/project-gallery";
import { ProjectCta } from "@/components/sections/project-cta";
import { TestimonialsSection } from "@/components/sections/testimonial-slider";
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
      <PortafolioHero />
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

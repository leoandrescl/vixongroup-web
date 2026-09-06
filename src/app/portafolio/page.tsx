import { FeaturedCase } from "@/components/portafolio/featured-case";
import { MoreThanProjects } from "@/components/portafolio/more-than-projects";
import { PortafolioHero } from "@/components/portafolio/portafolio-hero";
import { ProjectGallery } from "@/components/portafolio/project-gallery";
import { TrustedCompanies } from "@/components/portafolio/trusted-companies";
import { ProjectCta } from "@/components/sections/project-cta";
import { TestimonialsSection } from "@/components/sections/testimonial-slider";
import { ServiciosCtaBanner } from "@/components/servicios/servicios-cta-banner";
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
      <TrustedCompanies />
      <Section id="proyectos" tone="surface" className="scroll-mt-24">
        <Container>
          <ProjectGallery />
        </Container>
      </Section>
      <FeaturedCase />
      <MoreThanProjects />
      <ServiciosCtaBanner />
      <TestimonialsSection moreHref="/contacto" />
      <ProjectCta />
    </>
  );
}

import { DwAi } from "@/components/servicios/desarrollo-web/dw-ai";
import { DwFaq } from "@/components/servicios/desarrollo-web/dw-faq";
import { DwHero } from "@/components/servicios/desarrollo-web/dw-hero";
import { DwProcess } from "@/components/servicios/desarrollo-web/dw-process";
import { DwProjectTypes } from "@/components/servicios/desarrollo-web/dw-project-types";
import { DwProjects } from "@/components/servicios/desarrollo-web/dw-projects";
import { DwResults } from "@/components/servicios/desarrollo-web/dw-results";
import { DwStrategy } from "@/components/servicios/desarrollo-web/dw-strategy";
import { DwTechnologies } from "@/components/servicios/desarrollo-web/dw-technologies";
import { ServiciosCtaBanner } from "@/components/servicios/servicios-cta-banner";
import { ServiciosProjectCta } from "@/components/servicios/servicios-project-cta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Desarrollo Web & E-commerce",
  path: "/servicios/desarrollo-web-ecommerce",
  description:
    "Sitios web y tiendas online que combinan estrategia, diseño, tecnología y rendimiento para atraer clientes y aumentar ventas.",
});

export default function DesarrolloWebEcommercePage() {
  return (
    <>
      <DwHero />
      <DwStrategy />
      <DwProjectTypes />
      <DwTechnologies />
      <DwResults />
      <DwAi />
      <DwProcess />
      <DwProjects />
      <DwFaq />
      <ServiciosCtaBanner />
      <ServiciosProjectCta />
    </>
  );
}

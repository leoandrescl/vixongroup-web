import { CipAi } from "@/components/servicios/cloud/cip-ai";
import { CipContact } from "@/components/servicios/cloud/cip-contact";
import { CipFaq } from "@/components/servicios/cloud/cip-faq";
import { CipHero } from "@/components/servicios/cloud/cip-hero";
import { CipProcess } from "@/components/servicios/cloud/cip-process";
import { CipProjectTypes } from "@/components/servicios/cloud/cip-project-types";
import { CipProjects } from "@/components/servicios/cloud/cip-projects";
import { CipResults } from "@/components/servicios/cloud/cip-results";
import { CipStrategy } from "@/components/servicios/cloud/cip-strategy";
import { CipTechnologies } from "@/components/servicios/cloud/cip-technologies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cloud, Infraestructura y Performance",
  path: "/servicios/cloud-infraestructura-performance",
  description:
    "Diseñamos, configuramos y optimizamos entornos cloud para que tus sitios, tiendas y plataformas funcionen con estabilidad, seguridad y alto rendimiento.",
});

export default function CloudInfraestructuraPerformancePage() {
  return (
    <>
      <CipHero />
      <CipStrategy />
      <CipProjectTypes />
      <CipTechnologies />
      <CipResults />
      <CipAi />
      <CipProcess />
      <CipProjects />
      <CipFaq />
      <CipContact />
    </>
  );
}

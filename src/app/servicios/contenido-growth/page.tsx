import { CgAi } from "@/components/servicios/contenido/cg-ai";
import { CgContact } from "@/components/servicios/contenido/cg-contact";
import { CgFaq } from "@/components/servicios/contenido/cg-faq";
import { CgHero } from "@/components/servicios/contenido/cg-hero";
import { CgProcess } from "@/components/servicios/contenido/cg-process";
import { CgProjectTypes } from "@/components/servicios/contenido/cg-project-types";
import { CgProjects } from "@/components/servicios/contenido/cg-projects";
import { CgResults } from "@/components/servicios/contenido/cg-results";
import { CgStrategy } from "@/components/servicios/contenido/cg-strategy";
import { CgTechnologies } from "@/components/servicios/contenido/cg-technologies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contenido & Growth",
  path: "/servicios/contenido-growth",
  description:
    "Diseñamos y producimos contenido digital a medida para que tu marca comunique mejor, conecte con tu audiencia y genere nuevas oportunidades comerciales.",
});

export default function ContenidoGrowthPage() {
  return (
    <>
      <CgHero />
      <CgStrategy />
      <CgProjectTypes />
      <CgTechnologies />
      <CgResults />
      <CgAi />
      <CgProcess />
      <CgProjects />
      <CgFaq />
      <CgContact />
    </>
  );
}

import { SmAi } from "@/components/servicios/software-medida/sm-ai";
import { SmContact } from "@/components/servicios/software-medida/sm-contact";
import { SmFaq } from "@/components/servicios/software-medida/sm-faq";
import { SmHero } from "@/components/servicios/software-medida/sm-hero";
import { SmProcess } from "@/components/servicios/software-medida/sm-process";
import { SmProjectTypes } from "@/components/servicios/software-medida/sm-project-types";
import { SmProjects } from "@/components/servicios/software-medida/sm-projects";
import { SmResults } from "@/components/servicios/software-medida/sm-results";
import { SmStrategy } from "@/components/servicios/software-medida/sm-strategy";
import { SmTechnologies } from "@/components/servicios/software-medida/sm-technologies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software & Plataformas a Medida",
  path: "/servicios/software-plataformas-a-medida",
  description:
    "Diseñamos y desarrollamos plataformas digitales, sistemas internos y aplicaciones a medida para resolver las necesidades específicas de tu empresa.",
});

export default function SoftwarePlataformasAMedidaPage() {
  return (
    <>
      <SmHero />
      <SmStrategy />
      <SmProjectTypes />
      <SmTechnologies />
      <SmResults />
      <SmAi />
      <SmProcess />
      <SmProjects />
      <SmFaq />
      <SmContact />
    </>
  );
}

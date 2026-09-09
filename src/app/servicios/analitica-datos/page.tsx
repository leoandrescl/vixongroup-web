import { AnAi } from "@/components/servicios/analitica/an-ai";
import { AnContact } from "@/components/servicios/analitica/an-contact";
import { AnFaq } from "@/components/servicios/analitica/an-faq";
import { AnHero } from "@/components/servicios/analitica/an-hero";
import { AnProcess } from "@/components/servicios/analitica/an-process";
import { AnProjectTypes } from "@/components/servicios/analitica/an-project-types";
import { AnProjects } from "@/components/servicios/analitica/an-projects";
import { AnResults } from "@/components/servicios/analitica/an-results";
import { AnStrategy } from "@/components/servicios/analitica/an-strategy";
import { AnTechnologies } from "@/components/servicios/analitica/an-technologies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Analítica & Datos",
  path: "/servicios/analitica-datos",
  description:
    "Diseñamos e implementamos soluciones de analítica y medición para entender el comportamiento de tus usuarios y tomar decisiones con información real.",
});

export default function AnaliticaDatosPage() {
  return (
    <>
      <AnHero />
      <AnStrategy />
      <AnProjectTypes />
      <AnTechnologies />
      <AnResults />
      <AnAi />
      <AnProcess />
      <AnProjects />
      <AnFaq />
      <AnContact />
    </>
  );
}

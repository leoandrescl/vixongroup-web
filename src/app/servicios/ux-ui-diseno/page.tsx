import { UxAi } from "@/components/servicios/ux-ui/ux-ai";
import { UxContact } from "@/components/servicios/ux-ui/ux-contact";
import { UxFaq } from "@/components/servicios/ux-ui/ux-faq";
import { UxHero } from "@/components/servicios/ux-ui/ux-hero";
import { UxProcess } from "@/components/servicios/ux-ui/ux-process";
import { UxProjectTypes } from "@/components/servicios/ux-ui/ux-project-types";
import { UxProjects } from "@/components/servicios/ux-ui/ux-projects";
import { UxResults } from "@/components/servicios/ux-ui/ux-results";
import { UxStrategy } from "@/components/servicios/ux-ui/ux-strategy";
import { UxTechnologies } from "@/components/servicios/ux-ui/ux-technologies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "UX/UI & Diseño",
  path: "/servicios/ux-ui-diseno",
  description:
    "Creamos experiencias digitales e interfaces a medida que combinan estrategia, diseño y tecnología para que cada interacción sea clara, coherente y útil.",
});

export default function UxUiDisenoPage() {
  return (
    <>
      <UxHero />
      <UxStrategy />
      <UxProjectTypes />
      <UxTechnologies />
      <UxResults />
      <UxAi />
      <UxProcess />
      <UxProjects />
      <UxFaq />
      <UxContact />
    </>
  );
}

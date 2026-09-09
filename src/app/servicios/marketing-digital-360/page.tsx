import { MktAi } from "@/components/servicios/marketing/mkt-ai";
import { MktContact } from "@/components/servicios/marketing/mkt-contact";
import { MktFaq } from "@/components/servicios/marketing/mkt-faq";
import { MktHero } from "@/components/servicios/marketing/mkt-hero";
import { MktProcess } from "@/components/servicios/marketing/mkt-process";
import { MktProjectTypes } from "@/components/servicios/marketing/mkt-project-types";
import { MktProjects } from "@/components/servicios/marketing/mkt-projects";
import { MktResults } from "@/components/servicios/marketing/mkt-results";
import { MktStrategy } from "@/components/servicios/marketing/mkt-strategy";
import { MktTechnologies } from "@/components/servicios/marketing/mkt-technologies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Marketing Digital 360°",
  path: "/servicios/marketing-digital-360",
  description:
    "Diseñamos e implementamos estrategias de marketing digital a medida para ganar visibilidad, atraer clientes y generar oportunidades de venta.",
});

export default function MarketingDigital360Page() {
  return (
    <>
      <MktHero />
      <MktStrategy />
      <MktProjectTypes />
      <MktTechnologies />
      <MktResults />
      <MktAi />
      <MktProcess />
      <MktProjects />
      <MktFaq />
      <MktContact />
    </>
  );
}

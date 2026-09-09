import { IauAi } from "@/components/servicios/integraciones/iau-ai";
import { IauContact } from "@/components/servicios/integraciones/iau-contact";
import { IauFaq } from "@/components/servicios/integraciones/iau-faq";
import { IauHero } from "@/components/servicios/integraciones/iau-hero";
import { IauProcess } from "@/components/servicios/integraciones/iau-process";
import { IauProjectTypes } from "@/components/servicios/integraciones/iau-project-types";
import { IauProjects } from "@/components/servicios/integraciones/iau-projects";
import { IauResults } from "@/components/servicios/integraciones/iau-results";
import { IauStrategy } from "@/components/servicios/integraciones/iau-strategy";
import { IauTechnologies } from "@/components/servicios/integraciones/iau-technologies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Integraciones & Automatización",
  path: "/servicios/integraciones-automatizacion",
  description:
    "Diseñamos e implementamos integraciones y automatizaciones a medida para que la información fluya entre tus plataformas y las tareas repetitivas dejen de depender de procesos manuales.",
});

export default function IntegracionesAutomatizacionPage() {
  return (
    <>
      <IauHero />
      <IauStrategy />
      <IauProjectTypes />
      <IauTechnologies />
      <IauResults />
      <IauAi />
      <IauProcess />
      <IauProjects />
      <IauFaq />
      <IauContact />
    </>
  );
}

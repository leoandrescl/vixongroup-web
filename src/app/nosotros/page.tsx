import { EspecialistasIa } from "@/components/nosotros/especialistas-ia";
import { NosotrosCtaBanner } from "@/components/nosotros/nosotros-cta-banner";
import { NosotrosHero } from "@/components/nosotros/nosotros-hero";
import { NuestraFormaTrabajar } from "@/components/nosotros/nuestra-forma-trabajar";
import { NuestraHistoria } from "@/components/nosotros/nuestra-historia";
import { NuestroEquipo } from "@/components/nosotros/nuestro-equipo";
import { NuestrosPrincipios } from "@/components/nosotros/nuestros-principios";
import { QueNosHaceDiferentes } from "@/components/nosotros/que-nos-hace-diferentes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nosotros",
  path: "/nosotros",
  description:
    "Conoce a ViXon Studio: tecnología, diseño y marketing en un mismo equipo para hacer avanzar tu negocio.",
});

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <NuestraHistoria />
      <NuestraFormaTrabajar />
      <NuestrosPrincipios />
      <QueNosHaceDiferentes />
      <NuestroEquipo />
      <EspecialistasIa />
      <NosotrosCtaBanner />
    </>
  );
}

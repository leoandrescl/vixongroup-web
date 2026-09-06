import { NosotrosCtaBanner } from "@/components/nosotros/nosotros-cta-banner";
import { NosotrosHero } from "@/components/nosotros/nosotros-hero";
import { NuestraHistoria } from "@/components/nosotros/nuestra-historia";
import { NuestraTrayectoria } from "@/components/nosotros/nuestra-trayectoria";
import { NuestroEquipo } from "@/components/nosotros/nuestro-equipo";
import { NuestroProposito } from "@/components/nosotros/nuestro-proposito";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nosotros",
  path: "/nosotros",
  description:
    "Historia, principios y equipo de Vixon Group: una agencia de producto y growth con estándar de 2026.",
});

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <NuestraHistoria />
      <NuestroProposito />
      <NuestraTrayectoria />
      <NuestroEquipo />
      <NosotrosCtaBanner />
    </>
  );
}

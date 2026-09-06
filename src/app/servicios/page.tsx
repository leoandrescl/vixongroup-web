import { FaqSection } from "@/components/sections/faq-section";
import { OurProcess } from "@/components/sections/our-process";
import { ServicePillars } from "@/components/home/service-pillars";
import { ServiciosCatalog } from "@/components/servicios/servicios-catalog";
import { ServiciosHero } from "@/components/servicios/servicios-hero";
import { ServiciosIa } from "@/components/servicios/servicios-ia";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Servicios",
  path: "/servicios",
  description:
    "Software, e-commerce y marketing digital: alcance técnico, tecnologías, metodología y entregables claros.",
});

export default function ServiciosPage() {
  return (
    <>
      <ServiciosHero />
      <ServicePillars id="pilares" />
      <ServiciosCatalog />
      <ServiciosIa />
      <OurProcess />
      <FaqSection />
    </>
  );
}

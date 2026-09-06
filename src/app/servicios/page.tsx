import { FeaturedProjects } from "@/components/home/featured-projects";
import { ServicePillars } from "@/components/home/service-pillars";
import { ServiciosCatalog } from "@/components/servicios/servicios-catalog";
import { ServiciosCtaBanner } from "@/components/servicios/servicios-cta-banner";
import { ServiciosHero } from "@/components/servicios/servicios-hero";
import { ServiciosIa } from "@/components/servicios/servicios-ia";
import { ServiciosProcess } from "@/components/servicios/servicios-process";
import { ServiciosTech } from "@/components/servicios/servicios-tech";
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
      <ServiciosTech />
      <ServiciosProcess />
      <FeaturedProjects showTrustedBrands={false} />
      <ServiciosCtaBanner />
    </>
  );
}

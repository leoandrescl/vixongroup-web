import { Reveal } from "@/components/motion/reveal";
import { NosotrosHero } from "@/components/nosotros/nosotros-hero";
import { NuestraHistoria } from "@/components/nosotros/nuestra-historia";
import { NuestroEquipo } from "@/components/nosotros/nuestro-equipo";
import { NuestroProposito } from "@/components/nosotros/nuestro-proposito";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { manifesto, valueProps } from "@/content/team";
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

      <Section id="manifiesto" tone="surface">
        <Container>
          <Eyebrow>Manifiesto y principios</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Cuatro compromisos de calidad técnico-comercial.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {manifesto.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="h-full rounded-3xl bg-background p-7 ring-1 ring-white/8 transition-transform duration-500 ease-out-expo hover:-translate-y-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container>
          <Eyebrow>Propuesta de valor</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-canvas-foreground">
            Por qué las marcas se quedan.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {valueProps.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition-transform duration-500 ease-out-expo hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-canvas-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-canvas-foreground/65">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <NuestroEquipo />
    </>
  );
}

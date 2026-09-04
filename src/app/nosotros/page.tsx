import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { NuestroEquipo } from "@/components/nosotros/nuestro-equipo";
import { PageHero } from "@/components/sections/page-hero";
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
      <PageHero
        eyebrow="Nosotros"
        title="Una agencia que se siente más equipo de producto que proveedor."
        description="Nacimos para cerrar la brecha entre quien construye el software y quien tiene que hacerlo crecer. Menos handoffs. Más resultados auditables."
        visual="nosotros"
      />

      <Section id="historia" tone="canvas">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Historia y visión</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-canvas-foreground">
              Origen y propósito en el mercado.
            </h2>
            <p className="mt-4 leading-relaxed text-canvas-foreground/70">
              Vixon Group se formó cuando vimos el mismo patrón una y otra vez:
              sitios lentos vendidos como “modernos”, campañas sin tracking
              fiable, y equipos de marketing y desarrollo que no compartían
              tablero. El mercado no necesita más slides. Necesita un
              interlocutor que responda por el LCP y por el CAC.
            </p>
            <p className="mt-4 leading-relaxed text-canvas-foreground/70">
              Nuestra visión es ser el socio de confianza para marcas que
              quieren un activo digital de producción — web, tienda o
              plataforma — y un motor de growth que no se desacople a los tres
              meses.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <div className="relative min-h-72 overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                alt="Equipo colaborando alrededor de un producto digital"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

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

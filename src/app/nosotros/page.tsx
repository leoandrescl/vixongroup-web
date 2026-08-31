import Image from "next/image";
import { LinkedInIcon } from "@/components/icons/social";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { manifesto, team, valueProps } from "@/content/team";
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
      />

      <Section className="pt-0">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Historia y visión</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Origen y propósito en el mercado.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Vixon Group se formó cuando vimos el mismo patrón una y otra vez:
              sitios lentos vendidos como “modernos”, campañas sin tracking
              fiable, y equipos de marketing y desarrollo que no compartían
              tablero. El mercado no necesita más slides. Necesita un
              interlocutor que responda por el LCP y por el CAC.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nuestra visión es ser el socio de confianza para marcas que
              quieren un activo digital de producción — web, tienda o
              plataforma — y un motor de growth que no se desacople a los tres
              meses.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <div className="relative min-h-72 overflow-hidden rounded-3xl ring-1 ring-white/10">
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

      <Section tone="surface">
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

      <Section>
        <Container>
          <Eyebrow>Propuesta de valor</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Por qué las marcas se quedan.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {valueProps.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="h-full rounded-3xl bg-surface p-7 ring-1 ring-white/8 transition-transform duration-500 ease-out-expo hover:-translate-y-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
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
          <Eyebrow>Equipo</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-canvas-foreground">
            Perfiles que firman el trabajo.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 70}>
                <article className="h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-500 ease-out-expo hover:-translate-y-1">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={member.photo.src}
                      alt={member.photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-canvas-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-brand">{member.role}</p>
                    <p className="mt-2 text-sm text-canvas-foreground/65">
                      {member.bio}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-canvas-foreground transition-colors duration-300 ease-out-expo hover:text-brand"
                    >
                      <LinkedInIcon className="size-4" />
                      LinkedIn
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="¿Hablamos de cómo encajaríamos con tu equipo?"
        cta="Ir a contacto"
      />
    </>
  );
}

import { Check, Eye, Gem, Target } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";

const values = [
  "Innovación",
  "Compromiso",
  "Transparencia",
  "Trabajo en equipo",
  "Orientación a resultados",
] as const;

const pillars = [
  {
    title: "Nuestra misión",
    body: "Desarrollar soluciones tecnológicas y de marketing que impulsen el crecimiento de personas y empresas, generando un impacto real y sostenible.",
    icon: Target,
  },
  {
    title: "Nuestra visión",
    body: "Ser referentes en innovación digital en Latinoamérica, reconocidos por nuestra capacidad de transformar ideas en proyectos exitosos.",
    icon: Eye,
  },
  {
    title: "Nuestros valores",
    icon: Gem,
    values,
  },
] as const;

export function NuestroProposito() {
  return (
    <Section id="proposito" className="relative isolate scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute top-20 left-1/4 size-[26rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[110px]" />
        <div className="absolute right-0 bottom-10 size-[22rem] rounded-full bg-brand/8 blur-[100px]" />
      </div>

      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Nuestro propósito</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.55rem] lg:leading-[1.12]">
              Impulsar negocios que generan un{" "}
              <span className="text-brand">impacto positivo.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[0.95rem] lg:justify-self-end lg:text-right">
              Queremos ser un socio estratégico de largo plazo, ayudando a
              nuestros clientes a transformar ideas en soluciones digitales que
              generen valor, crecimiento y nuevas oportunidades.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 70}>
              <article className="flex h-full flex-col rounded-2xl border border-brand/35 bg-white/[0.03] p-6 backdrop-blur-sm transition-[transform,border-color] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-brand/55 md:p-7">
                <pillar.icon
                  className="size-10 text-brand drop-shadow-[0_0_10px_rgb(0_163_173_/_0.4)]"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {pillar.title}
                </h3>
                {"body" in pillar ? (
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                    {pillar.body}
                  </p>
                ) : (
                  <ul className="mt-4 space-y-2.5">
                    {pillar.values.map((value) => (
                      <li
                        key={value}
                        className="flex items-center gap-2.5 text-sm text-foreground/85"
                      >
                        <Check
                          className="size-4 shrink-0 text-brand"
                          strokeWidth={2.25}
                          aria-hidden
                        />
                        {value}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

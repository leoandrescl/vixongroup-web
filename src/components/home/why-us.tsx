import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { whyUsPillars } from "@/content/site";

export function WhyUs() {
  return (
    <Section>
      <Container>
        <Reveal>
          <Eyebrow>Por qué elegirnos</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Cuatro pilares técnicos y comerciales. Sin teatro.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {whyUsPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 70}>
              <article className="h-full rounded-3xl bg-surface p-7 ring-1 ring-white/8 transition-transform duration-500 ease-out-expo hover:-translate-y-1">
                <p className="text-xs font-semibold tracking-[0.18em] text-brand">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

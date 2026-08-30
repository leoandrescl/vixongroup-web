import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { whyUsPillars } from "@/content/site";

export function WhyUs() {
  return (
    <Section>
      <Container>
        <Eyebrow>Por qué elegirnos</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Cuatro pilares técnicos y comerciales. Sin teatro.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {whyUsPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="rounded-3xl bg-surface p-7 ring-1 ring-white/8"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-brand">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

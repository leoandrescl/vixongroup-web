import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { homeStats } from "@/content/site";

export function MetricsBlock() {
  return (
    <Section tone="canvas">
      <Container>
        <Eyebrow className="text-brand">Métricas e indicadores</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-canvas-foreground">
          Números que usamos para dirigir el trabajo, no para decorar un pitch.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <p className="text-3xl font-semibold text-brand">
                <AnimatedStat value={item.value} />
              </p>
              <p className="mt-2 text-sm text-canvas-foreground/65">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

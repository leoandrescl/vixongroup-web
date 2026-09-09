import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Filter,
  Gauge,
  Lightbulb,
  Megaphone,
  Shield,
  Video,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { cgResultFeatures, cgResults } from "@/content/contenido";

const featureIcons = {
  kpi: Gauge,
  camera: Video,
  megaphone: Megaphone,
  chart: BarChart3,
  brand: Shield,
  funnel: Filter,
  idea: Lightbulb,
  improve: Wrench,
} as const satisfies Record<
  (typeof cgResultFeatures)[number]["icon"],
  LucideIcon
>;

export function CgResults() {
  return (
    <Section className="scroll-mt-24 bg-white text-canvas-foreground">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">{cgResults.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              {cgResults.titleBefore}{" "}
              <span className="text-[#00c8ea]">{cgResults.titleAccent}</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-canvas-foreground/70 md:text-[0.95rem]">
              {cgResults.description}
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {cgResultFeatures.map((feature, index) => {
              const Icon = featureIcons[feature.icon];
              return (
                <Reveal key={feature.title} delay={index * 30}>
                  <article className="flex h-full gap-3.5 rounded-2xl bg-[#f4fbfd] p-4 sm:p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#00c8ea]/12 text-[#00c8ea]">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[0.95rem] font-semibold tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-canvas-foreground/65">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

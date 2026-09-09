import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Code2,
  Rocket,
  Search,
  Settings,
  WandSparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { dwProcessSteps } from "@/content/desarrollo-web";

const stepIcons = {
  search: Search,
  list: ClipboardList,
  wand: WandSparkles,
  code: Code2,
  cog: Settings,
  rocket: Rocket,
} as const satisfies Record<(typeof dwProcessSteps)[number]["icon"], LucideIcon>;

export function DwProcess() {
  return (
    <Section className="scroll-mt-24 bg-white text-canvas-foreground">
      <Container>
        <Reveal>
          <Eyebrow className="text-[#00c8ea]">Nuestro proceso</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
            Simple, claro y transparente.
          </h2>
        </Reveal>

        <div className="relative mt-10">
          <div
            className="pointer-events-none absolute top-5 right-[4%] left-[4%] hidden h-px bg-[#00c8ea]/35 lg:block"
            aria-hidden
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {dwProcessSteps.map((step, index) => {
              const Icon = stepIcons[step.icon];
              return (
                <Reveal key={step.n} delay={index * 35}>
                  <li className="relative flex flex-col items-start">
                    <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-[#00c8ea] text-sm font-semibold text-white tabular-nums">
                      {step.n}
                    </span>
                    <Icon
                      className="mt-4 size-5 text-[#00c8ea]"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <h3 className="mt-2.5 text-[0.95rem] font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[0.78rem] leading-relaxed text-canvas-foreground/65">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

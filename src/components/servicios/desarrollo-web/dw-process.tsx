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
    <Section className="relative isolate scroll-mt-24 overflow-hidden">
      <div
        className="pointer-events-none absolute top-16 right-0 size-[22rem] rounded-full bg-[#00c8ea]/10 blur-[110px]"
        aria-hidden
      />
      <Container>
        <Reveal>
          <Eyebrow className="text-[#00c8ea]">Nuestro proceso</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
            Simple, claro y transparente.
          </h2>
        </Reveal>

        <div className="relative mt-10">
          <div
            className="pointer-events-none absolute top-5 right-8 left-8 hidden h-px bg-linear-to-r from-transparent via-[#00c8ea]/40 to-transparent lg:block"
            aria-hidden
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {dwProcessSteps.map((step, index) => {
              const Icon = stepIcons[step.icon];
              return (
                <Reveal key={step.n} delay={index * 40}>
                  <li className="relative flex h-full flex-col items-start rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                    <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-[#00c8ea] text-sm font-semibold text-[#041018] tabular-nums">
                      {step.n}
                    </span>
                    <Icon
                      className="mt-4 size-5 text-[#00c8ea]"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <h3 className="mt-2.5 text-[0.9rem] font-semibold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[0.75rem] leading-relaxed text-muted-foreground">
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

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
import { cn } from "@/lib/utils";

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

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
          {dwProcessSteps.map((step, index) => {
            const Icon = stepIcons[step.icon];
            const isLast = index === dwProcessSteps.length - 1;

            return (
              <Reveal key={step.n} delay={index * 35}>
                <li
                  className={cn(
                    "relative flex flex-col items-start lg:px-4 xl:px-5",
                    !isLast &&
                      "lg:after:absolute lg:after:-top-[30px] lg:after:-bottom-[30px] lg:after:right-0 lg:after:w-px lg:after:origin-center lg:after:-rotate-[8deg] lg:after:bg-[#00c8ea]/45",
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#00c8ea] text-[0.7rem] font-semibold text-white tabular-nums sm:size-9 sm:text-sm">
                      {step.n}
                    </span>
                    <Icon
                      className="size-6 text-[#00c8ea] sm:size-7"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-4 text-[0.95rem] font-semibold tracking-tight">
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
      </Container>
    </Section>
  );
}

import type { LucideIcon } from "lucide-react";
import {
  Check,
  ClipboardList,
  LayoutTemplate,
  MonitorCog,
  Target,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  anStrategy,
  anStrategyCards,
  anStrategyChecks,
} from "@/content/analitica";
import { cn } from "@/lib/utils";

const cardIcons = {
  target: Target,
  list: ClipboardList,
  layout: LayoutTemplate,
  users: Users,
} as const satisfies Record<(typeof anStrategyCards)[number]["icon"], LucideIcon>;

export function AnStrategy() {
  return (
    <Section className="scroll-mt-24 bg-white text-canvas-foreground">
      <Container>
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12">
          <div className="flex flex-col">
            <Reveal>
              <Eyebrow className="text-[#00c8ea]">{anStrategy.eyebrow}</Eyebrow>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
                {anStrategy.titleBefore}{" "}
                <span className="text-[#00c8ea]">{anStrategy.titleAccent}</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-canvas-foreground/70 md:text-[0.95rem]">
                {anStrategy.description}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                {anStrategyCards.map((card, index) => {
                  const Icon = cardIcons[card.icon];
                  return (
                    <li
                      key={card.lines.join(" ")}
                      className={cn(
                        "relative flex min-w-0 items-center gap-3 lg:px-3 xl:px-4",
                        index > 0 &&
                          "border-t border-[#00c8ea]/35 pt-5 sm:border-t-0 sm:pt-0",
                        index % 2 === 1 &&
                          "sm:border-l sm:border-[#00c8ea]/35 sm:pl-5 lg:border-l-0 lg:pl-3",
                        index > 0 &&
                          "lg:before:absolute lg:before:top-1/2 lg:before:left-0 lg:before:h-10 lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-[#00c8ea]/45",
                      )}
                    >
                      <Icon
                        className="size-7 shrink-0 text-[#00c8ea] sm:size-8"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <p className="text-[0.85rem] leading-snug font-semibold text-canvas-foreground">
                        {card.lines[0]}
                        <br />
                        {card.lines[1]}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <aside className="flex h-full flex-col rounded-3xl bg-[#e8f7fb] p-6 sm:p-7 md:p-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#00c8ea]/15 text-[#00c8ea]">
                <MonitorCog className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {anStrategy.asideTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-canvas-foreground/70">
                {anStrategy.asideBody}
              </p>
              <ul className="mt-6 space-y-3">
                {anStrategyChecks.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-canvas-foreground/85"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[#00c8ea]"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

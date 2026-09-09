import type { LucideIcon } from "lucide-react";
import {
  Check,
  ClipboardList,
  MonitorCog,
  Target,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  dwStrategyCards,
  dwStrategyChecks,
} from "@/content/desarrollo-web";

const cardIcons = {
  target: Target,
  list: ClipboardList,
  users: Users,
} as const satisfies Record<(typeof dwStrategyCards)[number]["icon"], LucideIcon>;

export function DwStrategy() {
  return (
    <Section tone="canvas" className="scroll-mt-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-14">
          <div>
            <Reveal>
              <Eyebrow className="text-[#00c8ea]">Estrategia primero</Eyebrow>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance text-canvas-foreground md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
                Entendemos tu negocio para desarrollar{" "}
                <span className="text-[#00c8ea]">la mejor solución.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-canvas-foreground/70 md:text-[0.95rem]">
                Cada proyecto es único. Analizamos tus objetivos, tu público, tu
                mercado y tus procesos para recomendar y desarrollar una
                solución web alineada a tus necesidades y presupuesto.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {dwStrategyCards.map((card, index) => {
                const Icon = cardIcons[card.icon];
                return (
                  <Reveal key={card.title} delay={index * 40}>
                    <article className="flex h-full flex-col items-start gap-3 rounded-2xl bg-[#e8f7fb] p-4 sm:p-5">
                      <span className="flex size-10 items-center justify-center rounded-full bg-[#00c8ea] text-white">
                        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <p className="text-[0.85rem] leading-snug font-semibold text-canvas-foreground">
                        {card.title}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={80}>
            <aside className="rounded-3xl bg-[#e8f7fb] p-6 sm:p-7 md:p-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#00c8ea]/20 text-[#00c8ea]">
                <MonitorCog className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-canvas-foreground">
                Más que un sitio web
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-canvas-foreground/70">
                Desarrollamos herramientas digitales que se integran a tu
                negocio, optimizan tus procesos y te permiten crecer.
              </p>
              <ul className="mt-5 space-y-2.5">
                {dwStrategyChecks.map((item) => (
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

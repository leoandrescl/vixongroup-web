import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Handshake,
  Lightbulb,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { nosotrosPrincipios } from "@/content/nosotros";
import { cn } from "@/lib/utils";

const itemIcons = {
  lightbulb: Lightbulb,
  award: Award,
  chart: BarChart3,
  handshake: Handshake,
} as const satisfies Record<
  (typeof nosotrosPrincipios.items)[number]["icon"],
  LucideIcon
>;

export function NuestrosPrincipios() {
  return (
    <Section id="principios" className="scroll-mt-24">
      <Container>
        <Reveal>
          <Eyebrow className="text-[#00c8ea]">
            {nosotrosPrincipios.eyebrow}
          </Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
            {nosotrosPrincipios.titleBefore}{" "}
            <span className="text-[#00c8ea]">
              {nosotrosPrincipios.titleAccent}
            </span>
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-0">
          {nosotrosPrincipios.items.map((item, index) => {
            const Icon = itemIcons[item.icon];
            return (
              <Reveal key={item.title} as="li" delay={index * 50}>
                <article
                  className={cn(
                    "flex h-full flex-col lg:px-5 xl:px-6",
                    index > 0 && "lg:border-l lg:border-white/10",
                    index === 0 && "lg:pl-0",
                    index === nosotrosPrincipios.items.length - 1 && "lg:pr-0",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      className="mt-0.5 size-7 shrink-0 text-[#00c8ea] sm:size-8"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <h3 className="text-[0.95rem] font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Network,
  PenTool,
  Search,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { nosotrosFormaTrabajar } from "@/content/nosotros";
import { cn } from "@/lib/utils";

const itemIcons = {
  search: Search,
  pen: PenTool,
  network: Network,
  list: ClipboardList,
} as const satisfies Record<
  (typeof nosotrosFormaTrabajar.items)[number]["icon"],
  LucideIcon
>;

export function NuestraFormaTrabajar() {
  return (
    <Section
      id="forma-de-trabajar"
      className="scroll-mt-24 bg-white text-canvas-foreground"
    >
      <Container>
        <Reveal>
          <Eyebrow className="text-[#00c8ea]">
            {nosotrosFormaTrabajar.eyebrow}
          </Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
            {nosotrosFormaTrabajar.titleBefore}{" "}
            <span className="text-[#00c8ea]">
              {nosotrosFormaTrabajar.titleAccent}
            </span>
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-0">
          {nosotrosFormaTrabajar.items.map((item, index) => {
            const Icon = itemIcons[item.icon];
            return (
              <Reveal key={item.title} as="li" delay={index * 50}>
                <article
                  className={cn(
                    "flex h-full flex-col lg:px-5 xl:px-6",
                    index > 0 && "lg:border-l lg:border-[#00c8ea]/25",
                    index === 0 && "lg:pl-0",
                    index === nosotrosFormaTrabajar.items.length - 1 &&
                      "lg:pr-0",
                  )}
                >
                  <Icon
                    className="size-8 text-[#00c8ea] sm:size-9"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-[0.95rem] font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-canvas-foreground/65">
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

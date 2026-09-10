import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Layers,
  MessageCircle,
  RefreshCw,
  SlidersHorizontal,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { nosotrosDiferentes } from "@/content/nosotros";

const itemIcons = {
  layers: Layers,
  sliders: SlidersHorizontal,
  message: MessageCircle,
  refresh: RefreshCw,
} as const satisfies Record<
  (typeof nosotrosDiferentes.items)[number]["icon"],
  LucideIcon
>;

export function QueNosHaceDiferentes() {
  return (
    <Section
      id="diferentes"
      className="scroll-mt-24 bg-white text-canvas-foreground"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">
              {nosotrosDiferentes.eyebrow}
            </Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              {nosotrosDiferentes.titleBefore}{" "}
              <span className="text-[#00c8ea]">
                {nosotrosDiferentes.titleAccent}
              </span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-canvas-foreground/70 md:text-[0.95rem]">
              {nosotrosDiferentes.description}
            </p>
            <Button asChild size="lg" className="mt-7">
              <Link href={nosotrosDiferentes.ctaHref}>
                {nosotrosDiferentes.cta}
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {nosotrosDiferentes.items.map((item, index) => {
              const Icon = itemIcons[item.icon];
              return (
                <Reveal key={item.title} delay={index * 30}>
                  <article className="flex h-full gap-3.5 rounded-2xl bg-[#f4fbfd] p-4 sm:p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#00c8ea]/12 text-[#00c8ea]">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[0.95rem] font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-canvas-foreground/65">
                        {item.body}
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

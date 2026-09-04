"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Check,
  FileText,
  Settings2,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import {
  faqContactPoints,
  faqHighlights,
  servicesFaqs,
  trustedBrands,
  type FaqItem,
} from "@/content/faqs";
import { cn } from "@/lib/utils";

const highlightIcons = {
  trophy: Trophy,
  team: Users,
  method: Settings2,
  support: ShieldCheck,
} as const;

const contactIcons = {
  calendar: Calendar,
  proposal: FileText,
  check: Check,
} as const;

function NumberBadge({ index }: { index: number }) {
  return (
    <span
      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-brand/55 text-[0.7rem] font-semibold tracking-wide text-brand tabular-nums"
      aria-hidden
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`faq-${index}`}
          className="border-white/8"
        >
          <AccordionTrigger className="gap-4 py-5 text-[0.95rem] font-medium text-foreground hover:bg-transparent hover:text-brand hover:no-underline md:text-base">
            <span className="flex min-w-0 flex-1 items-center gap-4 text-left">
              <NumberBadge index={index} />
              <span className="leading-snug">{item.question}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pr-2 pl-[3.25rem] text-[0.9375rem] leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FaqSection({
  items = servicesFaqs,
  id = "faq",
}: {
  items?: FaqItem[];
  id?: string;
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-[radial-gradient(ellipse_at_center,rgb(0_163_173_/_0.08),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 xl:gap-12">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div className="max-w-xl">
                <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">
                  Preguntas frecuentes
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Resolvemos tus dudas,{" "}
                  <span className="text-brand">sin enredos.</span>
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                  Transparencia desde el primer contacto: plazos, alcance,
                  modalidad y qué pasa después del lanzamiento.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="shrink-0 self-start border-foreground/20"
              >
                <a href="#faq-list">
                  Ver todas las preguntas
                  <ArrowRight />
                </a>
              </Button>
            </div>
            <div id="faq-list" className="mt-8 scroll-mt-28 md:mt-10">
              <FaqList items={items} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <aside className="relative isolate overflow-hidden rounded-[1.75rem] ring-1 ring-brand/35 shadow-[0_0_0_1px_rgb(0_163_173_/_0.12),0_24px_80px_-32px_rgb(0_163_173_/_0.45)]">
              <Image
                src="/portafolio/allisone-desktop.jpg"
                alt=""
                fill
                className="object-cover object-center opacity-40"
                sizes="(max-width: 1024px) 100vw, 40vw"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-linear-to-br from-[#0b0f19]/95 via-[#0b0f19]/88 to-[#0b0f19]/55"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(0_163_173_/_0.18),transparent_55%)]"
                aria-hidden
              />

              <div className="relative flex h-full min-h-[28rem] flex-col p-7 md:p-8">
                <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">
                  Hablemos
                </p>
                <h3 className="mt-4 max-w-[16ch] text-2xl font-semibold tracking-tight md:text-[1.65rem] md:leading-tight">
                  Cuéntanos tu proyecto.{" "}
                  <span className="text-brand">Hagámoslo realidad.</span>
                </h3>

                <ul className="mt-8 space-y-4">
                  {faqContactPoints.map((point) => {
                    const Icon = contactIcons[point.icon];
                    return (
                      <li key={point.title} className="flex gap-3.5">
                        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-brand/50 text-brand">
                          <Icon className="size-4" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {point.title}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {point.body}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-auto pt-8">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/contacto">
                      Hablemos de tu proyecto
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>

                <p
                  className="pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 text-[0.65rem] font-medium tracking-[0.35em] text-foreground/25 uppercase [writing-mode:vertical-rl] xl:block"
                  aria-hidden
                >
                  Ideas · Estrategia · Tecnología · Resultados
                </p>
              </div>
            </aside>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="relative mt-16 overflow-hidden rounded-3xl bg-surface/60 ring-1 ring-white/8 md:mt-20">
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgb(0_163_173_/_0.07)_48%,transparent_72%)]"
              aria-hidden
            />
            <ul className="relative grid gap-8 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-4 lg:py-10">
              {faqHighlights.map((item, index) => {
                const Icon = highlightIcons[item.icon];
                return (
                  <li
                    key={item.title}
                    className={cn(
                      "relative flex gap-3.5 px-2 lg:px-6",
                      index > 0 &&
                        "lg:before:absolute lg:before:top-1 lg:before:bottom-1 lg:before:left-0 lg:before:w-px lg:before:bg-white/8",
                    )}
                  >
                    <Icon
                      className="mt-0.5 size-7 shrink-0 text-brand"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/8 pt-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-8">
            <p className="shrink-0 text-[0.65rem] font-semibold tracking-[0.2em] text-brand uppercase">
              Marcas que confían en nosotros
            </p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 md:flex-1 md:justify-center">
              {trustedBrands.map((brand) => (
                <li
                  key={brand.name}
                  className="text-sm font-semibold tracking-wide text-foreground/40"
                >
                  {brand.short}
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="shrink-0 self-start border-foreground/20 md:self-auto"
            >
              <Link href="/portafolio">
                Ver todos los proyectos
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

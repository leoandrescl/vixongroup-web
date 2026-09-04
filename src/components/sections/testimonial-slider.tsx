"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { processStats } from "@/content/site";
import {
  testimonials as defaultTestimonials,
  trustedBrands,
  type Testimonial,
} from "@/content/testimonials";
import { cn } from "@/lib/utils";

const statIcons = {
  projects: BarChart3,
  clients: Users,
  experience: Star,
  commitment: ShieldCheck,
} as const;

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setCount(3);
      else if (window.matchMedia("(min-width: 768px)").matches) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

function StarRating({ value }: { value: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${value} de 5 estrellas`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "size-3.5",
            index < value
              ? "fill-brand text-brand"
              : "fill-transparent text-white/20",
          )}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full min-h-[300px] flex-col rounded-2xl bg-[#0e1522] p-6 ring-1 ring-white/10 shadow-[0_20px_50px_-30px_rgb(0_163_173_/_0.5)] transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgb(0_163_173_/_0.65)] md:p-7">
      <p className="text-[0.95rem] font-semibold tracking-wide text-foreground">
        {item.company}
      </p>

      <blockquote className="mt-6 flex-1">
        <span
          className="mb-1 block font-serif text-5xl leading-none text-brand"
          aria-hidden
        >
          “
        </span>
        <p className="text-[0.95rem] leading-relaxed text-foreground/92 md:text-base">
          {item.quote}
        </p>
      </blockquote>

      <div className="mt-6 flex items-end justify-between gap-3 border-t border-white/8 pt-5">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-xs font-semibold tracking-wide text-brand ring-1 ring-brand/35"
            aria-hidden
          >
            {item.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{item.author}</p>
            <p className="truncate text-xs text-muted-foreground">{item.role}</p>
          </div>
        </div>
        <StarRating value={item.rating} />
      </div>
    </article>
  );
}

type TestimonialsSectionProps = {
  items?: Testimonial[];
  moreHref?: string;
};

export function TestimonialsSection({
  items = defaultTestimonials,
  moreHref = "/portafolio",
}: TestimonialsSectionProps) {
  const visibleCount = useVisibleCount();
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visibleCount);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  if (items.length === 0) return null;

  const previous = () =>
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  const next = () =>
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));

  const visibleItems = items.slice(index, index + visibleCount);

  return (
    <Section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-16 left-[18%] size-[30rem] -translate-x-1/2 rounded-full bg-brand/12 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-4rem] bottom-32 size-[24rem] rounded-full bg-brand/8 blur-[110px]"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <Eyebrow>Lo que dicen nuestros clientes</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Resultados que generan{" "}
                <span className="text-brand">confianza.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                Empresas que han confiado en Vixon para desarrollar, escalar y
                potenciar sus proyectos digitales.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={previous}
                  aria-label="Testimonios anteriores"
                  className="border-brand/45 text-foreground hover:border-brand hover:bg-brand/10"
                >
                  <ChevronLeft />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  aria-label="Testimonios siguientes"
                  className="border-brand/45 text-foreground hover:border-brand hover:bg-brand/10"
                >
                  <ChevronRight />
                </Button>
              </div>
              <Button asChild variant="outline" className="border-white/25">
                <Link href={moreHref}>
                  Ver más testimonios
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_200px] lg:items-stretch lg:gap-5">
          <Reveal delay={60}>
            <div
              className={cn(
                "grid gap-4",
                visibleCount >= 3 && "lg:grid-cols-3",
                visibleCount === 2 && "md:grid-cols-2",
              )}
            >
              {visibleItems.map((item) => (
                <TestimonialCard
                  key={`${item.company}-${item.author}-${item.quote.slice(0, 24)}`}
                  item={item}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="flex h-full flex-col justify-between rounded-2xl bg-[#0e1522]/90 p-5 ring-1 ring-white/10 md:grid md:grid-cols-4 lg:flex lg:flex-col">
              {processStats.map((stat) => {
                const Icon = statIcons[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className="flex items-start gap-3 border-b border-white/8 py-4 first:pt-0 last:border-b-0 last:pb-0 md:border-b-0 md:border-r md:px-3 md:py-0 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:border-r-0 lg:border-b lg:px-0 lg:py-4 lg:first:pt-0 lg:last:border-b-0 lg:last:pb-0"
                  >
                    <Icon
                      className="mt-0.5 size-5 shrink-0 text-brand"
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className="text-xl font-semibold tracking-tight md:text-[1.35rem]">
                        <AnimatedStat value={stat.value} />
                      </p>
                      <p className="mt-1 text-[0.7rem] leading-snug text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </aside>
          </Reveal>
        </div>

        <p className="sr-only" aria-live="polite">
          Mostrando testimonios {index + 1} a{" "}
          {Math.min(index + visibleCount, items.length)} de {items.length}
        </p>

        <Reveal delay={160}>
          <div className="mt-12 flex flex-col gap-5 border-t border-white/8 pt-8 md:mt-14 md:flex-row md:items-center md:gap-8">
            <p className="shrink-0 text-[0.65rem] font-semibold tracking-[0.2em] text-brand uppercase">
              Marcas que confían en nosotros
            </p>
            <ul className="flex min-w-0 flex-1 flex-wrap items-center gap-y-3">
              {trustedBrands.map((brand) => (
                <li
                  key={brand.name}
                  className="border-white/15 px-4 text-sm font-semibold tracking-wide text-foreground/55 first:pl-0 not-last:border-r sm:px-6"
                >
                  {brand.name}
                </li>
              ))}
              <li className="px-4 text-xs text-muted-foreground sm:px-6">
                Y muchos más…
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/** @deprecated Prefer TestimonialsSection */
export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  return <TestimonialsSection items={items} />;
}

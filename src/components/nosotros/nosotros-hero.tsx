import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Handshake,
  Puzzle,
  Target,
  Users,
} from "lucide-react";
import { HeroWords } from "@/components/motion/hero-words";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { nosotrosHero, nosotrosHeroPillars } from "@/content/nosotros";

const pillarIcons = {
  target: Target,
  users: Users,
  puzzle: Puzzle,
  handshake: Handshake,
} as const satisfies Record<
  (typeof nosotrosHeroPillars)[number]["icon"],
  LucideIcon
>;

export function NosotrosHero() {
  return (
    <section className="relative isolate flex min-h-0 flex-col overflow-hidden md:h-[min(36rem,calc(100svh-11rem))] lg:h-[min(38rem,calc(100svh-11rem))]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/img-hero-home.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_36%] max-md:object-[70%_32%]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-r from-background from-0% via-background/90 via-38% to-background/15 to-72% max-md:via-background/85 max-md:to-background/50" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-background to-transparent" />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[42%] flex-col justify-between px-6 py-10 lg:flex xl:w-[38%] xl:px-10"
        aria-hidden
      >
        <p className="self-end text-right text-[0.65rem] font-semibold tracking-[0.28em] text-white/85 uppercase">
          {nosotrosHero.overlayLine}
        </p>
        <p className="mb-20 self-end max-w-[14rem] text-right text-sm font-medium leading-snug text-white/90">
          {nosotrosHero.overlayQuote}
        </p>
      </div>

      <Container className="relative z-10 flex flex-1 flex-col gap-6 py-8 md:py-7 lg:py-8">
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-lg lg:max-w-xl">
            <Eyebrow className="hero-fade text-[#00c8ea]">
              {nosotrosHero.eyebrow}
            </Eyebrow>
            <HeroWords
              words={nosotrosHero.words}
              accent={nosotrosHero.accent}
              className="mt-3 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.55rem] lg:leading-[1.08]"
            />
            <p className="hero-fade hero-fade-2 mt-4 max-w-md text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
              {nosotrosHero.description}
            </p>

            <div className="hero-fade hero-fade-3 mt-6">
              <Button asChild size="lg">
                <Link href={nosotrosHero.ctaHref}>
                  {nosotrosHero.cta}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div
            className="pointer-events-none h-24 sm:h-28 md:hidden"
            aria-hidden
          />
        </div>

        <ul className="hero-fade hero-fade-4 grid grid-cols-2 gap-y-4 border-t border-white/10 pt-4 sm:grid-cols-4 sm:divide-x sm:divide-[#00c8ea]/40 sm:gap-y-0">
          {nosotrosHeroPillars.map((item) => {
            const Icon = pillarIcons[item.icon];
            return (
              <li
                key={item.label}
                className="flex flex-col items-center gap-2 px-2 py-1 text-center sm:px-3"
              >
                <Icon
                  className="size-8 shrink-0 text-[#00c8ea]"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-[0.8rem] font-semibold leading-snug text-foreground">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

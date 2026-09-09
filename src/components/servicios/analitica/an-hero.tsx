import Image from "next/image";
import { BarChart3, Target, TrendingUp, Users } from "lucide-react";
import { HeroWords } from "@/components/motion/hero-words";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { anHero, anHeroStats } from "@/content/analitica";

const statIcons = {
  bars: BarChart3,
  target: Target,
  users: Users,
  trending: TrendingUp,
} as const;

export function AnHero() {
  return (
    <section className="relative isolate flex min-h-0 flex-col overflow-hidden md:h-[min(34rem,calc(100svh-12.5rem))] lg:h-[min(36rem,calc(100svh-12.5rem))]">
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
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-10 md:py-8 lg:py-10">
        <div className="max-w-lg lg:max-w-xl">
          <Eyebrow className="hero-fade text-[#00c8ea]">
            {anHero.eyebrow}
          </Eyebrow>
          <HeroWords
            words={anHero.words}
            accent={anHero.accent}
            className="mt-3 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.55rem] lg:leading-[1.08]"
          />
          <p className="hero-fade hero-fade-2 mt-4 max-w-md text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
            {anHero.description}
          </p>

          <ul className="hero-fade hero-fade-3 mt-8 grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-[#00c8ea]/40">
            {anHeroStats.map((item) => {
              const Icon = statIcons[item.icon];
              return (
                <li
                  key={item.label}
                  className="flex flex-col items-center gap-2 px-2 py-3 text-center sm:px-3 sm:py-0"
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
        </div>

        <div
          className="pointer-events-none h-24 sm:h-28 md:hidden"
          aria-hidden
        />
      </Container>
    </section>
  );
}

import Image from "next/image";
import {
  BarChart3,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { HeroWords } from "@/components/motion/hero-words";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { dwHeroStats } from "@/content/desarrollo-web";
import { cn } from "@/lib/utils";

const statIcons = {
  bars: BarChart3,
  users: Users,
  cart: ShoppingCart,
  trending: TrendingUp,
} as const;

export function DwHero() {
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

      <Container className="relative z-10 flex flex-1 flex-col gap-8 py-10 md:py-8 lg:py-10">
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-lg lg:max-w-xl">
            <Eyebrow className="hero-fade text-[#00c8ea]">
              Servicios / Desarrollo Web &amp; E-commerce
            </Eyebrow>
            <HeroWords
              words="Sitios web que"
              accent="impulsan negocios"
              className="mt-3 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.55rem] lg:leading-[1.08]"
            />
            <p className="hero-fade hero-fade-2 mt-4 max-w-md text-sm leading-relaxed text-foreground/80 md:text-[0.95rem]">
              Diseñamos y desarrollamos sitios web y tiendas online que combinan
              estrategia, diseño, tecnología y rendimiento, para ayudarte a
              atraer más clientes, generar oportunidades y aumentar tus ventas.
            </p>
          </div>

          <div
            className="pointer-events-none h-24 sm:h-28 md:hidden"
            aria-hidden
          />
        </div>

        <ul className="hero-fade hero-fade-3 grid grid-cols-2 border-t border-white/10 pt-5 md:grid-cols-4 md:divide-x md:divide-[#00c8ea]/35">
          {dwHeroStats.map((item, index) => {
            const Icon = statIcons[item.icon];
            return (
              <li
                key={item.label}
                className={cn(
                  "flex flex-col items-center gap-2 px-3 py-3 text-center md:px-5 md:py-1",
                  index > 0 && index % 2 === 0 && "border-t border-white/10 md:border-t-0",
                )}
              >
                <Icon
                  className="size-8 shrink-0 text-[#00c8ea]"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-[0.85rem] font-semibold leading-snug text-foreground">
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

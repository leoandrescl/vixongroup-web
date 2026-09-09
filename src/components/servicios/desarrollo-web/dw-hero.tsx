import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { HeroWords } from "@/components/motion/hero-words";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { dwHeroStats } from "@/content/desarrollo-web";

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

      <Container className="relative z-10 flex flex-1 flex-col gap-6 py-8 md:py-7 lg:py-8">
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-lg lg:max-w-xl">
            <Eyebrow className="hero-fade">
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
            <div className="hero-fade hero-fade-3 mt-5 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contacto">
                  Cuéntanos tu proyecto
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

        <div className="hero-fade hero-fade-4 border-t border-white/10 pt-4">
          <div className="grid grid-cols-2 gap-y-3 md:grid-cols-4 md:divide-x md:divide-white/10">
            {dwHeroStats.map((item) => {
              const Icon = statIcons[item.icon];
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 md:px-4 md:first:pl-0 md:last:pr-0"
                >
                  <Icon
                    className="size-5 shrink-0 text-[#00c8ea] sm:size-6"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="text-[0.85rem] font-semibold tracking-tight text-foreground">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

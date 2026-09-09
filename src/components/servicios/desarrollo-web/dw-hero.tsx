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

const statIcons = {
  bars: BarChart3,
  users: Users,
  cart: ShoppingCart,
  trending: TrendingUp,
} as const;

export function DwHero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <Container className="relative z-10 py-12 md:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-12">
          <div className="max-w-xl">
            <Eyebrow className="hero-fade text-[#00c8ea]">
              Servicios / Desarrollo Web &amp; E-commerce
            </Eyebrow>
            <HeroWords
              words="Sitios web que"
              accent="impulsan negocios"
              className="mt-3 text-[1.85rem] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.55rem] lg:leading-[1.08]"
            />
            <p className="hero-fade hero-fade-2 mt-4 max-w-md text-sm leading-relaxed text-foreground/75 md:text-[0.95rem]">
              Diseñamos y desarrollamos sitios web y tiendas online que combinan
              estrategia, diseño, tecnología y rendimiento, para ayudarte a
              atraer más clientes, generar oportunidades y aumentar tus ventas.
            </p>

            <ul className="hero-fade hero-fade-3 mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 sm:gap-x-3">
              {dwHeroStats.map((item) => {
                const Icon = statIcons[item.icon];
                return (
                  <li key={item.label} className="flex items-center gap-2">
                    <Icon
                      className="size-5 shrink-0 text-[#00c8ea]"
                      strokeWidth={1.75}
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

          <div className="relative mx-auto aspect-4/3 w-full max-w-lg lg:mx-0 lg:max-w-none">
            <Image
              src="/home/img-hero-home.jpg"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain object-center"
              aria-hidden
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

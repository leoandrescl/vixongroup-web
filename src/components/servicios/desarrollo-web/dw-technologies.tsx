import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { ArrowRight, Check, Plus } from "lucide-react";
import {
  AwsLogo,
  LaravelLogo,
  MySqlLogo,
  NextjsLogo,
  ReactLogo,
  ShopifyLogo,
  WooCommerceLogo,
  WordPressLogo,
} from "@/components/icons/tech-stack-logos";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { dwTechnologies } from "@/content/desarrollo-web";
import { cn } from "@/lib/utils";

const logos = {
  wordpress: WordPressLogo,
  woocommerce: WooCommerceLogo,
  shopify: ShopifyLogo,
  react: ReactLogo,
  nextjs: NextjsLogo,
  laravel: LaravelLogo,
  mysql: MySqlLogo,
  aws: AwsLogo,
} as const satisfies Record<
  (typeof dwTechnologies)[number]["id"],
  ComponentType<SVGProps<SVGSVGElement>>
>;

export function DwTechnologies() {
  return (
    <Section className="relative isolate scroll-mt-24 overflow-hidden">
      <div
        className="pointer-events-none absolute top-10 left-1/4 size-[26rem] rounded-full bg-brand/10 blur-[120px]"
        aria-hidden
      />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <Reveal>
            <h2 className="max-w-md text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              Tecnología que se adapta{" "}
              <span className="text-[#00c8ea]">a tu proyecto.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/70 md:text-[0.95rem]">
              Utilizamos las mejores herramientas del mercado y elegimos la
              tecnología más adecuada según los objetivos, funcionalidades y
              proyección de cada proyecto.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {dwTechnologies.map((tech, index) => {
              const Logo = logos[tech.id];
              return (
                <Reveal key={tech.id} delay={index * 30}>
                  <article className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-[#0a101c] px-3 py-5 text-center shadow-[0_12px_40px_-28px_rgba(0,0,0,0.6)]">
                    <Logo
                      className={cn(
                        "size-8 sm:size-9",
                        tech.tone === "white" &&
                          "[&_path]:fill-white [&_ellipse]:fill-white",
                      )}
                    />
                    <span className="text-[0.7rem] font-semibold tracking-wide text-foreground/85 sm:text-[0.75rem]">
                      {tech.label}
                    </span>
                  </article>
                </Reveal>
              );
            })}

            <Reveal delay={dwTechnologies.length * 30}>
              <article className="col-span-2 flex flex-col justify-between gap-4 rounded-2xl border border-[#00c8ea]/30 bg-[#0a101c] p-4 sm:col-span-3 sm:flex-row sm:items-center sm:p-5">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#00c8ea]/15 text-[#00c8ea]">
                    <Check className="size-4" strokeWidth={2.5} aria-hidden />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    Y muchas más tecnologías. Siempre evaluamos la mejor opción
                    para tu negocio.
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="inline-flex size-10 shrink-0 items-center justify-center self-end rounded-full bg-[#00c8ea] text-[#041018] transition-colors hover:bg-[#00c8ea]/90 sm:self-auto"
                  aria-label="Consultar más tecnologías"
                >
                  <Plus className="size-5" aria-hidden />
                </Link>
              </article>
            </Reveal>
          </div>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex justify-start lg:mt-12">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00c8ea] transition-colors hover:text-[#00c8ea]/80"
            >
              Hablemos de tu stack
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

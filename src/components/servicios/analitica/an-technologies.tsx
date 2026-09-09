import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { Check, Plus } from "lucide-react";
import {
  GaLogo,
  GoogleAdsLogo,
  GtmLogo,
  HubSpotLogo,
  LookerLogo,
  MetaPixelLogo,
  ShopifyLogo,
  WooCommerceLogo,
} from "@/components/icons/tech-stack-logos";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { anTechnologies } from "@/content/analitica";

const logos = {
  ga: GaLogo,
  gtm: GtmLogo,
  metapixel: MetaPixelLogo,
  googleads: GoogleAdsLogo,
  looker: LookerLogo,
  hubspot: HubSpotLogo,
  shopify: ShopifyLogo,
  woocommerce: WooCommerceLogo,
} as const satisfies Record<
  (typeof anTechnologies.items)[number]["id"],
  ComponentType<SVGProps<SVGSVGElement>>
>;

export function AnTechnologies() {
  return (
    <Section className="scroll-mt-24 bg-background">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-14">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">{anTechnologies.eyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              {anTechnologies.titleBefore}{" "}
              <span className="text-[#00c8ea]">
                {anTechnologies.titleAccent}
              </span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/70 md:text-[0.95rem]">
              {anTechnologies.description}
            </p>
          </Reveal>

          <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_11.5rem] lg:gap-5">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-3">
              {anTechnologies.items.map((tech, index) => {
                const Logo = logos[tech.id];
                return (
                  <Reveal key={tech.id} delay={index * 25}>
                    <article className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-[#121826] px-2 text-center ring-1 ring-white/8">
                      <Logo className="h-8 w-auto max-w-[4.25rem] object-contain sm:h-9 sm:max-w-[4.75rem]" />
                      <span className="text-[0.65rem] font-semibold tracking-wide text-foreground/80 sm:text-[0.7rem]">
                        {tech.label}
                      </span>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={200}>
              <aside className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-[#121826] p-5 ring-1 ring-[#00c8ea]/35">
                <div className="space-y-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#00c8ea]/15 text-[#00c8ea]">
                    <Check className="size-4" strokeWidth={2.5} aria-hidden />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {anTechnologies.aside}
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="inline-flex size-10 items-center justify-center self-end rounded-full bg-[#00c8ea] text-[#041018] transition-colors hover:bg-[#00c8ea]/90"
                  aria-label="Consultar más herramientas"
                >
                  <Plus className="size-5" aria-hidden />
                </Link>
              </aside>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

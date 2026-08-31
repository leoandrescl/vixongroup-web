import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { marketingScope, softwareScope } from "@/content/services";

const pillars = [
  {
    href: "/servicios#software",
    eyebrow: "Ingeniería y desarrollo",
    eyebrowClass: "text-brand",
    title: "Software y e-commerce",
    items: softwareScope,
    iconClass: "text-brand",
  },
  {
    href: "/servicios#marketing",
    eyebrow: "Marketing, growth y diseño",
    eyebrowClass: "text-marketing",
    title: "Marketing digital",
    items: marketingScope,
    iconClass: "text-marketing",
    linkClass: "text-marketing",
  },
] as const;

export function ServicePillars() {
  return (
    <Section>
      <Container>
        <Reveal>
          <Eyebrow>Resumen de servicios</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Soluciones integrales para crear, conectar y hacer{" "}
            <span className="text-brand">crecer</span> tu negocio digital.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.href} delay={index * 80}>
              <article className="h-full rounded-3xl bg-surface p-8 ring-1 ring-white/8 transition-transform duration-500 ease-out-expo hover:-translate-y-1">
                <p
                  className={`text-xs font-semibold tracking-[0.18em] uppercase ${pillar.eyebrowClass}`}
                >
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{pillar.title}</h3>
                <ul className="mt-6 space-y-3">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${pillar.iconClass}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pillar.href}
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:underline ${"linkClass" in pillar ? pillar.linkClass : "text-brand"}`}
                >
                  Ver todos los servicios
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

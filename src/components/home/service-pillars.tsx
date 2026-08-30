import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { marketingScope, softwareScope } from "@/content/services";

export function ServicePillars() {
  return (
    <Section>
      <Container>
        <Eyebrow>Resumen de servicios</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Soluciones integrales para crear, conectar y hacer{" "}
          <span className="text-brand">crecer</span> tu negocio digital.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-surface p-8 ring-1 ring-white/8">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
              Ingeniería y desarrollo
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Software y e-commerce</h3>
            <ul className="mt-6 space-y-3">
              {softwareScope.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/servicios#software"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Ver todos los servicios
              <ArrowRight className="size-4" />
            </Link>
          </article>
          <article className="rounded-3xl bg-surface p-8 ring-1 ring-white/8">
            <p className="text-xs font-semibold tracking-[0.18em] text-marketing uppercase">
              Marketing, growth y diseño
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Marketing digital</h3>
            <ul className="mt-6 space-y-3">
              {marketingScope.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-marketing" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/servicios#marketing"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-marketing hover:underline"
            >
              Ver todos los servicios
              <ArrowRight className="size-4" />
            </Link>
          </article>
        </div>
      </Container>
    </Section>
  );
}

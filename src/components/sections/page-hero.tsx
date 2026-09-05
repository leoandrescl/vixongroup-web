import type { ReactNode } from "react";
import {
  CheckCircle2,
  Code2,
  Layers,
  Mail,
  MessageCircle,
  Rocket,
  Users,
} from "lucide-react";
import { HeroWords } from "@/components/motion/hero-words";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export type PageHeroVisual = "servicios" | "nosotros" | "contacto";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
  tone?: "dark" | "canvas";
  visual?: PageHeroVisual;
};

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  tone = "dark",
  visual,
}: PageHeroProps) {
  if (!visual) {
    return (
      <section
        className={cn(
          "pt-20 pb-16 md:pt-28 md:pb-24",
          tone === "canvas" ? "bg-canvas text-canvas-foreground" : "bg-background",
        )}
      >
        <Container className="max-w-3xl">
          {eyebrow ? <Eyebrow className="hero-fade">{eyebrow}</Eyebrow> : null}
          <HeroWords
            words={title}
            accent={accent}
            className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          />
          <p
            className={cn(
              "hero-fade hero-fade-2 mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
              tone === "canvas"
                ? "text-canvas-foreground/70"
                : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(0_163_173_/_0.18),transparent_55%)]" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          {eyebrow ? <Eyebrow className="hero-fade">{eyebrow}</Eyebrow> : null}
          <HeroWords
            words={title}
            accent={accent}
            className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          />
          <p className="hero-fade hero-fade-2 mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
        <div className="hero-fade hero-fade-2">
          <HeroVisual kind={visual} />
        </div>
      </Container>
    </section>
  );
}

function HeroVisual({ kind }: { kind: PageHeroVisual }) {
  switch (kind) {
    case "servicios":
      return <ServiciosVisual />;
    case "nosotros":
      return <NosotrosVisual />;
    case "contacto":
      return <ContactoVisual />;
  }
}

function DeviceShell({
  children,
  float,
}: {
  children: ReactNode;
  float?: ReactNode;
}) {
  return (
    <div className="hero-float relative mx-auto w-full max-w-lg">
      <div className="rounded-2xl border border-white/10 bg-surface p-3 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-1.5 px-2 pb-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-brand/80" />
        </div>
        <div className="rounded-xl bg-[#0a0e16] p-4">{children}</div>
      </div>
      {float}
    </div>
  );
}

function ServiciosVisual() {
  return (
    <DeviceShell
      float={
        <div className="absolute -right-2 -bottom-5 w-32 rounded-2xl border border-white/10 bg-surface p-2 shadow-xl">
          <div className="rounded-xl bg-[#0a0e16] p-3">
            <p className="text-[0.6rem] text-muted-foreground">Entregables</p>
            <p className="text-sm font-semibold text-brand">Todo acordado</p>
          </div>
        </div>
      }
    >
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.65rem] tracking-widest text-muted-foreground uppercase">
              Alcance integral
            </p>
            <p className="text-lg font-semibold">2 pilares · 1 equipo</p>
          </div>
          <Layers className="size-5 text-brand" aria-hidden />
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-brand/10 p-3 ring-1 ring-brand/20">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand">
              <Code2 className="size-3.5" aria-hidden />
              Software
            </div>
            <ul className="mt-2 space-y-1 text-[0.7rem] text-muted-foreground">
              <li>Web & e-commerce</li>
              <li>APIs e integraciones</li>
              <li>Core Web Vitals</li>
            </ul>
          </div>
          <div className="rounded-lg bg-marketing/10 p-3 ring-1 ring-marketing/20">
            <div className="flex items-center gap-2 text-xs font-semibold text-marketing">
              <Rocket className="size-3.5" aria-hidden />
              Marketing
            </div>
            <ul className="mt-2 space-y-1 text-[0.7rem] text-muted-foreground">
              <li>Ads & SEO</li>
              <li>CRO continuo</li>
              <li>Atribución limpia</li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-[0.65rem] text-muted-foreground">Metodología</p>
          <div className="mt-2 flex h-1.5 overflow-hidden rounded-full bg-white/10">
            {[1, 2, 3, 4, 5, 6, 7].map((step) => (
              <div
                key={step}
                className="hero-bar-x h-full flex-1 border-r border-[#0a0e16] last:border-0 bg-brand/80"
                style={{
                  opacity: step <= 4 ? 0.9 : 0.2,
                  animationDelay: `${500 + step * 60}ms`,
                }}
              />
            ))}
          </div>
          <p className="mt-2 text-[0.7rem] text-muted-foreground">
            Auditoría → estrategia → implementación
          </p>
        </div>
      </div>
    </DeviceShell>
  );
}

function NosotrosVisual() {
  return (
    <DeviceShell
      float={
        <div className="absolute -right-2 -top-3 w-36 rounded-2xl border border-white/10 bg-surface p-2 shadow-xl">
          <div className="rounded-xl bg-[#0a0e16] p-3">
            <p className="text-[0.6rem] text-muted-foreground">Estándar</p>
            <p className="text-sm font-semibold text-brand">Calidad 2026</p>
          </div>
        </div>
      }
    >
      <div className="grid gap-3">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[0.65rem] tracking-widest text-muted-foreground uppercase">
              Equipo de producto
            </p>
            <p className="text-lg font-semibold leading-snug">
              Más socios, menos proveedores
            </p>
          </div>
          <Users className="size-5 shrink-0 text-brand" aria-hidden />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Ingeniería", value: "Producto" },
            { label: "Growth", value: "Pipeline" },
            { label: "UX / UI", value: "Sistemas" },
            { label: "Ops", value: "Calidad" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="hero-bar rounded-lg bg-white/5 px-3 py-2"
              style={{ animationDelay: `${500 + i * 60}ms` }}
            >
              <p className="text-[0.6rem] text-muted-foreground">{item.label}</p>
              <p className="text-sm font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-brand/10 p-3 ring-1 ring-brand/20">
          <p className="text-[0.65rem] text-muted-foreground">Principio</p>
          <p className="mt-1 text-sm leading-snug">
            Trabajamos contigo en lo que necesites: producto, marketing o ambos.
          </p>
        </div>
      </div>
    </DeviceShell>
  );
}

function ContactoVisual() {
  return (
    <DeviceShell
      float={
        <div className="absolute -bottom-4 -left-3 hidden w-40 rounded-2xl border border-white/10 bg-surface p-3 shadow-xl sm:block">
          <div className="flex items-center gap-2 text-xs">
            <CheckCircle2 className="size-4 text-brand" />
            Sin compromiso de venta
          </div>
        </div>
      }
    >
      <div className="grid gap-3">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[0.65rem] tracking-widest text-muted-foreground uppercase">
              Primera reunión
            </p>
            <p className="text-2xl font-semibold text-brand">&lt; 24 h</p>
          </div>
          <Mail className="size-5 text-brand" aria-hidden />
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-[0.65rem] text-muted-foreground">Agenda típica</p>
          <div className="mt-2 space-y-2">
            {[
              { step: "01", label: "Objetivo y alcance" },
              { step: "02", label: "Riesgos y stack" },
              { step: "03", label: "Siguiente paso concreto" },
            ].map((item, i) => (
              <div
                key={item.step}
                className="hero-bar flex items-center gap-3"
                style={{ animationDelay: `${520 + i * 70}ms` }}
              >
                <span className="flex size-7 items-center justify-center rounded-md bg-brand/15 text-[0.65rem] font-semibold text-brand">
                  {item.step}
                </span>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-white/5 px-3 py-2">
            <p className="text-[0.6rem] text-muted-foreground">Canal</p>
            <p className="text-sm font-semibold">Formulario</p>
          </div>
          <div className="rounded-lg bg-marketing/10 px-3 py-2 ring-1 ring-marketing/20">
            <p className="text-[0.6rem] text-muted-foreground">Alternativa</p>
            <p className="flex items-center gap-1.5 text-sm font-semibold text-marketing">
              <MessageCircle className="size-3.5" aria-hidden />
              WhatsApp
            </p>
          </div>
        </div>
      </div>
    </DeviceShell>
  );
}

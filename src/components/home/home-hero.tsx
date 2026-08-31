import Link from "next/link";
import { ArrowRight, CheckCircle2, FolderKanban, Handshake, Timer, Users } from "lucide-react";
import { HeroWords } from "@/components/motion/hero-words";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { Eyebrow } from "@/components/ui/section";
import { homeStats } from "@/content/site";

const statIcons = [FolderKanban, Users, Timer, Handshake];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(0_163_173_/_0.18),transparent_55%)]" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow className="hero-fade">Agencia tecnológica integral</Eyebrow>
          <HeroWords
            words="Tecnología que funciona. Marketing que la hace"
            accent="crecer."
            className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          />
          <p className="hero-fade hero-fade-2 mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Diseñamos y construimos productos digitales de alto rendimiento, y
            los conectamos a estrategias de growth que se miden en ventas,
            leads y velocidad — no en vanidad.
          </p>
          <div className="hero-fade hero-fade-3 mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contacto">
                Hablemos de tu proyecto
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portafolio">Ver proyectos</Link>
            </Button>
          </div>
        </div>
        <div className="hero-fade hero-fade-2">
          <DeviceShowcase />
        </div>
      </Container>
      <Container className="hero-fade hero-fade-4 relative mt-14 grid grid-cols-2 gap-6 border-t border-white/8 pt-8 md:grid-cols-4">
        {homeStats.map((stat, index) => {
          const Icon = statIcons[index];
          return (
            <div key={stat.label} className="flex items-start gap-3">
              {Icon ? (
                <Icon className="mt-0.5 size-5 text-brand" aria-hidden />
              ) : null}
              <div>
                <p className="text-xl font-semibold">
                  <AnimatedStat value={stat.value} />
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}

function DeviceShowcase() {
  return (
    <div className="hero-float relative mx-auto w-full max-w-lg">
      <div className="rounded-2xl border border-white/10 bg-surface p-3 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-1.5 px-2 pb-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-brand/80" />
        </div>
        <div className="grid gap-3 rounded-xl bg-[#0a0e16] p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                Revenue
              </p>
              <p className="text-2xl font-semibold text-brand">+38.4%</p>
            </div>
            <p className="text-xs text-muted-foreground">LCP 1.9s</p>
          </div>
          <div className="flex h-24 items-end gap-1.5">
            {[40, 55, 42, 70, 62, 88, 76, 94].map((h, i) => (
              <div
                key={i}
                className="flex flex-1 items-end"
                style={{ height: `${h}%` }}
              >
                <div
                  className="hero-bar h-full w-full rounded-sm bg-brand/80"
                  style={{
                    opacity: 0.45 + i * 0.07,
                    animationDelay: `${620 + i * 55}ms`,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "ROAS", value: "4.7x" },
              { label: "Conv.", value: "3.1%" },
              { label: "NPS", value: "72" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg bg-white/5 px-2 py-2"
              >
                <p className="text-[0.6rem] text-muted-foreground">{kpi.label}</p>
                <p className="text-sm font-semibold">{kpi.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -right-2 -bottom-6 w-28 rounded-2xl border border-white/10 bg-surface p-2 shadow-xl md:w-32">
        <div className="rounded-xl bg-[#0a0e16] p-3">
          <p className="text-[0.6rem] text-muted-foreground">Campañas</p>
          <p className="text-sm font-semibold text-marketing">Activas 12</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="hero-bar-x h-full w-2/3 rounded-full bg-marketing"
              style={{ animationDelay: "0.9s" }}
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -left-3 hidden w-36 rounded-2xl border border-white/10 bg-surface p-3 shadow-xl sm:block">
        <div className="flex items-center gap-2 text-xs">
          <CheckCircle2 className="size-4 text-brand" />
          Core Web Vitals
        </div>
      </div>
    </div>
  );
}

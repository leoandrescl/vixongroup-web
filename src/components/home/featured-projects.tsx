import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Star,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Tilt } from "@/components/motion/tilt";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  categoryLabels,
  getFeaturedProjects,
  type Project,
} from "@/content/projects";
import { cn } from "@/lib/utils";

const sectionStats = [
  {
    icon: BarChart3,
    value: "+120",
    labelLines: ["Proyectos", "desarrollados"] as const,
  },
  {
    icon: Users,
    value: "+80",
    labelLines: ["Clientes", "satisfechos"] as const,
  },
  {
    icon: Star,
    value: "5+",
    labelLines: ["Años de", "experiencia"] as const,
  },
] as const;

const trustedBrands = [
  { name: "San Mateo" },
  { name: "Sorteo Seguro" },
  { name: "Allisone" },
  { name: "Pagate" },
  { name: "Layer07" },
] as const;

function DeviceMockup({ project }: { project: Project }) {
  const desktop = project.gallery[0] ?? project.cover;
  const mobile = project.gallery[1] ?? project.cover;

  return (
    <div className="relative isolate overflow-hidden rounded-t-2xl bg-[#0a121c] pt-8 pb-5 pl-5 pr-4 md:pt-9 md:pb-6 md:pl-6">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 42% 40%, rgb(0 163 173 / 0.28), transparent 62%),
            radial-gradient(ellipse 50% 45% at 78% 70%, rgb(0 163 173 / 0.12), transparent 55%),
            linear-gradient(180deg, #152433 0%, #0a121c 100%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#0d141d] to-transparent"
        aria-hidden
      />

      <div className="relative flex items-end gap-0">
        {/* Laptop */}
        <div className="relative z-0 w-[78%] shrink-0">
          <div className="overflow-hidden rounded-t-[0.45rem] border border-white/15 bg-[#111821] shadow-[0_18px_40px_-12px_rgb(0_0_0_/_0.75)]">
            <div className="flex h-2.5 items-center justify-center border-b border-white/8 bg-[#0c1118]">
              <span className="h-1 w-10 rounded-full bg-white/12" />
            </div>
            <div className="relative aspect-16/10 bg-white">
              <Image
                src={desktop.src}
                alt={desktop.alt}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1280px) 40vw, 22vw"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="relative h-2 w-full rounded-b-[0.35rem] bg-linear-to-b from-[#3a4454] via-[#2a3342] to-[#1c2430]" />
          <div className="mx-auto -mt-px h-1 w-[22%] rounded-b-[0.2rem] bg-[#151b24]" />
        </div>

        {/* Phone */}
        <div className="relative z-10 -ml-[18%] mb-1 w-[34%] shrink-0">
          <div className="overflow-hidden rounded-[1.25rem] border-[2.5px] border-[#2a3342] bg-[#0b0f14] p-[3px] shadow-[0_22px_44px_-10px_rgb(0_0_0_/_0.9)]">
            <div className="relative mx-auto mt-1 mb-1.5 h-1 w-7 rounded-full bg-white/20" />
            <div className="relative aspect-9/17 overflow-hidden rounded-[1rem] bg-white">
              <Image
                src={mobile.src}
                alt={mobile.alt}
                fill
                sizes="(max-width: 768px) 35vw, 12vw"
                className="object-cover object-top"
              />
            </div>
            <div className="mx-auto mt-1.5 mb-0.5 h-0.5 w-8 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const tags = (project.tags ?? project.stack).slice(0, 4);
  const metrics = project.metrics.slice(0, 3);
  const sector = project.sector ?? categoryLabels[project.category];

  return (
    <Tilt>
      <article
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-2xl bg-[#0d141d] ring-1 ring-white/8 transition-[box-shadow,transform] duration-500 ease-out-expo hover:shadow-[0_28px_56px_-28px_rgb(0_163_173_/_0.4)]",
          className,
        )}
      >
        <DeviceMockup project={project} />

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-brand uppercase">
            {sector}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
            {project.client}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {metrics.map((metric) => (
              <div
                key={`${metric.value}-${metric.label}`}
                className="rounded-lg bg-[#0a1018] px-2 py-2.5 text-center ring-1 ring-white/8"
              >
                <p className="text-sm font-semibold text-brand tabular-nums md:text-[0.95rem]">
                  {metric.value}
                </p>
                <p className="mt-0.5 text-[0.6rem] leading-snug text-muted-foreground md:text-[0.65rem]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground ring-1 ring-white/6"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/portafolio/${project.slug}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors duration-300 ease-out-expo hover:text-brand/80"
          >
            Ver proyecto
            <ArrowRight className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5" />
          </Link>
        </div>
      </article>
    </Tilt>
  );
}

export function FeaturedProjects() {
  const featured = getFeaturedProjects(3);

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-xl">
            <Eyebrow>Proyectos destacados</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
              Ideas que se convierten en{" "}
              <span className="bg-linear-to-r from-[#00cfd5] via-brand to-[#7ef0f5] bg-clip-text text-transparent">
                resultados reales.
              </span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              Casos reales de clientes que confían en nosotros para transformar
              su presencia digital y acelerar resultados de negocio.
            </p>
          </Reveal>

          <Reveal delay={80} className="shrink-0">
            <div className="flex flex-col gap-6 sm:items-end">
              <Button asChild variant="outline" size="lg">
                <Link href="/portafolio">
                  Ver todos los proyectos
                  <ArrowRight />
                </Link>
              </Button>
              <div className="flex flex-wrap items-center sm:justify-end">
                {sectionStats.map((stat) => (
                  <div
                    key={stat.labelLines.join(" ")}
                    className="flex items-center gap-2.5 border-white/15 px-4 first:pl-0 not-last:border-r sm:px-5"
                  >
                    <stat.icon
                      className="size-8 shrink-0 text-brand"
                      aria-hidden
                    />
                    <div>
                      <p className="text-lg font-semibold tracking-tight text-white">
                        <AnimatedStat value={stat.value} />
                      </p>
                      <p className="mt-0.5 text-[0.7rem] leading-snug text-muted-foreground">
                        {stat.labelLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <FeaturedProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/8 pt-8 sm:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <p className="shrink-0 text-[0.65rem] font-semibold tracking-[0.18em] text-brand uppercase whitespace-nowrap">
              Marcas que confían en nosotros
            </p>

            <ul className="flex min-w-0 flex-1 flex-wrap items-center justify-start gap-y-3 lg:justify-center">
              {trustedBrands.map((brand) => (
                <li
                  key={brand.name}
                  className="flex items-center border-white/15 px-4 first:pl-0 not-last:border-r sm:px-5 md:px-6"
                >
                  <span className="text-sm font-semibold tracking-wide whitespace-nowrap text-white/70 transition-colors duration-300 hover:text-white md:text-[0.95rem]">
                    {brand.name}
                  </span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="shrink-0 self-start lg:self-center">
              <Link href="/contacto">
                Hablemos de tu proyecto
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

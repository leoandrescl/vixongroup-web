import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Cloud,
  Code2,
  FileText,
  Handshake,
  MessageCircle,
  MonitorSmartphone,
  Megaphone,
  Rocket,
  Timer,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  collaborationCopy,
  collaborationSteps,
  teamCapabilities,
  teamSectionCopy,
  teamStats,
} from "@/content/team";
import { cn } from "@/lib/utils";

const capabilityIcons: Record<
  (typeof teamCapabilities)[number]["icon"],
  LucideIcon
> = {
  code: Code2,
  design: MonitorSmartphone,
  megaphone: Megaphone,
  chart: BarChart3,
  cloud: Cloud,
  users: Users,
};

const statIcons: Record<(typeof teamStats)[number]["icon"], LucideIcon> = {
  clients: Users,
  projects: BriefcaseBusiness,
  experience: Timer,
  commitment: Handshake,
};

const stepIcons: Record<(typeof collaborationSteps)[number]["icon"], LucideIcon> =
  {
    meeting: MessageCircle,
    proposal: FileText,
    launch: Rocket,
  };

const glassBox =
  "rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur-md shadow-[0_16px_40px_-28px_rgb(0_163_173_/_0.45)]";

export function NuestroEquipo() {
  return (
    <>
      <Section id="equipo" className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="absolute top-24 right-0 size-[26rem] rounded-full bg-brand/10 blur-[120px]" />
          <div className="absolute bottom-10 left-1/4 size-[20rem] -translate-x-1/2 rounded-full bg-brand/8 blur-[100px]" />
        </div>

        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
            <div>
              <Reveal>
                <Eyebrow>{teamSectionCopy.eyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.55rem] lg:leading-[1.15]">
                  {teamSectionCopy.titleBefore}
                  <span className="bg-linear-to-r from-brand to-[#4fd1c5] bg-clip-text text-transparent">
                    {teamSectionCopy.titleAccent}
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                  {teamSectionCopy.description}
                </p>
              </Reveal>

              <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {teamCapabilities.map((item, index) => {
                  const Icon = capabilityIcons[item.icon];
                  return (
                    <Reveal key={item.title} delay={index * 50}>
                      <article
                        className={cn(
                          glassBox,
                          "group h-full p-4 transition-[transform,border-color,background-color] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-brand/35 hover:bg-brand/[0.06]",
                        )}
                      >
                        <Icon
                          className="size-10 text-brand drop-shadow-[0_0_10px_rgb(0_163_173_/_0.45)] transition-transform duration-500 ease-out-expo group-hover:scale-110"
                          strokeWidth={1.6}
                          aria-hidden
                        />
                        <h3 className="mt-3 text-sm font-semibold tracking-tight md:text-[0.95rem]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={340}>
                <Button asChild size="lg" className="mt-9">
                  <Link href={teamSectionCopy.ctaHref}>
                    {teamSectionCopy.cta}
                    <ArrowRight />
                  </Link>
                </Button>
              </Reveal>
            </div>

            <Reveal delay={100} className="lg:sticky lg:top-28">
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
                  {/* Solo máscara de opacidad: la foto se funde con el fondo */}
                  <div className="team-photo-fade absolute inset-0">
                    <Image
                      src={teamSectionCopy.photo.src}
                      alt={teamSectionCopy.photo.alt}
                      fill
                      className="object-cover object-[center_20%]"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>

                  <p
                    className="pointer-events-none absolute top-1/2 right-2 z-10 hidden -translate-y-1/2 select-none text-[0.65rem] font-semibold tracking-[0.35em] text-brand/45 uppercase [writing-mode:vertical-rl] sm:right-3 sm:block md:text-xs"
                    aria-hidden
                  >
                    {teamSectionCopy.photoTags.join(" · ")}
                  </p>
                </div>

                <div className="relative z-10 -mt-28 grid grid-cols-2 gap-3 px-2 sm:-mt-32 sm:gap-3.5 sm:px-4 lg:absolute lg:inset-x-4 lg:bottom-4 lg:mt-0 lg:px-0">
                  {teamStats.map((stat, index) => {
                    const Icon = statIcons[stat.icon];
                    return (
                      <Reveal key={stat.label} delay={160 + index * 55}>
                        <div
                          className={cn(
                            "rounded-2xl border border-brand/40 bg-background/60 p-3.5 shadow-[0_18px_40px_-22px_rgb(0_0_0_/_0.85)] backdrop-blur-xl sm:p-4",
                            "transition-[transform,border-color] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-brand/60",
                          )}
                        >
                          <Icon
                            className="size-8 text-brand drop-shadow-[0_0_8px_rgb(0_163_173_/_0.55)]"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                          <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                            <AnimatedStat value={stat.value} />
                          </p>
                          <p className="mt-1 text-[0.7rem] leading-snug text-white/80 sm:text-xs">
                            {stat.label}
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <section className="pb-20 md:pb-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-brand/25 bg-surface/90 shadow-[0_30px_80px_-40px_rgb(0_163_173_/_0.55)] backdrop-blur-md">
              <div
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-brand to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -top-28 left-1/2 h-56 w-[75%] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-brand/15"
                aria-hidden
              />

              <div className="relative grid gap-10 px-5 py-7 md:px-7 md:py-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12 lg:px-9">
                <div>
                  <Eyebrow>{collaborationCopy.eyebrow}</Eyebrow>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-balance md:text-3xl">
                    {collaborationCopy.title}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {collaborationCopy.description}
                  </p>
                  <Button asChild size="lg" className="mt-7">
                    <Link href={collaborationCopy.ctaHref}>
                      {collaborationCopy.cta}
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>

                <ol className="grid gap-6 sm:grid-cols-3 sm:gap-0">
                  {collaborationSteps.map((step, index) => {
                    const Icon = stepIcons[step.icon];
                    return (
                      <li
                        key={step.title}
                        className={cn(
                          "relative sm:px-5 first:sm:pl-0 last:sm:pr-0",
                          index > 0 &&
                            "sm:before:absolute sm:before:top-1 sm:before:bottom-1 sm:before:left-0 sm:before:w-px sm:before:bg-white/12",
                        )}
                      >
                        <Icon
                          className="size-12 text-brand drop-shadow-[0_0_10px_rgb(0_163_173_/_0.4)]"
                          strokeWidth={1.6}
                          aria-hidden
                        />
                        <h3 className="mt-3 text-base font-semibold tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {step.body}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

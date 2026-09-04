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

const capabilityIcons: Record<(typeof teamCapabilities)[number]["icon"], LucideIcon> = {
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

const stepIcons: Record<(typeof collaborationSteps)[number]["icon"], LucideIcon> = {
  meeting: MessageCircle,
  proposal: FileText,
  launch: Rocket,
};

export function NuestroEquipo() {
  return (
    <>
      <Section id="equipo" className="overflow-hidden">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
            <div>
              <Reveal>
                <Eyebrow>{teamSectionCopy.eyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                  {teamSectionCopy.titleBefore}
                  <span className="text-brand">{teamSectionCopy.titleAccent}</span>
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {teamSectionCopy.description}
                </p>
              </Reveal>

              <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {teamCapabilities.map((item, index) => {
                  const Icon = capabilityIcons[item.icon];
                  return (
                    <Reveal key={item.title} delay={index * 55}>
                      <article className="group">
                        <Icon
                          className="size-6 text-brand transition-transform duration-500 ease-out-expo group-hover:scale-110"
                          strokeWidth={1.6}
                          aria-hidden
                        />
                        <h3 className="mt-3 text-base font-semibold tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={360}>
                <Button asChild size="lg" className="mt-10">
                  <Link href={teamSectionCopy.ctaHref}>
                    {teamSectionCopy.cta}
                    <ArrowRight />
                  </Link>
                </Button>
              </Reveal>
            </div>

            <Reveal delay={120} className="lg:sticky lg:top-28">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 sm:aspect-[5/6] lg:aspect-[4/5]">
                  <Image
                    src={teamSectionCopy.photo.src}
                    alt={teamSectionCopy.photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority={false}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-background/25 to-transparent"
                    aria-hidden
                  />
                </div>

                <div className="relative z-10 -mt-16 grid grid-cols-2 gap-3 px-3 sm:-mt-20 sm:gap-4 sm:px-5 lg:absolute lg:inset-x-5 lg:bottom-5 lg:mt-0 lg:px-0">
                  {teamStats.map((stat, index) => {
                    const Icon = statIcons[stat.icon];
                    return (
                      <Reveal key={stat.label} delay={180 + index * 60}>
                        <div className="rounded-2xl border border-white/15 bg-white/8 p-3.5 shadow-[0_16px_40px_-24px_rgb(0_0_0_/_0.7)] backdrop-blur-xl sm:p-4">
                          <Icon
                            className="size-4 text-brand"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                          <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
                            <AnimatedStat value={stat.value} />
                          </p>
                          <p className="mt-1 text-[0.7rem] leading-snug text-white/75 sm:text-xs">
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
            <div className="relative overflow-hidden rounded-[1.75rem] bg-surface ring-1 ring-white/10">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
                aria-hidden
              />

              <div className="relative grid gap-10 px-7 py-10 md:px-10 md:py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:px-12">
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
                        className="relative sm:px-5 first:sm:pl-0 last:sm:pr-0"
                      >
                        {index > 0 ? (
                          <span
                            className="absolute top-2 bottom-2 left-0 hidden w-px bg-white/10 sm:block"
                            aria-hidden
                          />
                        ) : null}
                        <Icon
                          className="size-6 text-brand"
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

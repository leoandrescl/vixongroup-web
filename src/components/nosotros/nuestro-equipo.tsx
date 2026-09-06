import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, MessageCircle, Rocket } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/social";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  collaborationCopy,
  collaborationSteps,
  team,
} from "@/content/team";
import { cn } from "@/lib/utils";

const stepIcons = {
  meeting: MessageCircle,
  proposal: FileText,
  launch: Rocket,
} as const;

export function NuestroEquipo() {
  return (
    <>
      <Section id="equipo" className="scroll-mt-24">
        <Container>
          <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
            <Reveal>
              <Eyebrow>Nuestro equipo</Eyebrow>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.55rem] lg:leading-[1.12]">
                Talento que{" "}
                <span className="text-brand">hace la diferencia.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.95rem] lg:justify-self-end lg:pb-1 lg:text-right">
                Un equipo multidisciplinario, creativo y comprometido, que
                trabaja para llevar cada proyecto al siguiente nivel.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 70}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-white/10 transition-transform duration-500 ease-out-expo hover:-translate-y-1">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={member.photo.src}
                      alt={member.photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-foreground/90 transition-colors duration-300 ease-out-expo hover:text-brand"
                    >
                      <LinkedInIcon className="size-4" />
                      LinkedIn
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
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

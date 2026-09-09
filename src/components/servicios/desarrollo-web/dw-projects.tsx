import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { dwRecentProjects } from "@/content/desarrollo-web";

export function DwProjects() {
  return (
    <Section className="scroll-mt-24 bg-white text-canvas-foreground">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">Proyectos recientes</Eyebrow>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              Ideas que ya son una realidad.
            </h2>
          </Reveal>
          <Reveal delay={50}>
            <Button
              asChild
              className="shrink-0 self-start bg-[#00c8ea] text-[#041018] hover:bg-[#00c8ea]/90 sm:self-auto"
            >
              <Link href="/portafolio">
                Ver todos los proyectos
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dwRecentProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 35}>
              <Link
                href={`/portafolio/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#f7fafb] transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(0,163,173,0.35)]"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-[#e8f0f3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-[0.95rem] font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                    <div className="flex min-w-0 flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#e6eef1] px-2.5 py-1 text-[0.65rem] font-medium text-canvas-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#00c8ea] text-[#041018] transition-colors group-hover:bg-[#00c8ea]/90">
                      <ArrowRight className="size-4" aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

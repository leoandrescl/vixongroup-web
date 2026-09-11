import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { softwareSolutionIcons } from "@/components/icons/software-solution-icons";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { smProjectTypes } from "@/content/software-medida";

export function SmProjectTypes() {
  return (
    <Section className="scroll-mt-24 bg-[#e8f7fb] text-canvas-foreground">
      <Container>
        <Reveal>
          <Eyebrow className="text-[#00c8ea]">{smProjectTypes.eyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
            {smProjectTypes.titleBefore}{" "}
            <span className="text-[#00c8ea]">{smProjectTypes.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:gap-4">
          {smProjectTypes.items.map((item, index) => {
            const Icon = softwareSolutionIcons[item.icon];

            return (
              <Reveal key={item.title} delay={index * 40}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_36px_-24px_rgba(15,23,42,0.28)]">
                  <div className="relative flex aspect-16/11 items-center justify-center overflow-hidden bg-[#d7f3f8]">
                    <span className="pointer-events-none absolute -top-8 -right-6 size-24 rounded-full bg-[#00c8ea]/16" />
                    <span className="pointer-events-none absolute -bottom-10 -left-8 size-28 rounded-full bg-white/55" />
                    <span className="relative flex size-[4.75rem] items-center justify-center rounded-2xl bg-white shadow-[0_10px_28px_-16px_rgba(0,200,234,0.7)] ring-1 ring-[#00c8ea]/18 transition-transform duration-500 ease-out group-hover:scale-105 sm:size-[5.15rem]">
                      <Icon className="size-[3.15rem] text-[#00c8ea] sm:size-[3.4rem]" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="text-[0.95rem] font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.78rem] leading-relaxed text-canvas-foreground/65">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-4 inline-flex size-9 items-center justify-center rounded-full bg-[#00c8ea] text-[#041018] transition-colors hover:bg-[#00c8ea]/90"
                      aria-label={`Consultar sobre ${item.title}`}
                    >
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { desarrolloWebFaqs } from "@/content/desarrollo-web";
import { cn } from "@/lib/utils";

export function DwFaq() {
  const left = desarrolloWebFaqs.slice(0, 3);
  const right = desarrolloWebFaqs.slice(3);

  return (
    <Section tone="canvas" className="scroll-mt-24 bg-white">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow className="text-[#00c8ea]">Preguntas frecuentes</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-canvas-foreground md:text-4xl">
              Resolvemos tus dudas.
            </h2>
          </Reveal>
          <Reveal delay={50}>
            <p className="max-w-xs text-sm leading-relaxed text-canvas-foreground/65 sm:text-right">
              Si tienes otra consulta,{" "}
              <Link
                href="/contacto"
                className="font-semibold text-[#00c8ea] hover:underline"
              >
                escríbenos
              </Link>{" "}
              y te ayudamos.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-2 lg:grid-cols-2">
          {[left, right].map((column, colIndex) => (
            <Reveal key={colIndex} delay={colIndex * 60}>
              <Accordion type="single" collapsible className="w-full">
                {column.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`dw-faq-${colIndex}-${index}`}
                    className="border-canvas-foreground/10"
                  >
                    <AccordionTrigger
                      className={cn(
                        "gap-4 py-5 text-[0.95rem] font-medium text-canvas-foreground hover:bg-transparent hover:text-[#00c8ea] hover:no-underline",
                        "**:data-[slot=accordion-trigger-icon]:hidden",
                      )}
                    >
                      <span className="flex min-w-0 flex-1 items-center justify-between gap-4 text-left">
                        <span className="leading-snug">{item.question}</span>
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-canvas-foreground/15 bg-white text-[#00c8ea] transition-transform group-aria-expanded/accordion-trigger:rotate-45">
                          <Plus className="size-4" strokeWidth={2.25} aria-hidden />
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pr-2 text-[0.9375rem] leading-relaxed text-canvas-foreground/65">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

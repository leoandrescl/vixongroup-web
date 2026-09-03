"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/content/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
  tone = "dark",
}: {
  items: FaqItem[];
  tone?: "dark" | "light";
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`faq-${index}`}
          className={
            tone === "light" ? "border-canvas-foreground/10" : undefined
          }
        >
          <AccordionTrigger
            className={cn(
              "text-base font-medium hover:bg-transparent hover:no-underline",
              tone === "light"
                ? "text-canvas-foreground hover:text-brand"
                : "text-foreground hover:text-brand",
            )}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "pr-10 text-[0.9375rem] leading-relaxed",
              tone === "light"
                ? "text-canvas-foreground/65"
                : "text-muted-foreground",
            )}
          >
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

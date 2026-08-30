"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Testimonial } from "@/content/testimonials";

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const item = items[index];

  if (!item) return null;

  const previous = () =>
    setIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  const next = () =>
    setIndex((current) => (current === items.length - 1 ? 0 : current + 1));

  return (
    <div className="rounded-3xl bg-surface p-8 ring-1 ring-white/8 md:p-12">
      <blockquote className="max-w-3xl text-xl leading-relaxed font-medium md:text-2xl">
        “{item.quote}”
      </blockquote>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-semibold">{item.author}</p>
          <p className="text-sm text-muted-foreground">{item.role}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={previous}
            aria-label="Testimonio anterior"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            aria-label="Testimonio siguiente"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Testimonio {index + 1} de {items.length}
      </p>
    </div>
  );
}

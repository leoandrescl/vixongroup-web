"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { homeStats } from "@/content/site";

function parseStat(value: string) {
  const match = value.match(/^(.*?)(\d+)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value };
  return {
    prefix: match[1],
    target: Number(match[2]),
    suffix: match[3],
  };
}

function AnimatedStat({ value }: { value: string }) {
  const { prefix, target, suffix } = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(Boolean(entry?.isIntersecting)),
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(target);
      return;
    }

    const duration = 1400;
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}

export function MetricsBlock() {
  return (
    <Section tone="canvas">
      <Container>
        <Eyebrow className="text-brand">Métricas e indicadores</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-canvas-foreground">
          Números que usamos para dirigir el trabajo, no para decorar un pitch.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <p className="text-3xl font-semibold text-brand">
                <AnimatedStat value={item.value} />
              </p>
              <p className="mt-2 text-sm text-canvas-foreground/65">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

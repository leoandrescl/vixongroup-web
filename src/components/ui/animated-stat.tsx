"use client";

import { useEffect, useRef, useState } from "react";

function parseStat(value: string) {
  const match = value.match(/^(.*?)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, decimals: 0, suffix: value };

  const numeric = match[2].replace(",", ".");
  const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;

  return {
    prefix: match[1],
    target: Number(numeric),
    decimals,
    suffix: match[3],
  };
}

function formatCount(current: number, decimals: number) {
  if (decimals > 0) return current.toFixed(decimals);
  return String(Math.round(current));
}

export function AnimatedStat({ value }: { value: string }) {
  const { prefix, target, decimals, suffix } = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [display, setDisplay] = useState(() => formatCount(0, decimals));

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
      setDisplay(formatCount(0, decimals));
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(formatCount(target, decimals));
      return;
    }

    const duration = 1400;
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(formatCount(target * eased, decimals));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, decimals]);

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

import { cn } from "@/lib/utils";

type BrandsMarqueeProps = {
  brands: readonly { name: string }[];
  className?: string;
  showMoreLabel?: boolean;
};

export function BrandsMarquee({
  brands,
  className,
  showMoreLabel = false,
}: BrandsMarqueeProps) {
  const items = showMoreLabel
    ? [...brands.map((b) => b.name), "Y muchos más…"]
    : brands.map((b) => b.name);
  const loop = [...items, ...items];

  return (
    <div className={cn("relative min-w-0 flex-1 overflow-hidden", className)}>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-background to-transparent sm:w-12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-background to-transparent sm:w-12"
        aria-hidden
      />
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {loop.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className={cn(
              "flex shrink-0 items-center border-white/15 px-5 text-sm font-semibold tracking-wide whitespace-nowrap not-last:border-r sm:px-6",
              name === "Y muchos más…"
                ? "text-xs text-muted-foreground"
                : "text-foreground/55",
            )}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

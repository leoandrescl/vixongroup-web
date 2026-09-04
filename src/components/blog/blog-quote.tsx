import type { BlogQuote } from "@/content/blog";
import { cn } from "@/lib/utils";

export function BlogQuoteBlock({
  quote,
  className,
}: {
  quote: BlogQuote;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "relative rounded-2xl bg-[#0a121e]/80 px-6 py-7 ring-1 ring-white/8 md:px-8 md:py-8",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-4 left-5 font-serif text-6xl leading-none text-brand/90 md:top-5 md:left-7 md:text-7xl"
      >
        “
      </span>
      <p className="relative pl-2 text-base leading-relaxed text-foreground italic md:pl-4 md:text-lg">
        {quote.text}
      </p>
      <footer className="relative mt-5 pl-2 text-sm md:pl-4">
        <cite className="not-italic">
          <span className="font-semibold text-foreground">
            {quote.attribution}
          </span>
          {quote.role ? (
            <span className="text-muted-foreground">, {quote.role}</span>
          ) : null}
        </cite>
      </footer>
    </blockquote>
  );
}

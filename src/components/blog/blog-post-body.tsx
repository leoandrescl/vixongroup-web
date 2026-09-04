import Image from "next/image";
import { blogFeatureIcons } from "@/components/blog/blog-feature-list";
import { BlogFeatureList } from "@/components/blog/blog-feature-list";
import { BlogQuoteBlock } from "@/components/blog/blog-quote";
import type { BlogPostBody } from "@/content/blog";

export function BlogPostBody({ body }: { body: BlogPostBody }) {
  return (
    <div className="space-y-10 md:space-y-12">
      {body.secondaryImage ? (
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
          <div className="relative aspect-[16/9] md:aspect-[2/1]">
            <Image
              src={body.secondaryImage.src}
              alt={body.secondaryImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#050a14]/55 via-[#050a14]/25 to-transparent"
            />
          </div>

          {body.toolChips && body.toolChips.length > 0 ? (
            <div className="absolute right-3 bottom-3 flex flex-col gap-2 sm:right-5 sm:bottom-5">
              {body.toolChips.map((chip) => {
                const Icon = blogFeatureIcons[chip.icon];
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-black/30"
                  >
                    <Icon className="size-3.5" aria-hidden />
                    {chip.label}
                  </span>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : null}

      {body.paragraphs?.map((paragraph) => (
        <p
          key={paragraph.slice(0, 48)}
          className="text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {paragraph}
        </p>
      ))}

      {body.sections.map((section) => (
        <section key={section.heading} className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {section.heading}
          </h2>
          {section.paragraphs?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-base leading-relaxed text-muted-foreground md:text-[1.05rem]"
            >
              {paragraph}
            </p>
          ))}
          {section.features ? (
            <BlogFeatureList items={section.features} />
          ) : null}
        </section>
      ))}

      {body.quote ? <BlogQuoteBlock quote={body.quote} /> : null}

      {body.closing?.map((paragraph) => (
        <p
          key={paragraph.slice(0, 48)}
          className="text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

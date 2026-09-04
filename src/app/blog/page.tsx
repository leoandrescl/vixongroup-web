import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  blogCategoryBadge,
  blogPosts,
  formatBlogDate,
} from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Blog",
  path: "/blog",
  description:
    "Tendencias, actualizaciones y oportunidades del mundo digital: Meta Ads, Google Ads, IA y marketing.",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Noticias que impulsan tu"
        accent="próximo proyecto."
        description="Tendencias, actualizaciones y oportunidades del mundo digital, para que tomes mejores decisiones."
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post, index) => {
              const badge = blogCategoryBadge[post.category];
              return (
                <Reveal key={post.slug} delay={index * 60}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-white/8 transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgb(0_163_173_/_0.45)]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden"
                    >
                      <Image
                        src={post.cover.src}
                        alt={post.cover.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                      />
                      <span
                        className={cn(
                          "absolute top-3 left-3 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.12em] uppercase shadow-sm",
                          badge.className,
                        )}
                      >
                        {badge.label}
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="transition-colors duration-300 ease-out-expo hover:text-brand"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-5">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="size-3.5" aria-hidden />
                            {formatBlogDate(post.date)}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="size-3.5" aria-hidden />
                            {post.readingMinutes} min de lectura
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-opacity duration-300 ease-out-expo hover:opacity-80"
                        >
                          Leer más
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { formatBlogDate, type BlogPost } from "@/content/blog";

export function BlogRecommendedSection({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <Section className="pt-0 md:pt-4">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Artículos recomendados
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors duration-300 ease-out-expo hover:text-brand/80"
          >
            Ver todas las noticias
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 60}>
              <article className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/10">
                    <Image
                      src={post.cover.src}
                      alt={post.cover.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground transition-colors duration-300 ease-out-expo group-hover:text-brand md:text-lg">
                    {post.title}
                  </h3>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-3.5 text-brand" aria-hidden />
                      {formatBlogDate(post.date)}
                    </span>
                    <span className="text-white/20" aria-hidden>
                      |
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-brand" aria-hidden />
                      {post.readingMinutes} min de lectura
                    </span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

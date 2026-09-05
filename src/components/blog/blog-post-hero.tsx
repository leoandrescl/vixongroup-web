import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  blogCategoryBadge,
  formatBlogDateLong,
  type BlogPost,
} from "@/content/blog";
import { cn } from "@/lib/utils";

export function BlogPostHero({ post }: { post: BlogPost }) {
  const badge = blogCategoryBadge[post.category];

  return (
    <section className="relative isolate flex min-h-[28rem] overflow-hidden md:min-h-[32rem] lg:min-h-[36rem]">
      <div className="absolute inset-0 z-0">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] max-md:object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background from-[8%] via-background/90 via-[38%] to-transparent to-[78%] max-md:from-background/95 max-md:via-background/80 max-md:to-background/35" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-background to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-16 md:py-20 lg:py-24">
        <div className="flex max-w-xl flex-col items-start lg:max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors duration-300 ease-out-expo hover:text-brand/80"
          >
            <ArrowLeft className="size-4" />
            Volver al blog
          </Link>

          <span
            className={cn(
              "mt-5 inline-flex rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase",
              badge.className,
            )}
          >
            {badge.label}
          </span>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-balance text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/80 md:gap-5">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 text-brand" aria-hidden />
              {formatBlogDateLong(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-brand" aria-hidden />
              {post.readingMinutes} min de lectura
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

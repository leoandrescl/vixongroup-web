import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import {
  blogCategoryBadge,
  formatBlogDate,
  type BlogPost,
} from "@/content/blog";
import { cn } from "@/lib/utils";

export function BlogPostCard({
  post,
  className,
  heading: Heading = "h3",
}: {
  post: BlogPost;
  className?: string;
  heading?: "h2" | "h3";
}) {
  const badge = blogCategoryBadge[post.category];

  return (
    <article
      className={cn(
        "group relative h-full min-h-[28rem] overflow-hidden rounded-2xl ring-1 ring-white/10 transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgb(0_163_173_/_0.45)] md:min-h-[30rem]",
        className,
      )}
    >
      <Image
        src={post.cover.src}
        alt={post.cover.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
      />

      {/* Soft fade: image → dark, no hard cut / divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#070b12] from-[18%] via-[#070b12]/85 via-[42%] to-transparent to-[72%]"
      />

      <span
        className={cn(
          "absolute top-3.5 left-3.5 z-10 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.12em] uppercase shadow-sm",
          badge.className,
        )}
      >
        {badge.label}
      </span>

      <div className="relative z-10 flex h-full min-h-[28rem] flex-col justify-end p-5 md:min-h-[30rem] md:p-6">
        <Heading className="text-lg font-semibold tracking-tight text-white md:text-xl">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors duration-300 ease-out-expo hover:text-brand after:absolute after:inset-0"
          >
            {post.title}
          </Link>
        </Heading>
        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-white/70">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/65">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-brand" aria-hidden />
              {formatBlogDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-brand" aria-hidden />
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
  );
}

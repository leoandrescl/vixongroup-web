import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, type BlogPost } from "@/content/blog";
import { cn } from "@/lib/utils";

export function BlogRelatedPosts({
  posts,
  className,
}: {
  posts: BlogPost[];
  className?: string;
}) {
  if (posts.length === 0) return null;

  return (
    <aside
      className={cn(
        "rounded-2xl bg-[#0a121e] p-5 ring-1 ring-white/8 md:p-6",
        className,
      )}
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        Noticias relacionadas
      </p>
      <ul className="mt-5 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex gap-3.5"
            >
              <div className="relative size-16 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10">
                <Image
                  src={post.cover.src}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                />
              </div>
              <div className="min-w-0">
                <p className="line-clamp-2 text-sm font-semibold leading-snug text-foreground transition-colors duration-300 ease-out-expo group-hover:text-brand">
                  {post.title}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {formatBlogDate(post.date)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

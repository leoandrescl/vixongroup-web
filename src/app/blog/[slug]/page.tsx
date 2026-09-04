import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { BlogAuthorCard } from "@/components/blog/blog-author-card";
import { BlogPostBody } from "@/components/blog/blog-post-body";
import { BlogRecommendedSection } from "@/components/blog/blog-recommended";
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  blogCategoryBadge,
  blogPosts,
  formatBlogDateLong,
  getBlogPostBySlug,
  getRecommendedBlogPosts,
  getRelatedBlogPosts,
} from "@/content/blog";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.cover.src,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const badge = blogCategoryBadge[post.category];
  const related = getRelatedBlogPosts(post.slug);
  const recommended = getRecommendedBlogPosts(post.slug);

  return (
    <>
      <Section className="pb-12 md:pb-16">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors duration-300 ease-out-expo hover:text-brand/80"
          >
            <ArrowLeft className="size-4" />
            Volver al blog
          </Link>

          <Reveal className="mt-8 max-w-3xl">
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase",
                badge.className,
              )}
            >
              {badge.label}
            </span>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4 text-brand" aria-hidden />
                {formatBlogDateLong(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 text-brand" aria-hidden />
                {post.readingMinutes} min de lectura
              </span>
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <div className="relative aspect-[21/9] min-h-[14rem] overflow-hidden rounded-2xl ring-1 ring-white/10 md:min-h-[18rem]">
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-14">
            <Reveal delay={100}>
              <BlogPostBody body={post.body} />
            </Reveal>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={120}>
                <BlogAuthorCard author={post.author} />
              </Reveal>
              <Reveal delay={160}>
                <BlogRelatedPosts posts={related} />
              </Reveal>
            </aside>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                image: post.cover.src,
                url: absoluteUrl(`/blog/${post.slug}`),
                author: {
                  "@type": "Person",
                  name: post.author.name,
                  jobTitle: post.author.role,
                },
              }),
            }}
          />
        </Container>
      </Section>

      <BlogRecommendedSection posts={recommended} />
    </>
  );
}

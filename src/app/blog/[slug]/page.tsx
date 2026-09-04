import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  blogCategoryLabels,
  blogPosts,
  formatBlogDate,
  getBlogPostBySlug,
} from "@/content/blog";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

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

  return (
    <>
      <Section>
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 ease-out-expo hover:text-brand"
          >
            <ArrowLeft className="size-4" />
            Blog
          </Link>

          <Reveal>
            <Eyebrow className="mt-8">
              {blogCategoryLabels[post.category]}
            </Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4" aria-hidden />
                {formatBlogDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden />
                {post.readingMinutes} min de lectura
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>{post.excerpt}</p>
              <p>
                En Vixon Group seguimos de cerca los cambios en plataformas,
                creatividad y medición para traducirlos en decisiones útiles
                para tu negocio: menos ruido, más experimentos con criterio.
              </p>
              <p>
                Si quieres aplicar estas ideas a un producto, una tienda o una
                campaña en curso, conversemos sobre el siguiente paso concreto.
              </p>
            </div>
          </Reveal>

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
              }),
            }}
          />
        </Container>
      </Section>

      <CtaBanner
        title="¿Quieres aplicar esto a tu negocio?"
        description="Agendemos una reunión corta y veamos qué conviene priorizar."
        cta="Agendar reunión"
      />
    </>
  );
}

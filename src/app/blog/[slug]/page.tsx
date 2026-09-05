import { notFound } from "next/navigation";
import { BlogAuthorCard } from "@/components/blog/blog-author-card";
import { BlogPostBody } from "@/components/blog/blog-post-body";
import { BlogPostHero } from "@/components/blog/blog-post-hero";
import { BlogRecommendedSection } from "@/components/blog/blog-recommended";
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  blogPosts,
  getBlogPostBySlug,
  getRecommendedBlogPosts,
  getRelatedBlogPosts,
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

  const related = getRelatedBlogPosts(post.slug);
  const recommended = getRecommendedBlogPosts(post.slug);

  return (
    <>
      <BlogPostHero post={post} />

      <Section className="pt-12 pb-16 md:pt-16 md:pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-14">
            <Reveal>
              <BlogPostBody body={post.body} />
            </Reveal>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={80}>
                <BlogAuthorCard author={post.author} />
              </Reveal>
              <Reveal delay={120}>
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

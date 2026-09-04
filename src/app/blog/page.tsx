import { BlogPostCard } from "@/components/blog/blog-post-card";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { blogPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";

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
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 60}>
                <BlogPostCard post={post} heading="h2" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

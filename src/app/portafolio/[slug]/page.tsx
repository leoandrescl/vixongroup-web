import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  categoryLabels,
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.client} — ${project.title}`,
    description: project.summary,
    path: `/portafolio/${project.slug}`,
    image: project.cover.src,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <Section className="pb-12 pt-16 md:pt-24">
        <Container>
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand"
          >
            <ArrowLeft className="size-4" />
            Portafolio
          </Link>
          <Eyebrow className="mt-8">
            {categoryLabels[project.category]} · {project.year}
          </Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {project.client}: {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {project.summary}
          </p>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: `${project.client}: ${project.title}`,
                description: project.summary,
                datePublished: String(project.year),
                image: project.cover.src,
              }),
            }}
          />
          {project.liveUrl ? (
            <Button asChild variant="outline" className="mt-8">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live preview
                <ExternalLink />
              </a>
            </Button>
          ) : null}
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Container>
      </Section>

      <Section tone="surface" className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Stack</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold">Tecnologías implementadas</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>Alcance</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold">Servicios del caso</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.services.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Impacto</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold">KPIs del proyecto</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-surface p-6 ring-1 ring-white/8"
              >
                <p className="text-3xl font-semibold text-brand">
                  <AnimatedStat value={metric.value} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Desafío</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-canvas-foreground">
              El problema
            </h2>
            <p className="mt-4 leading-relaxed text-canvas-foreground/70">
              {project.challenge}
            </p>
          </div>
          <div>
            <Eyebrow>Solución</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-canvas-foreground">
              Qué implementamos
            </h2>
            <p className="mt-4 leading-relaxed text-canvas-foreground/70">
              {project.solution}
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Showcase</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold">Galería</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {project.gallery.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {project.testimonial ? (
        <Section>
          <Container className="max-w-3xl">
            <blockquote className="rounded-3xl bg-surface p-8 text-xl leading-relaxed md:p-12 md:text-2xl">
              “{project.testimonial.quote}”
              <footer className="mt-6 text-base font-semibold not-italic">
                {project.testimonial.author}
                <span className="mt-1 block text-sm font-normal text-muted-foreground">
                  {project.testimonial.role}
                </span>
              </footer>
            </blockquote>
          </Container>
        </Section>
      ) : null}

      <CtaBanner
        title="¿Un resultado parecido en tu marca?"
        cta="Hablemos"
      />

      <nav
        className="border-t border-white/8 bg-surface"
        aria-label="Otros casos"
      >
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link
              href={`/portafolio/${prev.slug}`}
              className="inline-flex items-center gap-2 text-sm hover:text-brand"
            >
              <ArrowLeft className="size-4" />
              {prev.client}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/portafolio/${next.slug}`}
              className="inline-flex items-center gap-2 text-sm hover:text-brand sm:ml-auto"
            >
              {next.client}
              <ArrowRight className="size-4" />
            </Link>
          ) : null}
        </Container>
      </nav>
    </>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import {
  blogCategories,
  blogCategoryLabels,
  blogPosts,
  type BlogCategory,
} from "@/content/blog";
import { cn } from "@/lib/utils";

type FilterId = "all" | BlogCategory;

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "Todos" },
  ...blogCategories.map((id) => ({
    id,
    label: blogCategoryLabels[id],
  })),
];

export function BlogSection() {
  const [active, setActive] = useState<FilterId>("all");

  const posts = useMemo(() => {
    const list =
      active === "all"
        ? blogPosts
        : blogPosts.filter((post) => post.category === active);
    return list.slice(0, 3);
  }, [active]);

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <Reveal className="max-w-xl">
            <Eyebrow>Blog</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Noticias que impulsan tu{" "}
              <span className="text-brand">próximo proyecto.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Tendencias, actualizaciones y oportunidades del mundo digital,
              para que tomes mejores decisiones.
            </p>
          </Reveal>

          <Reveal delay={80} className="flex shrink-0 lg:pt-1">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Ver todas las noticias
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div
            className="mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Filtrar por categoría"
          >
            {filters.map((filter) => {
              const isActive = active === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(filter.id)}
                  className={cn(
                    "shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-[color,background-color,border-color,box-shadow] duration-300 ease-out-expo",
                    isActive
                      ? "border-brand bg-brand text-brand-foreground shadow-[0_10px_24px_-12px_rgb(0_163_173_/_0.7)]"
                      : "border-white/15 bg-transparent text-foreground/85 hover:border-brand/50 hover:bg-brand/10",
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 80}>
              <BlogPostCard post={post} />
            </Reveal>
          ))}
        </div>

        {posts.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No hay artículos en esta categoría por ahora.
          </p>
        ) : null}

        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-linear-to-br from-surface via-[#0f1624] to-brand/20 p-8 ring-1 ring-brand/25 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 right-10 size-56 rounded-full bg-brand/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 left-8 size-48 rounded-full bg-brand/15 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-xl gap-4 md:gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/15 text-brand ring-1 ring-brand/30 md:size-14">
                  <BookOpen className="size-6 md:size-7" aria-hidden />
                </span>
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-brand uppercase">
                    Conocimiento que genera resultados
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    Ideas, herramientas y tendencias para{" "}
                    <span className="text-brand">hacer crecer tu negocio.</span>
                  </h3>
                </div>
              </div>

              <div className="hidden h-16 w-px shrink-0 bg-white/15 lg:block" />

              <div className="max-w-sm lg:pl-2">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  En nuestro blog compartimos contenido actualizado sobre
                  tecnología, marketing y negocios digitales.
                </p>
                <Button asChild className="mt-5" size="lg">
                  <Link href="/blog">
                    Ver todas las noticias
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

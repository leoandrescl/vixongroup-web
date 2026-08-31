import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categoryLabels, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Link
      href={`/portafolio/${project.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-white/8 transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-brand uppercase">
          {categoryLabels[project.category]}
        </p>
        <h3 className="mt-2 flex items-center justify-between gap-2 text-lg font-semibold">
          {project.client}
          <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-brand" />
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/8 pt-4">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/5 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

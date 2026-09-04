import Image from "next/image";
import { Mail } from "lucide-react";
import {
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/social";
import type { BlogAuthor } from "@/content/blog";
import { cn } from "@/lib/utils";

export function BlogAuthorCard({
  author,
  className,
}: {
  author: BlogAuthor;
  className?: string;
}) {
  const links = [
    author.social.linkedin
      ? {
          href: author.social.linkedin,
          label: "LinkedIn",
          icon: LinkedInIcon,
          external: true,
        }
      : null,
    author.social.instagram
      ? {
          href: author.social.instagram,
          label: "Instagram",
          icon: InstagramIcon,
          external: true,
        }
      : null,
    author.social.x
      ? {
          href: author.social.x,
          label: "X",
          icon: XIcon,
          external: true,
        }
      : null,
    author.social.email
      ? {
          href: `mailto:${author.social.email}`,
          label: "Email",
          icon: Mail,
          external: false,
        }
      : null,
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: typeof LinkedInIcon | typeof Mail;
    external: boolean;
  }[];

  return (
    <aside
      className={cn(
        "rounded-2xl bg-[#0a121e] p-6 ring-1 ring-white/8",
        className,
      )}
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        Sobre el autor
      </p>
      <div className="mt-5 flex flex-col items-center text-center">
        <div className="relative size-20 overflow-hidden rounded-full ring-2 ring-brand/30">
          <Image
            src={author.photo.src}
            alt={author.photo.alt}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <h2 className="mt-4 text-lg font-semibold text-foreground">
          {author.name}
        </h2>
        <p className="mt-1 text-sm text-brand">{author.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {author.bio}
        </p>
      </div>

      {links.length > 0 ? (
        <div className="mt-5 flex justify-center gap-2.5">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors duration-300 ease-out-expo hover:border-brand hover:text-brand"
              aria-label={item.label}
            >
              <item.icon className="size-3.5" />
            </a>
          ))}
        </div>
      ) : null}
    </aside>
  );
}

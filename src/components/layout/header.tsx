"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setCompact(y > 16);

      if (open) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      if (y < 72) {
        setHidden(false);
      } else if (y > lastY.current + 6) {
        setHidden(true);
      } else if (y < lastY.current - 6) {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={cn(
        "site-header sticky top-0 z-50 border-b",
        compact
          ? "border-white/10 bg-background/85 backdrop-blur-xl"
          : "border-white/8 bg-background/70 backdrop-blur-md",
      )}
      data-hidden={hidden ? "" : undefined}
      data-compact={compact ? "" : undefined}
      onFocusCapture={() => setHidden(false)}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] text-foreground uppercase"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {mainNav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.7rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 ease-out-expo",
                  active
                    ? "text-brand"
                    : "text-foreground/70 hover:text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contacto">
              Hablemos de tu proyecto
              <ArrowRight />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menú"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(92vw,22rem)] gap-0 bg-background p-0 data-[side=right]:w-[min(92vw,22rem)]"
            >
              <SheetHeader className="border-b border-white/8 px-5 py-4 pr-12">
                <SheetTitle className="text-left tracking-[0.16em] uppercase">
                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
                aria-label="Móvil"
              >
                {mainNav.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-300 ease-out-expo",
                        active
                          ? "bg-brand/15 text-brand"
                          : "text-foreground/80 hover:bg-muted",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <SheetFooter className="border-t border-white/8 px-4 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <Button
                  asChild
                  size="sm"
                  className="h-9 w-full max-w-full px-4 text-[0.8rem]"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/contacto">
                    Hablemos de tu proyecto
                    <ArrowRight />
                  </Link>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}

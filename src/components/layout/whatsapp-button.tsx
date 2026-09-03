"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Megaphone, MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const intents = [
  {
    id: "web",
    icon: Code2,
    label: "Desarrollo web",
    hint: "Sitio, e-commerce o producto",
    message:
      "Hola vixonstudio 👋 Quiero cotizar un desarrollo web / producto digital. ¿Podemos hablar?",
  },
  {
    id: "marketing",
    icon: Megaphone,
    label: "Marketing digital",
    hint: "Ads, SEO y growth medible",
    message:
      "Hola vixonstudio 👋 Quiero potenciar marketing y growth con ustedes. ¿Conversamos?",
  },
  {
    id: "otro",
    icon: MessageCircle,
    label: "Otro proyecto",
    hint: "Aún no lo tengo claro",
    message:
      "Hola vixonstudio 👋 Tengo un proyecto en mente y quiero ver si encajamos. ¿Me orientan?",
  },
] as const;

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="site-whatsapp fixed right-4 z-50 flex flex-col items-end gap-3 md:right-6"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <div
        className={cn(
          "origin-bottom-right transition-all duration-300 ease-out-expo",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0",
        )}
        role="menu"
        aria-label="Opciones de WhatsApp"
        aria-hidden={!open}
      >
        <div className="w-[min(92vw,18.5rem)] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/40 ring-1 ring-black/20">
          <div className="border-b border-white/8 px-4 py-3">
            <p className="text-sm font-semibold text-white">¿En qué te ayudamos?</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Elige y te abrimos WhatsApp con el contexto listo.
            </p>
          </div>
          <ul className="p-2">
            {intents.map((item) => (
              <li key={item.id}>
                <a
                  href={getWhatsAppUrl(item.message)}
                  target="_blank"
                  rel="noreferrer"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 ease-out-expo hover:bg-whatsapp/12"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp transition-colors duration-300 group-hover:bg-whatsapp group-hover:text-white">
                    <item.icon className="size-4" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-white group-hover:text-whatsapp">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {item.hint}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="group/fab relative flex items-center">
        <span
          className={cn(
            "pointer-events-none absolute right-[calc(100%+0.75rem)] hidden whitespace-nowrap rounded-full border border-white/10 bg-surface px-3.5 py-2 text-xs font-medium text-white shadow-lg shadow-black/30 transition-all duration-300 ease-out-expo md:block",
            open
              ? "translate-x-2 opacity-0"
              : "translate-x-1 opacity-0 group-hover/fab:translate-x-0 group-hover/fab:opacity-100",
          )}
        >
          ¿Hablamos por WhatsApp?
        </span>

        <button
          type="button"
          aria-label={open ? "Cerrar opciones de WhatsApp" : "Abrir WhatsApp"}
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "relative flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-transform duration-300 ease-out-expo hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            open && "scale-95",
          )}
        >
          <span
            className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-whatsapp/35"
            style={{ animationDuration: "2.4s" }}
            aria-hidden
          />
          {open ? (
            <X className="relative size-6" aria-hidden />
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="relative size-7 fill-current"
              aria-hidden
            >
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.82c0 2.08.55 4.11 1.6 5.9L0 24l6.43-1.68a11.8 11.8 0 0 0 5.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.82 0-3.16-1.23-6.13-3.36-8.45ZM12.05 21.6h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.81 1 1.02-3.72-.24-.38a9.78 9.78 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.84-9.8 2.62 0 5.09 1.02 6.94 2.88a9.74 9.74 0 0 1 2.88 6.93c0 5.4-4.4 9.8-9.76 9.8Zm5.38-7.35c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.29-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.34Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

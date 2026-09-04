"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactFormCopy } from "@/content/contact";
import { serviceInterestOptions } from "@/content/site";
import { contactSchema } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; demo?: boolean }
  | { type: "error"; message: string };

const fieldClass =
  "h-11 rounded-xl border-white/12 bg-white/4 px-3.5 text-foreground placeholder:text-muted-foreground/70 hover:border-white/20 focus-visible:border-brand";

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFieldErrors({});
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key]) next[key] = issue.message;
      }
      setFieldErrors(next);
      return;
    }

    setStatus({ type: "loading" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          consent: true,
        }),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        demo?: boolean;
        error?: string;
      };
      if (!response.ok) {
        setStatus({
          type: "error",
          message: payload.error ?? "No pudimos enviar el mensaje.",
        });
        return;
      }
      form.reset();
      setStatus({ type: "success", demo: payload.demo });
    } catch {
      setStatus({
        type: "error",
        message: "Error de red. Intenta de nuevo o usa WhatsApp.",
      });
    }
  }

  if (status.type === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-brand/25 bg-surface/85 p-8 text-foreground shadow-[0_0_60px_-20px_rgb(0_163_173_/_0.55)] backdrop-blur-md",
          className,
        )}
        role="status"
      >
        <h2 className="text-2xl font-semibold">Mensaje recibido</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Gracias. Te respondemos en menos de 24 horas. Si es urgente, usa el
          botón de WhatsApp.
        </p>
        {status.demo ? (
          <p className="mt-4 text-xs text-muted-foreground/70">
            Modo demo: no hay clave de Resend configurada. El mensaje no se
            envió por correo.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "relative overflow-hidden rounded-2xl border border-brand/20 bg-surface/80 p-6 text-foreground shadow-[0_0_60px_-18px_rgb(0_163_173_/_0.5)] backdrop-blur-md md:p-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand/8 via-transparent to-transparent" />

      <div className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-brand uppercase">
              {contactFormCopy.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-[1.65rem]">
              {contactFormCopy.title}
            </h2>
          </div>
          <div className="flex max-w-[14rem] items-start gap-2 text-left sm:text-right">
            <Calendar
              className="mt-0.5 size-4 shrink-0 text-brand sm:order-2"
              aria-hidden
            />
            <p className="text-[0.7rem] leading-snug text-muted-foreground sm:order-1">
              {contactFormCopy.badge}
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Field
            label="Nombre completo *"
            name="name"
            placeholder="Tu nombre"
            error={fieldErrors.name}
            autoComplete="name"
          />
          <Field
            label="Empresa (opcional)"
            name="company"
            placeholder="Nombre de tu empresa"
            error={fieldErrors.company}
            autoComplete="organization"
          />
          <Field
            label="Correo electrónico *"
            name="email"
            type="email"
            placeholder="tu@empresa.cl"
            error={fieldErrors.email}
            autoComplete="email"
          />
          <Field
            label="Teléfono (opcional)"
            name="phone"
            type="tel"
            placeholder="+56 9 1234 5678"
            error={fieldErrors.phone}
            autoComplete="tel"
          />
        </div>

        <div className="mt-4 grid gap-2">
          <Label htmlFor="interest" className="text-xs text-muted-foreground">
            ¿En qué podemos ayudarte? *
          </Label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            className={cn(
              fieldClass,
              "w-full cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.85rem_center] bg-no-repeat pr-10 text-sm",
              "bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 stroke=%27%239aa3b5%27 stroke-width=%271.5%27%3E%3Cpath d=%27m5 8 5 5 5-5%27/%3E%3C/svg%3E')]",
            )}
            aria-invalid={Boolean(fieldErrors.interest)}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {serviceInterestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {fieldErrors.interest ? (
            <p className="text-xs text-destructive">{fieldErrors.interest}</p>
          ) : null}
        </div>

        <div className="mt-4 grid gap-2">
          <Label htmlFor="message" className="text-xs text-muted-foreground">
            Cuéntanos más sobre tu proyecto *
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Objetivo, plazos, contexto o lo que ya tengas claro…"
            className={cn(fieldClass, "min-h-28 py-3")}
            aria-invalid={Boolean(fieldErrors.message)}
          />
          {fieldErrors.message ? (
            <p className="text-xs text-destructive">{fieldErrors.message}</p>
          ) : null}
        </div>

        {status.type === "error" ? (
          <p className="mt-4 text-sm text-destructive" role="alert">
            {status.message}
          </p>
        ) : null}

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                value="on"
                className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-white/20 bg-white/5 text-brand accent-brand"
                aria-invalid={Boolean(fieldErrors.consent)}
              />
              <Label
                htmlFor="consent"
                className="cursor-pointer text-xs leading-relaxed font-normal text-muted-foreground"
              >
                {contactFormCopy.consent}
              </Label>
            </div>
            {fieldErrors.consent ? (
              <p className="mt-1 text-xs text-destructive">
                {fieldErrors.consent}
              </p>
            ) : null}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full shrink-0 sm:w-auto sm:min-w-[11.5rem]"
            disabled={status.type === "loading"}
          >
            {status.type === "loading" ? "Enviando…" : contactFormCopy.submit}
            <ArrowRight />
          </Button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name} className="text-xs text-muted-foreground">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={fieldClass}
        aria-invalid={Boolean(error)}
      />
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

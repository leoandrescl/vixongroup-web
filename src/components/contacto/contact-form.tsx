"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { serviceInterestOptions } from "@/content/site";
import { contactSchema } from "@/lib/contact-schema";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; demo?: boolean }
  | { type: "error"; message: string };

export function ContactForm() {
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
        body: JSON.stringify(parsed.data),
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
        className="rounded-3xl bg-white p-8 text-canvas-foreground shadow-sm ring-1 ring-black/5"
        role="status"
      >
        <h2 className="text-2xl font-semibold">Mensaje recibido</h2>
        <p className="mt-3 text-sm leading-relaxed text-canvas-foreground/70">
          Gracias. Te respondemos en un día laboral. Si es urgente, usa el
          botón de WhatsApp.
        </p>
        {status.demo ? (
          <p className="mt-4 text-xs text-canvas-foreground/50">
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
      className="rounded-3xl bg-white p-6 text-canvas-foreground shadow-sm ring-1 ring-black/5 md:p-8"
      noValidate
    >
      <div className="grid gap-5">
        <Field
          label="Nombre"
          name="name"
          error={fieldErrors.name}
          autoComplete="name"
        />
        <Field
          label="Correo"
          name="email"
          type="email"
          error={fieldErrors.email}
          autoComplete="email"
        />
        <Field
          label="Empresa (opcional)"
          name="company"
          error={fieldErrors.company}
          autoComplete="organization"
        />
        <div className="grid gap-2">
          <Label htmlFor="interest" className="text-canvas-foreground">
            Interés
          </Label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            className="h-10 w-full cursor-pointer rounded-lg border border-black/10 bg-white px-3 text-sm transition-colors hover:border-brand"
            aria-invalid={Boolean(fieldErrors.interest)}
          >
            <option value="" disabled>
              Selecciona un servicio
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
        <div className="grid gap-2">
          <Label htmlFor="message" className="text-canvas-foreground">
            Mensaje
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            className="min-h-32 border-black/10 text-canvas-foreground"
            aria-invalid={Boolean(fieldErrors.message)}
          />
          {fieldErrors.message ? (
            <p className="text-xs text-destructive">{fieldErrors.message}</p>
          ) : null}
        </div>
        {status.type === "error" ? (
          <p className="text-sm text-destructive" role="alert">
            {status.message}
          </p>
        ) : null}
        <Button type="submit" size="lg" disabled={status.type === "loading"}>
          {status.type === "loading" ? "Enviando…" : "Enviar mensaje"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name} className="text-canvas-foreground">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="h-10 border-black/10 text-canvas-foreground"
        aria-invalid={Boolean(error)}
      />
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

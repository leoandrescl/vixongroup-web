import { ArrowRight } from "lucide-react";
import { methodologySteps } from "@/content/site";

export function MethodologySteps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
      {methodologySteps.map((step, index) => (
        <li key={step.n} className="relative">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand">
            {step.n}
          </p>
          <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {step.body}
          </p>
          {index < methodologySteps.length - 1 ? (
            <ArrowRight
              className="absolute top-1 -right-3 hidden size-4 text-brand/50 lg:block"
              aria-hidden
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

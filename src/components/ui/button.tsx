import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-[transform,color,background-color,border-color,box-shadow,opacity] duration-300 ease-out-expo outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "relative overflow-hidden rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_12px_28px_-12px_rgb(0_163_173_/_0.55)] before:pointer-events-none before:absolute before:inset-0 before:translate-x-[-120%] before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-500 before:ease-out-expo hover:before:translate-x-[120%]",
        outline:
          "rounded-full border-foreground/25 bg-transparent text-foreground hover:border-brand hover:bg-brand/10",
        secondary:
          "rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "rounded-full hover:bg-muted hover:text-foreground",
        destructive:
          "rounded-full bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "rounded-full text-primary underline-offset-4 hover:underline",
        marketing:
          "relative overflow-hidden rounded-full bg-marketing text-marketing-foreground hover:bg-marketing/90 hover:shadow-[0_12px_28px_-12px_rgb(230_126_34_/_0.45)] before:pointer-events-none before:absolute before:inset-0 before:translate-x-[-120%] before:bg-linear-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-500 before:ease-out-expo hover:before:translate-x-[120%]",
      },
      size: {
        default: "h-10 gap-2 px-5",
        xs: "h-7 gap-1 px-3 text-xs",
        sm: "h-8 gap-1.5 px-3.5 text-[0.8rem]",
        lg: "h-12 gap-2 px-6 text-sm tracking-wide",
        icon: "size-10 rounded-full",
        "icon-xs": "size-7 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

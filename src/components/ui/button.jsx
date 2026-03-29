"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-[hsl(var(--background))]",
  {
    variants: {
      variant: {
        default:
          "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[0_14px_28px_-18px_rgba(76,102,65,0.7)] hover:-translate-y-0.5 hover:bg-[hsl(109,22%,31%)]",
        ghost:
          "bg-transparent text-stone-700 hover:bg-white/70 hover:text-stone-950",
        outline:
          "border border-[hsl(var(--border))] bg-white/70 text-stone-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] hover:bg-white/90",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-6 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <button
    className={cn(buttonVariants({ variant, size, className }))}
    ref={ref}
    {...props}
  />
));

Button.displayName = "Button";

export { Button, buttonVariants };

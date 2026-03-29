import * as React from "react";
import { cn } from "@/src/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-2xl border border-[hsl(var(--input))] bg-white/90 px-4 py-3 text-sm text-stone-900 shadow-sm transition-colors placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };

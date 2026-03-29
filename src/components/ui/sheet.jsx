"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const Sheet = DialogPrimitive.Root;

const SheetContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-stone-950/30 backdrop-blur-sm" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-y-0 right-0 z-50 h-full w-3/4 max-w-sm border-l border-[hsl(var(--border))] bg-[rgba(249,245,237,0.97)] p-6 pt-16 shadow-[0_24px_70px_-28px_rgba(46,38,24,0.42)] backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-1 text-stone-500 transition hover:bg-stone-100 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]">
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

SheetContent.displayName = DialogPrimitive.Content.displayName;

export { Sheet, SheetContent };

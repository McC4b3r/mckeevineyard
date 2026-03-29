import { cn } from "@/src/lib/utils";

export function Card({ className, ...props }) {
  return <div className={cn("paper-panel", className)} {...props} />;
}

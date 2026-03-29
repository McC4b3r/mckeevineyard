"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/history", label: "History" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function LinkStack({ mobile = false, onNavigate }) {
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center gap-2", mobile && "flex-col items-stretch gap-3")}>
      {links.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={cn(
              buttonVariants({ variant: active ? "default" : "ghost" }),
              "font-[family-name:var(--font-display)] text-[13px] tracking-[0.02em]",
              mobile && "w-full justify-center"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

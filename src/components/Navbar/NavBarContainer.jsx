import { cn } from "@/src/lib/utils";

export default function NavBarContainer({ children, className, ...props }) {
  return (
    <nav className={cn("page-shell sticky top-0 z-40 pt-4", className)} {...props}>
      <div className="paper-panel flex items-center justify-between gap-4 px-5 py-4 sm:px-7">
        {children}
      </div>
    </nav>
  );
}

import { Separator } from "@/src/components/ui/separator";
import { cn } from "@/src/lib/utils";

export default function PageIntro({ title, children, className }) {
  return (
    <section className={cn("page-shell py-10 sm:py-14", className)}>
      <div className="paper-panel relative overflow-hidden px-6 py-8 sm:px-10 sm:py-12">
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(88,117,80,0.14),transparent)]" />
        <div className="relative mx-auto max-w-4xl">
          <div className="pb-4 text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-stone-900 sm:text-4xl">
              {title}
            </h1>
          </div>
          <Separator />
          <div className="font-[family-name:var(--font-body)] text-lg leading-8 text-stone-700">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

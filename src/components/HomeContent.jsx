import Image from "next/image";
import heroImage from "@/src/images/home-hero/landing-hero.jpg";

export default function HomeContent() {
  return (
    <section className="relative isolate min-h-[calc(100vh-8rem)] overflow-hidden">
      <Image
        src={heroImage}
        alt="McKee Vineyard landscape"
        priority
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,17,13,0.18),rgba(18,17,13,0.58))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,251,240,0.14),transparent_34%)]" />
      <div className="page-shell relative flex min-h-[calc(100vh-8rem)] items-start justify-center pt-24 sm:items-center sm:pt-0">
        <div className="max-w-4xl rounded-[2.25rem] border border-white/30 bg-[rgba(18,18,14,0.34)] px-8 py-10 text-center shadow-[0_26px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur-lg sm:px-10 sm:py-12">
          <p className="mb-4 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-stone-100/90">
            Welcome to
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-6xl">
            McKee Vineyard
          </h1>
        </div>
      </div>
    </section>
  );
}

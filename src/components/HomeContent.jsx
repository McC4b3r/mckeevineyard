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
        <div className="relative max-w-4xl px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="absolute inset-x-4 top-1/2 -z-10 h-40 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(18,18,14,0.42),rgba(18,18,14,0.14)_56%,transparent_78%)] blur-3xl" />
          <p className="mb-4 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-stone-100/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
            Welcome to
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-[0.04em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl">
            McKee Vineyard
          </h1>
        </div>
      </div>
    </section>
  );
}

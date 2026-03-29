import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="px-2">
      <span className="font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-stone-900 drop-shadow-[0_2px_12px_rgba(255,255,255,0.45)] sm:text-4xl">
        McKee Vineyard
      </span>
    </Link>
  );
}

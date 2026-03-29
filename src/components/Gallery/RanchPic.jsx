import Image from "next/image";

export default function RanchPic({ image, index, onClick }) {
  const isHighPriority = index < 4;

  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className="group relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/60 bg-white shadow-[0_20px_50px_-30px_rgba(60,44,18,0.45)] transition duration-300 hover:-translate-y-1"
    >
      <Image
        src={image.thumbnailSrc}
        alt={image.alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        placeholder="blur"
        priority={isHighPriority}
        loading={isHighPriority ? "eager" : "lazy"}
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(20,16,9,0.18))]" />
    </button>
  );
}

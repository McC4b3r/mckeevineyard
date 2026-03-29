"use client";

import { useState } from "react";
import { galleryImages } from "@/src/lib/gallery-images";
import Carousel from "./Carousel";
import RanchPic from "./RanchPic";

export default function GalleryContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <section className="page-shell py-10 sm:py-14">
      <div className="mb-8 max-w-2xl">
        <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.28em] text-emerald-800">
          Vineyard gallery
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold text-stone-900">
          A visual tour of the ranch
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {galleryImages.map((image, index) => (
          <RanchPic key={image.alt} image={image} index={index} onClick={handleClick} />
        ))}
      </div>
      <Carousel
        isOpen={open}
        onOpenChange={setOpen}
        images={galleryImages}
        initialIndex={currentIndex}
      />
    </section>
  );
}

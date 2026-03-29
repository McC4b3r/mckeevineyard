"use client";

import { useState } from "react";
import Carousel from "./Carousel";
import RanchPic from "./RanchPic";

export default function GalleryContent({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const hasImages = images.length > 0;

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
      {hasImages ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((image, index) => (
              <RanchPic
                key={`${image.originalSrc || image.thumbnailSrc}-${index}`}
                image={image}
                index={index}
                onClick={handleClick}
              />
            ))}
          </div>
          <Carousel
            isOpen={open}
            onOpenChange={setOpen}
            images={images}
            initialIndex={currentIndex}
          />
        </>
      ) : (
        <div className="paper-panel rounded-[1.75rem] px-6 py-10 text-center sm:px-8">
          <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] text-stone-500">
            Gallery unavailable
          </p>
          <p className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold text-stone-900">
            No gallery images have been published yet.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg">
            Add media assets to the Contentful <span className="font-medium">Main Gallery</span>{" "}
            entry and publish them to make the gallery appear here.
          </p>
        </div>
      )}
    </section>
  );
}

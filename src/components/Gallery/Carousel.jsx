"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";

function normalizeIndex(index, length) {
  return (index + length) % length;
}

export default function Carousel({ isOpen, onOpenChange, images, initialIndex }) {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [visibleIndex, setVisibleIndex] = useState(initialIndex);
  const [pendingIndex, setPendingIndex] = useState(null);
  const loadedIndicesRef = useRef(new Set());
  const preloadedRef = useRef(new Map());
  const filmstripRef = useRef(null);
  const transitionIdRef = useRef(0);

  const imageCount = images.length;
  const visibleImage = images[visibleIndex];
  const selectedImage = images[selectedIndex] ?? visibleImage;

  const ensureModalImageLoaded = useCallback(
    (index) => {
      if (imageCount === 0) {
        return Promise.resolve();
      }

      const normalizedIndex = normalizeIndex(index, imageCount);

      if (loadedIndicesRef.current.has(normalizedIndex)) {
        return Promise.resolve();
      }

      const existing = preloadedRef.current.get(normalizedIndex);
      if (existing) {
        return existing;
      }

      const targetImage = images[normalizedIndex];
      const promise = new Promise((resolve) => {
        const preloadImage = new window.Image();
        preloadImage.src = targetImage.modalSrc;
        preloadImage.onload = () => {
          loadedIndicesRef.current.add(normalizedIndex);
          resolve();
        };
        preloadImage.onerror = () => {
          resolve();
        };
      }).finally(() => {
        preloadedRef.current.delete(normalizedIndex);
      });

      preloadedRef.current.set(normalizedIndex, promise);

      return promise;
    },
    [imageCount, images]
  );

  const preloadNeighbors = useCallback(
    (index) => {
      ensureModalImageLoaded(index);
      ensureModalImageLoaded(index + 1);
      ensureModalImageLoaded(index - 1);
    },
    [ensureModalImageLoaded]
  );

  const selectIndex = useCallback(
    async (index) => {
      if (imageCount === 0) {
        return;
      }

      const normalizedIndex = normalizeIndex(index, imageCount);
      const transitionId = transitionIdRef.current + 1;
      transitionIdRef.current = transitionId;
      setSelectedIndex(normalizedIndex);

      if (normalizedIndex === visibleIndex || loadedIndicesRef.current.has(normalizedIndex)) {
        setVisibleIndex(normalizedIndex);
        setPendingIndex(null);
        preloadNeighbors(normalizedIndex);
        return;
      }

      setPendingIndex(normalizedIndex);
      await ensureModalImageLoaded(normalizedIndex);
      if (transitionIdRef.current !== transitionId) {
        return;
      }
      setVisibleIndex(normalizedIndex);
      setPendingIndex(null);
      preloadNeighbors(normalizedIndex);
    },
    [ensureModalImageLoaded, imageCount, preloadNeighbors, visibleIndex]
  );

  useEffect(() => {
    if (!isOpen || imageCount === 0) {
      return;
    }

    setSelectedIndex(initialIndex);
    setVisibleIndex(initialIndex);
    setPendingIndex(null);
    transitionIdRef.current += 1;
    preloadNeighbors(initialIndex);
  }, [imageCount, initialIndex, isOpen, preloadNeighbors]);

  useEffect(() => {
    if (!isOpen || imageCount === 0 || !filmstripRef.current) {
      return;
    }

    const activeThumb = filmstripRef.current.querySelector(`[data-index="${selectedIndex}"]`);
    activeThumb?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [imageCount, isOpen, selectedIndex]);

  const loadingLabel = useMemo(() => {
    if (pendingIndex === null) {
      return null;
    }

    return pendingIndex > visibleIndex || (visibleIndex === imageCount - 1 && pendingIndex === 0)
      ? "Loading next photo"
      : "Loading previous photo";
  }, [imageCount, pendingIndex, visibleIndex]);

  if (imageCount === 0 || !visibleImage || !selectedImage) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="grid max-h-[calc(100vh-1.5rem)] w-[min(1200px,calc(100vw-1.5rem))] max-w-none grid-rows-[auto,minmax(0,1fr)] gap-4 overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(15,15,12,0.97),rgba(12,12,10,0.96))] p-4 shadow-[0_30px_120px_-35px_rgba(0,0,0,0.85)] sm:gap-5 sm:p-6">
        <DialogHeader className="pr-12">
          <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-4">
            <div />
            <div className="text-center">
              <p className="font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.28em] text-stone-400">
                Vineyard gallery
              </p>
              <DialogTitle className="mt-2 text-2xl text-stone-50 sm:text-3xl">
                Editorial Viewer
              </DialogTitle>
            </div>
            <div className="justify-self-end rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-stone-200">
              {selectedIndex + 1} / {imageCount}
            </div>
          </div>
        </DialogHeader>
        {visibleImage ? (
          <div className="grid min-h-0 grid-rows-[minmax(0,1fr),auto] gap-4">
            <div className="relative min-h-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(84,84,72,0.32),rgba(16,16,13,0.95)_55%)] p-3 sm:p-4">
              <div className="relative flex h-full min-h-[44vh] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:min-h-[48vh]">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => selectIndex(selectedIndex - 1)}
                  className="absolute left-4 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full border-white/20 bg-stone-950/55 text-white shadow-lg backdrop-blur hover:bg-stone-900/80"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => selectIndex(selectedIndex + 1)}
                  className="absolute right-4 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full border-white/20 bg-stone-950/55 text-white shadow-lg backdrop-blur hover:bg-stone-900/80"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <div className="relative h-[min(62vh,720px)] w-full">
                  {/* Intentional direct image rendering avoids the modal flash/rescale regression. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    key={visibleIndex}
                    src={visibleImage.modalSrc}
                    alt={visibleImage.alt}
                    width={visibleImage.width}
                    height={visibleImage.height}
                    className="h-full w-full object-contain p-4 sm:p-6"
                    onLoad={() => {
                      loadedIndicesRef.current.add(visibleIndex);
                    }}
                  />
                </div>
                {pendingIndex !== null && pendingIndex !== visibleIndex ? (
                  <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-stone-100 backdrop-blur">
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      <span>{loadingLabel}</span>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 px-1">
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-lg font-medium text-stone-100">
                    {selectedImage.alt}
                  </p>
                  <p className="mt-1 text-sm text-stone-400">
                    Curated vineyard photography optimized for a faster browsing experience.
                  </p>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-300 sm:block">
                  Swipe by thumbnails
                </div>
              </div>
            </div>
            <div
              ref={filmstripRef}
              className="flex gap-3 overflow-x-auto rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-3 py-3"
            >
              {images.map((image, index) => {
                const isActive = index === selectedIndex;

                return (
                  <button
                    key={`${image.originalSrc || image.thumbnailSrc}-${index}`}
                    type="button"
                    data-index={index}
                    onClick={() => selectIndex(index)}
                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border transition sm:h-20 sm:w-20 ${
                      isActive
                        ? "border-emerald-300 shadow-[0_0_0_2px_rgba(167,243,208,0.25)]"
                        : "border-white/10 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image.thumbnailSrc}
                      alt={image.alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                      placeholder={image.blurSrc ? "blur" : "empty"}
                      blurDataURL={image.blurSrc}
                    />
                    {isActive ? (
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,150,105,0.22))]" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import house1 from "@/src/images/historyPics/1938RanchHouse1.PNG";
import house2 from "@/src/images/historyPics/1938RanchHouse2.PNG";
import house3 from "@/src/images/historyPics/1938RanchHouse3.PNG";
import house4 from "@/src/images/historyPics/1938RanchHouse4.PNG";
import rayPhoto from "@/src/images/historyPics/rayFurlongDinneyJune1939.PNG";
import PageIntro from "./shared/PageIntro";
import { Dialog, DialogContent } from "./ui/dialog";

const ranchPhotos = [
  { src: house1, alt: "Ranch house in 1938 view one" },
  { src: house2, alt: "Ranch house in 1938 view two" },
  { src: house3, alt: "Ranch house in 1938 view three" },
  { src: house4, alt: "Ranch house in 1938 view four" },
];

export default function HistoryContent() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <PageIntro title="The Ranch&apos;s History">
        <div className="mt-8 space-y-10">
          <p className="mx-auto max-w-3xl text-center font-[family-name:var(--font-body)] text-lg leading-8 text-stone-700">
            The story of the ranch is inseparable from the family that cared for it, from the
            generations who came before us to the years when the property passed into our immediate
            stewardship.
          </p>

          <StorySection
            title="How the Ranch Came Into the Family"
            textClassName="lg:pr-4"
            media={
              <FigureCard
                image={rayPhoto}
                alt="Ray Furlong in 1939"
                caption="Ray Furlong, whose 1938 purchase began the ranch&apos;s place in our family story."
              />
            }
          >
            <p>
              The property was purchased in 1938 by my uncle Ray Furlong. He was the son of Tom and
              Rosanna Furlong, my Grandmother Irene being the youngest daughter of 12 children, all
              born in the town of Bodega, California. Tom Furlong was a native of Bree, county
              Wexford, Ireland. He was one of four Furlong brothers who immigrated from Ireland
              between 1866 and 1875. Rosanna was born at Bodega Bay in 1856 to Andrew Johnson, an
              immigrant of Norway and Catherine Farrell from County Monaghan, Ireland, both arriving
              in California at the time of the Gold Rush. Tom and Rosanna were married at St
              Theresa&apos;s church Bodega in 1874.
            </p>
          </StorySection>

          <StorySection
            title="The Property in Its Early Years"
            reverse
            textClassName="lg:pl-4"
            media={
              <div className="grid gap-4 sm:grid-cols-2">
                {ranchPhotos.map((photo) => (
                  <FigureCard
                    key={photo.alt}
                    image={photo.src}
                    alt={photo.alt}
                    compact
                    onClick={() => setSelectedImage(photo)}
                  />
                ))}
              </div>
            }
          >
            <p>
              At the time he bought it, what is now the vineyard consisted of 12 acres of Gravenstein
              apples and the rest was sheep pasture. He later planted the rest in apples. The two
              trees kept for sentimental reasons produce the apples for our annual pie day. The
              balance of the orchard in now the vineyard.
            </p>
          </StorySection>

          <StorySection
            title="A Larger Family History in Bodega"
            textClassName="lg:pr-4"
          >
            <p>
              The Furlong descendants were very much a part of the early history of the Bodega area
              of Sonoma County, north up the coast, west to Santa Rosa and south to Tomales and
              Petaluma. After Rosanna&apos;s daughter Mae (Mary) and husband Tom died in close proximity of
              one another, 1906 and 1907 respectively, several of the older children had already
              moved to Oakland so she and the remaining children followed first to Oakland then to
              Piedmont.
            </p>
            <p>
              Many of Tom&apos;s brother Patrick&apos;s descendants have remained in Sonoma County and have
              remained active in the agriculture community up to and including the present.
            </p>
            <p>
              Tom and Rosanna youngest daughter Irene, born February 21, 1893, married William
              Terrance McSorley, from another pioneering gold rush era family that settled in
              Mokelumne Hill in 1852 (near San Andreas in 1852). Their only daughter, my mother
              Barbara was born August 23, 1923.
            </p>
          </StorySection>

          <StorySection
            title="Stewardship Passed Forward"
            reverse
            textClassName="lg:pl-4"
          >
            <p>
              Barbara so loved her Uncle Ray and his beloved ranch that when he died in December 1960,
              he left it to her. She ran the ranch until 1990 when I took it over.
            </p>
          </StorySection>
        </div>
      </PageIntro>

      <Dialog open={Boolean(selectedImage)} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[min(92vw,1100px)] overflow-hidden border border-white/20 bg-stone-950/96 p-2 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)] sm:p-3">
          {selectedImage ? (
            <div className="relative max-h-[82vh] overflow-hidden rounded-[1.4rem] bg-stone-900">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[82vh] w-full object-contain"
                priority
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

function StorySection({ title, children, media, reverse = false, textClassName = "" }) {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/58 px-6 py-7 shadow-[0_18px_45px_-30px_rgba(59,45,24,0.35)] backdrop-blur sm:px-8 sm:py-8">
      <div
        className={`grid gap-8 ${media ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start" : ""} ${
          media && reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
      >
        <div className={textClassName}>
          <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] text-stone-500">
            Chapter
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-stone-900">
            {title}
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-stone-700">{children}</div>
        </div>
        {media ? <div>{media}</div> : null}
      </div>
    </section>
  );
}

function FigureCard({ image, alt, caption, compact = false, onClick }) {
  const isInteractive = Boolean(onClick);

  return (
    <figure className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/65 shadow-[0_18px_45px_-30px_rgba(59,45,24,0.35)] backdrop-blur">
      {isInteractive ? (
        <button
          type="button"
          onClick={onClick}
          className="group block w-full text-left outline-none transition-transform duration-200 hover:scale-[1.01] focus-visible:scale-[1.01] focus-visible:ring-2 focus-visible:ring-[rgba(103,135,92,0.45)] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
          aria-label={`Open larger view of ${alt}`}
        >
          <div className="relative overflow-hidden">
            <Image
              src={image}
              alt={alt}
              className={`${compact ? "aspect-[4/3] w-full object-cover" : "w-full object-cover"} transition-transform duration-300 group-hover:scale-[1.03]`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/18 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </button>
      ) : (
        <Image
          src={image}
          alt={alt}
          className={compact ? "aspect-[4/3] w-full object-cover" : "w-full object-cover"}
        />
      )}
      {caption ? (
        <figcaption className="px-5 py-4 text-sm leading-6 text-stone-600">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

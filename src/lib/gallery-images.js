import thumb01 from "@/src/images/gallery-thumbs/gallery-01.jpg";
import thumb02 from "@/src/images/gallery-thumbs/gallery-02.jpg";
import thumb03 from "@/src/images/gallery-thumbs/gallery-03.jpg";
import thumb04 from "@/src/images/gallery-thumbs/gallery-04.jpg";
import thumb05 from "@/src/images/gallery-thumbs/gallery-05.jpg";
import thumb06 from "@/src/images/gallery-thumbs/gallery-06.jpg";
import thumb07 from "@/src/images/gallery-thumbs/gallery-07.jpg";
import thumb08 from "@/src/images/gallery-thumbs/gallery-08.jpg";
import thumb09 from "@/src/images/gallery-thumbs/gallery-09.jpg";
import thumb10 from "@/src/images/gallery-thumbs/gallery-10.jpg";
import thumb11 from "@/src/images/gallery-thumbs/gallery-11.jpg";
import thumb12 from "@/src/images/gallery-thumbs/gallery-12.jpg";
import thumb13 from "@/src/images/gallery-thumbs/gallery-13.jpg";
import thumb14 from "@/src/images/gallery-thumbs/gallery-14.jpg";
import thumb15 from "@/src/images/gallery-thumbs/gallery-15.jpg";
import thumb16 from "@/src/images/gallery-thumbs/gallery-16.jpg";
import thumb17 from "@/src/images/gallery-thumbs/gallery-17.jpg";
import thumb18 from "@/src/images/gallery-thumbs/gallery-18.jpg";
import thumb19 from "@/src/images/gallery-thumbs/gallery-19.jpg";
import thumb20 from "@/src/images/gallery-thumbs/gallery-20.jpg";
import thumb21 from "@/src/images/gallery-thumbs/gallery-21.jpg";
import thumb22 from "@/src/images/gallery-thumbs/gallery-22.jpg";
import thumb23 from "@/src/images/gallery-thumbs/gallery-23.jpg";
import thumb24 from "@/src/images/gallery-thumbs/gallery-24.jpg";
import modal01 from "@/src/images/gallery-modal/gallery-01.jpg";
import modal02 from "@/src/images/gallery-modal/gallery-02.jpg";
import modal03 from "@/src/images/gallery-modal/gallery-03.jpg";
import modal04 from "@/src/images/gallery-modal/gallery-04.jpg";
import modal05 from "@/src/images/gallery-modal/gallery-05.jpg";
import modal06 from "@/src/images/gallery-modal/gallery-06.jpg";
import modal07 from "@/src/images/gallery-modal/gallery-07.jpg";
import modal08 from "@/src/images/gallery-modal/gallery-08.jpg";
import modal09 from "@/src/images/gallery-modal/gallery-09.jpg";
import modal10 from "@/src/images/gallery-modal/gallery-10.jpg";
import modal11 from "@/src/images/gallery-modal/gallery-11.jpg";
import modal12 from "@/src/images/gallery-modal/gallery-12.jpg";
import modal13 from "@/src/images/gallery-modal/gallery-13.jpg";
import modal14 from "@/src/images/gallery-modal/gallery-14.jpg";
import modal15 from "@/src/images/gallery-modal/gallery-15.jpg";
import modal16 from "@/src/images/gallery-modal/gallery-16.jpg";
import modal17 from "@/src/images/gallery-modal/gallery-17.jpg";
import modal18 from "@/src/images/gallery-modal/gallery-18.jpg";
import modal19 from "@/src/images/gallery-modal/gallery-19.jpg";
import modal20 from "@/src/images/gallery-modal/gallery-20.jpg";
import modal21 from "@/src/images/gallery-modal/gallery-21.jpg";
import modal22 from "@/src/images/gallery-modal/gallery-22.jpg";
import modal23 from "@/src/images/gallery-modal/gallery-23.jpg";
import modal24 from "@/src/images/gallery-modal/gallery-24.jpg";

const localGalleryAssets = [
  { thumbnail: thumb01, modal: modal01, alt: "McKee Vineyard view 1" },
  { thumbnail: thumb02, modal: modal02, alt: "McKee Vineyard view 2" },
  { thumbnail: thumb03, modal: modal03, alt: "McKee Vineyard view 3" },
  { thumbnail: thumb04, modal: modal04, alt: "McKee Vineyard view 4" },
  { thumbnail: thumb05, modal: modal05, alt: "McKee Vineyard view 5" },
  { thumbnail: thumb06, modal: modal06, alt: "McKee Vineyard view 6" },
  { thumbnail: thumb07, modal: modal07, alt: "McKee Vineyard view 7" },
  { thumbnail: thumb08, modal: modal08, alt: "McKee Vineyard view 8" },
  { thumbnail: thumb09, modal: modal09, alt: "McKee Vineyard view 9" },
  { thumbnail: thumb10, modal: modal10, alt: "McKee Vineyard view 10" },
  { thumbnail: thumb11, modal: modal11, alt: "McKee Vineyard view 11" },
  { thumbnail: thumb12, modal: modal12, alt: "McKee Vineyard view 12" },
  { thumbnail: thumb13, modal: modal13, alt: "McKee Vineyard view 13" },
  { thumbnail: thumb14, modal: modal14, alt: "McKee Vineyard view 14" },
  { thumbnail: thumb15, modal: modal15, alt: "McKee Vineyard view 15" },
  { thumbnail: thumb16, modal: modal16, alt: "McKee Vineyard view 16" },
  { thumbnail: thumb17, modal: modal17, alt: "McKee Vineyard view 17" },
  { thumbnail: thumb18, modal: modal18, alt: "McKee Vineyard view 18" },
  { thumbnail: thumb19, modal: modal19, alt: "McKee Vineyard view 19" },
  { thumbnail: thumb20, modal: modal20, alt: "McKee Vineyard view 20" },
  { thumbnail: thumb21, modal: modal21, alt: "McKee Vineyard view 21" },
  { thumbnail: thumb22, modal: modal22, alt: "McKee Vineyard fire recovery view 22" },
  { thumbnail: thumb23, modal: modal23, alt: "McKee Vineyard fire recovery view 23" },
  { thumbnail: thumb24, modal: modal24, alt: "McKee Vineyard fire recovery view 24" },
];

export const localGalleryImages = localGalleryAssets.map(({ thumbnail, modal, alt }) => ({
  thumbnailSrc: thumbnail.src,
  modalSrc: modal.src,
  blurSrc: thumbnail.blurDataURL,
  alt,
  width: modal.width,
  height: modal.height,
}));

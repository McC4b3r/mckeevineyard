import Layout from "@/src/components/Layout";
import GalleryContent from "@/src/components/Gallery/GalleryContent";
import { getGalleryImages } from "@/src/lib/contentful/gallery";

export const revalidate = 300;

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <Layout>
      <GalleryContent images={images} />
    </Layout>
  );
}

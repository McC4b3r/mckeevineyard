import Layout from "@/src/components/Layout";
import GalleryContent from "@/src/components/Gallery/GalleryContent";
import { getGalleryImages } from "@/src/lib/contentful/gallery";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <Layout>
      <GalleryContent images={images} />
    </Layout>
  );
}

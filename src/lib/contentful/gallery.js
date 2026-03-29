import { localGalleryImages } from "@/src/lib/gallery-images";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_DELIVERY_TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const CONTENTFUL_GALLERY_SLUG = process.env.CONTENTFUL_GALLERY_SLUG || "main-gallery";

const THUMB_SIZE = 640;
const MODAL_WIDTH = 1800;
const BLUR_SIZE = 24;

function withHttps(url) {
  if (!url) {
    return null;
  }

  return url.startsWith("//") ? `https:${url}` : url;
}

function buildContentfulImageUrl(url, params) {
  const targetUrl = new URL(withHttps(url));

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      targetUrl.searchParams.set(key, String(value));
    }
  });

  return targetUrl.toString();
}

function normalizeAssetUrl(assetUrl) {
  return buildContentfulImageUrl(assetUrl, {});
}

function buildNormalizedImage({ asset, alt }) {
  const assetUrl = asset?.fields?.file?.url;
  const dimensions = asset?.fields?.file?.details?.image;

  if (!assetUrl || !dimensions?.width || !dimensions?.height || !alt?.trim()) {
    return null;
  }

  return {
    thumbnailSrc: buildContentfulImageUrl(assetUrl, {
      w: THUMB_SIZE,
      h: THUMB_SIZE,
      fit: "thumb",
      fm: "jpg",
      q: 80,
    }),
    modalSrc: buildContentfulImageUrl(assetUrl, {
      w: Math.min(MODAL_WIDTH, dimensions.width),
      fm: "jpg",
      q: 82,
    }),
    blurSrc: buildContentfulImageUrl(assetUrl, {
      w: BLUR_SIZE,
      h: BLUR_SIZE,
      fit: "thumb",
      fm: "jpg",
      q: 20,
    }),
    alt,
    width: dimensions.width,
    height: dimensions.height,
    originalSrc: normalizeAssetUrl(assetUrl),
  };
}

function normalizeContentfulGalleryImageEntry(entry, asset, index) {
  const alt =
    entry?.fields?.altText?.trim() ||
    asset?.fields?.description?.trim() ||
    asset?.fields?.title?.trim() ||
    `McKee Vineyard gallery image ${index + 1}`;

  return buildNormalizedImage({ asset, alt });
}

function normalizeContentfulGalleryAsset(asset, index) {
  const alt =
    asset?.fields?.description?.trim() ||
    asset?.fields?.title?.trim() ||
    `McKee Vineyard gallery image ${index + 1}`;

  return buildNormalizedImage({ asset, alt });
}

function getFirstAssetId(photoField) {
  if (Array.isArray(photoField)) {
    return photoField[0]?.sys?.id;
  }

  return photoField?.sys?.id;
}

function mapIncludes(items = []) {
  return new Map(items.map((item) => [item.sys.id, item]));
}

async function fetchContentfulGalleryImages() {
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_TOKEN) {
    return null;
  }

  const query = new URLSearchParams({
    content_type: "galleryPage",
    "fields.slug": CONTENTFUL_GALLERY_SLUG,
    include: "2",
    limit: "1",
  });

  const response = await fetch(
    `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}/entries?${query.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
      },
      next: { revalidate: 300 },
    }
  );

  if (!response.ok) {
    throw new Error(`Contentful gallery request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const galleryEntry = payload?.items?.[0];
  const linkedEntries = mapIncludes(payload?.includes?.Entry);
  const linkedAssets = mapIncludes(payload?.includes?.Asset);
  const imageLinks = galleryEntry?.fields?.images;

  if (!galleryEntry || !Array.isArray(imageLinks) || imageLinks.length === 0) {
    return null;
  }

  const normalizedImages = imageLinks
    .map((link, index) => {
      if (link?.sys?.linkType === "Asset") {
        const asset = linkedAssets.get(link?.sys?.id);
        return normalizeContentfulGalleryAsset(asset, index);
      }

      const entry = linkedEntries.get(link?.sys?.id);
      const assetId = getFirstAssetId(entry?.fields?.photo);
      const asset = linkedAssets.get(assetId);

      return normalizeContentfulGalleryImageEntry(entry, asset, index);
    })
    .filter(Boolean);

  return normalizedImages.length > 0 ? normalizedImages : null;
}

export async function getGalleryImages() {
  try {
    const contentfulImages = await fetchContentfulGalleryImages();

    return contentfulImages ?? localGalleryImages;
  } catch (error) {
    console.warn("Falling back to local gallery images.", error);
    return localGalleryImages;
  }
}

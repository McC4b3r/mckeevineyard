# McKee Vineyard v2

This repository now contains the Next.js migration of the original McKee Vineyard site. The Gatsby and Chakra UI setup has been replaced with:

- Next.js app router
- Tailwind CSS for styling
- shadcn-style UI primitives built on Radix
- Next `Image` for local image handling

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
```

The local dev server runs at [http://localhost:3000](http://localhost:3000).

## Contentful Gallery

The gallery is sourced from Contentful.

Set these environment variables to enable the Contentful-backed gallery:

```bash
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_DELIVERY_TOKEN=your_delivery_token
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_GALLERY_SLUG=main-gallery
```

Recommended Contentful setup:

- `galleryPage`
  - `internalName` (`Short text`, required)
  - `slug` (`Short text`, required, unique)
  - `images` (`Media`, many, ordered, required)

Create a single `galleryPage` entry with slug `main-gallery`, then upload or select the gallery photos directly in its `images` field. The gallery order on the site follows the order of the assets in that field.

The `/gallery` route does not fall back to local photos. If Contentful returns no images, the page shows the gallery empty state instead.

For asset metadata:

- use the asset `Title` as an internal editor-facing name
- use the asset `Description` as the public alt text consumed by the site

## Structure

- `app/`: Next.js routes and global app shell
- `src/components/`: shared site components and content sections
- `src/components/ui/`: reusable UI primitives in a shadcn-style pattern
- `src/lib/`: helpers and gallery image data
- `src/images/`: local image assets used by the site

## Migration Notes

- The route structure from the Gatsby app was preserved: `/`, `/about`, `/gallery`, `/history`, `/events`, and `/contact`.
- Chakra components were replaced with Tailwind classes and reusable UI primitives.
- The gallery is sourced from Contentful assets and displayed in a Radix-powered dialog carousel.
- The contact form still uses Formspree, but now through the Next.js client app.

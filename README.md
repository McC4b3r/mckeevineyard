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

## Structure

- `app/`: Next.js routes and global app shell
- `src/components/`: shared site components and content sections
- `src/components/ui/`: reusable UI primitives in a shadcn-style pattern
- `src/lib/`: helpers and gallery image data
- `src/images/`: local image assets used by the site

## Migration Notes

- The route structure from the Gatsby app was preserved: `/`, `/about`, `/gallery`, `/history`, `/events`, and `/contact`.
- Chakra components were replaced with Tailwind classes and reusable UI primitives.
- The gallery now uses local image imports and a Radix-powered dialog carousel.
- The contact form still uses Formspree, but now through the Next.js client app.

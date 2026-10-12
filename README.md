# COMPUTER ENGINEERING RESOURCE INDEX

Libmora is an independent educational resource index for Computer Engineering students. It brings together tools, applications, platforms, hardware, libraries, technical references, and guided project ideas in one searchable website.

## Run locally

Requirements: Node.js and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To check the production build and code style:

```sh
npm run build
npm run lint
```

## Features

- Searchable resource index with category and engineering-area filters
- Resource detail pages with source links and related entries
- Beginner-to-advanced Computer Engineering project guides
- Responsive light and dark themes
- Suggestions form delivered through Formspree
- Contact email link and a MariBank InstaPay QR code on the Suggestions page

The Suggestions form posts to the Formspree endpoint configured in `src/App.tsx`. To use a different Formspree form, update that endpoint there. Formspree handles delivery; configure its recipient and notification settings in your Formspree account.

The donation QR image displayed by the site is `public/donations.jpg`. It is intentionally public so visitors can scan it. Review any payment or contact information before publishing changes to that image.

## Project structure

- `src/App.tsx` - application routes, resource and project views, suggestions and contact pages
- `src/index.css` - shared styles and responsive layouts
- `src/data/catalog.json` - resource records
- `src/data/catalog.ts` - engineering areas and project guides
- `src/data/types.ts` - shared data types
- `public/` - static assets served by Vite, including the donation QR and favicon

## Attribution and verification

Libmora is an independent resource index and is not affiliated with the publishers of listed tools or platforms. Resource names, logos, and linked documentation belong to their respective owners. Verify technical details, safety guidance, source licenses, and terms with the original publishers before using or redistributing third-party materials.

Some brand marks are loaded from public icon CDNs and may require an internet connection. The application can fall back to category icons when a mark is unavailable.

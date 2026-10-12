# Sasha Kerts — multilingual doula website

A Next.js 16 website for Sasha Kerts, a doula based in Buenos Aires. The homepage supports Russian (primary editorial language), Argentine Spanish, and English through one shared layout and centralized content configuration in `app/page.tsx`.

## Content verification before launch

The service descriptions, FAQ answers, pricing, location details, and availability are intentionally written as editable, non-specific information. Sasha should verify these details before publishing. No testimonials are included because no authorized testimonials were supplied.

## Replaceable assets

The application logic references these stable paths:

- `public/images/sasha-hero.png` — hero maternity image
- `public/images/sasha-portrait.png` — portrait image

Replace either file with an appropriately licensed, web-optimized image without changing components. Keep the same filename, or update the `src` in `app/page.tsx`. Sasha's public Instagram (`https://www.instagram.com/kertsasha/`) is a possible source for authentic imagery, subject to permission and image rights.

## Localized content

All visible copy is in the `copy` object in `app/page.tsx`. Add or edit the `ru`, `es`, and `en` entries together so no language becomes incomplete. Argentine Spanish uses voseo (`vos`, `podés`, `escribime`) and `acompañamiento`.

## Deployment

Install dependencies with pnpm, run the production build, and deploy the project through Vercel or the Vercel Git integration. The project has no required environment variables.

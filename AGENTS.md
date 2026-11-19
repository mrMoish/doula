<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


## Project rules: SEO, canonical URLs, and sitemap

This repository is the public website of **Саша Керт**, a Russian-speaking doula in Buenos Aires.
The correct name is **Саша Керт** (never «Саша Кертс»).

When editing the website:

1. Preserve existing SEO metadata, canonical URLs, and structured data unless a change requires updating them. The canonical site origin is `https://doula-nine.vercel.app` until the project owner explicitly changes the domain.
2. For each significant change to a page's visible text, services, pricing, important imagery, structured data, or internal links, check whether that page's `lastModified` value in `app/sitemap.ts` needs updating. Use the actual date of the meaningful change in `YYYY-MM-DD` format, and update it in the **same commit** as the page change.
3. Do **not** change `lastModified` solely because of a new deployment, an unrelated commit, CSS/color/spacing changes, or changes to tooling such as IndexNow. Never use `new Date()` to stamp every page on every build.
4. When adding a new public indexable route, add its canonical URL to the sitemap. When removing a route, remove its URL. Do not add redirects, duplicate URLs, noncanonical pages, or `noindex` pages.
5. Next.js generates `/sitemap.xml` from `app/sitemap.ts` when that file is present. The repository currently has a static `public/sitemap.xml`: **do not create `app/sitemap.ts` alongside it**. When explicitly asked to implement the Next.js sitemap migration, create `app/sitemap.ts` and remove `public/sitemap.xml` in the same change, keeping all currently indexed canonical URLs.
6. Before that migration, keep the existing `public/sitemap.xml` intact. Do not assume the dynamic sitemap exists. Whenever SEO-relevant content changes before the migration, mention that `lastmod` is not yet maintained there.
7. Verify the generated `/sitemap.xml` and relevant SEO metadata whenever changing the sitemap, if build or deployment verification is available. Do not claim a deploy or search engine indexing succeeded without checking.

These instructions are guidance for agents working on this repository. They do not replace runtime validation or automatically trigger sitemap updates without an agent modifying files.

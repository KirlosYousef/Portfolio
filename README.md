# Kirlos Yousef — Portfolio

A recruiter-focused portfolio for a Senior iOS Engineer and Tech Lead. The site presents selected technical case studies, leadership experience, measurable delivery outcomes, and a curated set of current products without shipping a client-side application framework.

## Why this stack

- **Astro** generates semantic, static HTML for fast delivery and dependable SEO.
- **Strict TypeScript** validates project data and component contracts.
- **Native CSS** provides a small, explicit design system without utility or component frameworks.
- **Astro assets** generate responsive AVIF artwork at build time.
- **Minimal JavaScript** is limited to navigation, progressive reveal, and subtle pointer depth.

## Project structure

```text
src/
  assets/          Source artwork processed by Astro
  components/      Typed reusable interface primitives
  content/work/    Seven validated long-form case studies
  data/            Shared professional and product content
  layouts/         Metadata, navigation, transitions, and global behavior
  pages/           Static routes
  styles/          Design tokens and responsive system
tests/
  unit/            Content and inventory contracts
  e2e/             Recruiter journey, accessibility, and responsive behavior
```

## Commands

```bash
pnpm install
pnpm dev
pnpm validate
pnpm test:e2e
pnpm build
pnpm preview
```

`pnpm validate` checks formatting, lint rules, strict Astro/TypeScript contracts, unit tests, and the production build.

## Editing portfolio content

- Professional biography, proof points, experience, and skills live in `src/data/profile.ts`.
- Three concise independent-product highlights live in `src/data/additionalProducts.ts`.
- Each featured project is a Markdown entry in `src/content/work/` with frontmatter validated by `src/content.config.ts`.
- App artwork belongs in `src/assets/apps/`. Content entries reference it through stable `/images/apps/...` identifiers resolved by the shared image component.
- The current résumé is served from `public/resume/`.

Claims should be traceable to the résumé or public product information. Client work must not include confidential implementation details or unsupported metrics.

## Quality principles

- Meaningful content and actions never depend on animation or hover.
- Motion respects `prefers-reduced-motion`.
- All routes have semantic headings, canonical metadata, social previews, and structured data.
- The responsive system is tested from 320px phones through wide desktop layouts.
- Playwright and axe cover navigation, filters, case studies, résumé delivery, and automatically detectable accessibility issues.

## Deployment

The site is statically deployed to GitHub Pages from `master` using the official Astro action. `public/CNAME` preserves `www.kirlosyousef.com`. In repository settings, **Pages → Source** must be set to **GitHub Actions**.

## License and content rights

Source code is available under the [MIT License](LICENSE). Personal copy, résumé content, portrait photography, product artwork, trademarks, and third-party brand assets are not covered by that license and remain the property of their respective owners.

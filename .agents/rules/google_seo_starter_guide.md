# Google SEO Starter Guide Guardrails & Invariants

All page components, metadata structures, and content hierarchies in this codebase must strictly adhere to Google's official SEO Starter Guide standards:

## 1. Crawlability & Indexing Integrity
- **Accurate Sitemaps**: Every URL declared in `app/sitemap.ts` must resolve to an active, valid route returning HTTP 200. Never allow draft or mismatched slugs in `sitemap.xml`.
- **Search Bot Directives**: Maintain open crawling for legitimate web crawlers (`Googlebot`, `Bingbot`, etc.) in `app/robots.ts`. Only block administrative, internal API, or private endpoints.
- **Helpful 404 Experience**: Maintain a branded, helpful `app/not-found.tsx` that provides intuitive navigation back to core service hubs, portfolio, and contact channels.
- **Canonical & Hreflang Alignment**: Ensure every route defines self-referencing canonical URLs and consistent multi-region hreflang alternates (`en-AU`, `en-IN`, `en`, `x-default`).

## 2. Heading Structure & Semantic Hierarchy
- **Single Meaningful H1**: Every page must have exactly one semantic `<h1>` tag that clearly states what the page is about.
- **Logical Progression**: Subheadings must follow logical sequence (`<h1>` -> `<h2>` -> `<h3>`). Never skip heading levels purely for styling; use utility classes for visual appearance.
- **No Hidden or Omitted H1s**: Never comment out or hide hero sections containing the page's primary heading without providing an equivalent replacement.

## 3. Title Links & Snippets (Metadata)
- **Unique, Informative Titles**: Every route must specify a distinct, descriptive `<title>` that accurately reflects page contents. Avoid keyword stuffing and repetitive boilerplate. Use consistent branding templates (`Page Title | ValoSync Global`).
- **Engaging, Unique Meta Descriptions**: Each page must feature a customized, accurate description (130–160 characters) summarizing what the visitor will find.

## 4. Site Organization & Breadcrumb Navigation
- **Shallow, Logical Structure**: Organize content in clear thematic subdirectories (`/services/`, `/portfolio/`, `/industries/`, `/departments/`).
- **Visible Semantic Breadcrumbs**: Every inner subpage must display a visible breadcrumb trail (`<nav aria-label="Breadcrumb">`) allowing users and search engines to understand page hierarchy.
- **Structured Schema (JSON-LD)**: Complement visible breadcrumbs with Schema.org `BreadcrumbList` JSON-LD. Include appropriate schemas (`Organization`, `Service`, `FAQPage`, `CreativeWork`) where relevant.

## 5. Descriptive Anchor Text & Internal Linking
- **Informative Link Text**: Anchor text must clearly describe the destination. Avoid generic text such as "Click here", "Read more", or bare links without context or accessibility labels.
- **Internal Cross-Linking**: Contextually link related services, case studies, and industry solutions so users and bots can explore interconnected capabilities in 1-2 clicks.

## 6. Media & Image Optimization
- **Descriptive Alt Text**: Every informative image must include descriptive, natural `alt` text explaining the image in context. Avoid keyword stuffing.
- **Decorative Images**: Purely decorative background imagery or ambient shapes must use `alt=""` or `aria-hidden="true"`.
- **Next.js Image Best Practices**: Use `next/image` with proper `sizes`, `priority` (for above-the-fold heroes), and modern WebP/AVIF formats to preserve Core Web Vitals.

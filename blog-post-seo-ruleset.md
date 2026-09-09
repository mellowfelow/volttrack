# Blog Post SEO Ruleset (extracted from WebForge v9.1 — lean version for scheduled tasks)

Use this checklist only. Do not read the full WebForge skill or other reference files for this task.

## Meta
- Title: `[Post Title] | [Site Name] Blog` — 60 characters or fewer.
- Meta description: ~150 characters (never over 160). Should match/summarize the first paragraph.
- Keep `og:description` and `twitter:description` identical to the meta description.

## Structure
- Exactly ONE `<h1>` per page — the post title. All other headings are H2/H3.
- Emails, if any appear in body copy, must be entity-encoded (`&#64;`), never plaintext.

## Schema (Article JSON-LD — validate with a JSON parser before shipping)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post Title]",
  "description": "[Meta description]",
  "image": "https://[domain]/images/blog/[slug].webp",
  "author": {"@type": "Organization", "name": "[Site Name]", "url": "https://[domain]/"},
  "publisher": {"@type": "Organization", "name": "[Site Name]", "logo": {"@type": "ImageObject", "url": "https://[domain]/images/logo.webp"}},
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "about": {"@type": "Thing", "name": "[primary topic]"},
  "mentions": [{"@type": "Thing", "name": "[related topic]"}]
}
```
- No bare `Product` schema type inside a blog post.
- BreadcrumbList (if included): array items must be joined `},{` — never `}{` (a `}{` join silently invalidates the entire structured data block).

## Images
- Format: WebP (+ AVIF if pipeline supports it). Never raw unoptimized formats.
- Alt text: descriptive, includes the primary/secondary keyword where natural. Never generic ("blog image 1").
- Hero/cover image: `loading="eager"`. Any other in-post images: `loading="lazy"`.
- Include `width` and `height` attributes.

## Internal linking (mandatory)
- 2–3 internal links to relevant product or category pages.
- 1 link to another related blog post, if one already exists on the site.
- No orphan pages — this post must be linked from somewhere else on the site (e.g., blog index) after publishing.

## Keyword usage
- Use the next unused keyword cluster from `keyword-map.md` / `keyword-cluster.txt` for this site.
- Primary keyword should appear naturally in: title, first paragraph, at least one H2, and image alt text.
- No keyword stuffing — natural readability takes priority over density.

## Content quality gate
- No fabricated brand facts: never invent founders, awards, partnerships, stats, or claims not already established for the site.
- No duplicate content vs. an existing post on the same site.
- Mobile-first readability: short paragraphs, scannable subheadings, no walls of text.

## Before auto-publish/deploy — fail-closed checklist
Publish/commit only if ALL of the following pass. If any fail, save the draft to a `needs-review` location and report which check(s) failed instead of publishing.
- [ ] Title ≤60 chars, correct format
- [ ] Meta description in 140–160 char range
- [ ] Exactly one H1
- [ ] Article JSON-LD present and valid (parses as JSON)
- [ ] 2–3 internal links to product/category pages present
- [ ] All images have alt text + width/height
- [ ] No fabricated claims
- [ ] Not duplicate of an existing post

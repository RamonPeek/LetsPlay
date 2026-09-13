# Live-site comparison and SEO migration

Audited on 13 September 2026. Evidence comes from the live HTML, robots file, and Yoast page sitemap, compared with the generated Astro HTML. This is an implementation audit, not a ranking, Search Console, or Lighthouse report.

## Findings

The original site has useful SEO foundations: canonical URLs, indexable pages, a Yoast sitemap, and Organization/WebSite/breadcrumb structured data. It has several opportunities for improvement:

| Page                                                                                                                        | Original description length | Astro description length | Original H1 count | Astro H1 count | Original images missing alt | Astro images missing alt |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------: | -----------------------: | ----------------: | -------------: | --------------------------: | -----------------------: |
| [Home](https://www.letsplayguitarcenter.nl/)                                                                                |                         714 |                      158 |                 7 |              1 |                           0 |                        0 |
| [Contact](https://www.letsplayguitarcenter.nl/contact/)                                                                     |                     Missing |                      147 |                 1 |              1 |                           0 |                        0 |
| [Music school](https://www.letsplayguitarcenter.nl/gitaarles-basles-zangles-en-bandlessen-neem-je-bij-lets-play-eindhoven/) |                         240 |                      164 |                 2 |              1 |                           0 |                        0 |
| [Guitar repair](https://www.letsplayguitarcenter.nl/gitaar-reparatie/)                                                      |                         361 |                      160 |                 1 |              1 |                           2 |                        0 |

Description lengths are characters, not a Google limit. Shorter, page-specific descriptions make the intended snippet clearer; Google may generate a different snippet. A single primary heading clarifies the document hierarchy; multiple H1 elements alone do not establish a ranking penalty. The redesign also uses distinctive titles that describe each service and its Eindhoven location, following [Google’s title guidance](https://developers.google.com/search/docs/appearance/title-link).

The [original robots file](https://www.letsplayguitarcenter.nl/robots.txt) lacks a sitemap reference. The new generated file explicitly allows crawling and points to `/sitemap.xml`. Old exclusions for `/store/`, `/product/`, and `/nieuws/` are unnecessary for this content site; the webshop remains external.

On the four sampled pages, the original HTML references 19–20 stylesheet elements and 18–20 external script elements. Astro produces one stylesheet reference and zero external script references, with small inline scripts for navigation and the enquiry form. These are HTML element counts, not measured load times or unique network requests. The new school page includes more portraits than the original HTML sample, so asset counts alone cannot establish a performance score.

The redesign adds consistent Open Graph/Twitter metadata, descriptive image alt text, and specific MusicStore structured data with verified address, phone, social profiles, and shop opening hours. It also includes WebSite, WebPage/ContactPage, image, and breadcrumb data. See [Google’s local business guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business) and [breadcrumb guidance](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb). No reviews, ratings, or unsupported business claims were added.

## Original URL coverage and content

The [original page sitemap](https://www.letsplayguitarcenter.nl/page-sitemap.xml) contains 27 URLs, recorded in [original-sitemap-urls.json](original-sitemap-urls.json). Of these, 25 retain their paths, including all 17 teacher profiles, lesson rates, repair prices, and general lesson terms. Two content URLs have direct permanent redirect rules:

| Original path                                                              | New path           |
| -------------------------------------------------------------------------- | ------------------ |
| `/gitaarles-basles-zangles-en-bandlessen-neem-je-bij-lets-play-eindhoven/` | `/muziekschool/`   |
| `/verhuur/`                                                                | `/lets-play-live/` |

The new guitar shop and teacher directory bring the canonical content total to 29. The old sitemap endpoints redirect to the new sitemap. A `/de-muziekschool/` alias is also covered. Redirect sources and the 404 page are excluded from the new sitemap. This mapping follows [Google’s migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

Teacher biographies are based on the published profiles. The school features the 11 teachers listed on the live school page; the directory preserves all 17 indexed profiles. Glenn and Johan have no published biography, so their pages offer enquiry guidance without invented qualifications. Mathias’s profile originally displayed Levi’s image; the redesign uses Mathias’s portrait from the school roster. New portraits remain external image URLs; none were downloaded.

Published lesson and repair prices were retained. The general lesson conditions preserve the original wording, with formatting and whitespace normalized. The original band page links to `/algemene-voorwaarden-bandlessen/`, which returned 404 during this audit; no missing band-specific terms were invented.

## Verification and deployment

Astro’s type check completed with zero errors or warnings, and the production build passed. Browser checks passed on all 29 content pages at 320, 390, 768, 1024, and 1440 pixels: images load, headings fit without horizontal page overflow, the Webshop button remains at the far right, the mobile menu closes with Escape, and no JavaScript runtime errors occurred. Both changed content URLs passed the generated HTML redirect fallback check. The original lesson terms and published price values were also compared with the migrated content.

`npm run check:seo` checks delivered HTML for all 29 canonical pages: unique descriptions and titles, Dutch language, canonical/sitemap agreement, heading hierarchy, social metadata, alt text, valid JSON-LD, business details, breadcrumbs, internal discoverability, original URL coverage, redirect rules, and the excluded/noindex 404 page. A separate staging build verifies `SITE_INDEXABLE=false` marks every content page `noindex`. Development pages are also noindex, following [Google’s indexing guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

Before launch, configure the hosting provider to apply `dist/_redirects` as actual HTTP 301 redirects (supported by Netlify and Cloudflare Pages), or translate the rules in `redirects.mjs` into its server configuration. Astro’s static redirect HTML is a fallback and does not itself return HTTP 301; see [Astro’s redirect documentation](https://docs.astro.build/en/guides/routing/#redirects). The local Python preview verifies the HTML fallback only.

At deployment, verify HTTPS and the preferred `www` hostname, real 301 responses, real 404 responses, accessible external WordPress portraits, and production indexing. Retain any existing Search Console verification and submit `/sitemap.xml`. Search Console access, deployment, and measured search traffic were outside this local implementation.

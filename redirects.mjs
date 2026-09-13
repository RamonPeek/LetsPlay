// Keep the Astro fallback pages and the hosting redirect rules in sync.
export const legacyRedirects = {
  '/gitaarles-basles-zangles-en-bandlessen-neem-je-bij-lets-play-eindhoven/':
    '/muziekschool/',
  '/de-muziekschool/': '/muziekschool/',
  '/verhuur/': '/lets-play-live/',
  '/sitemap_index.xml': '/sitemap.xml',
  '/page-sitemap.xml': '/sitemap.xml',
};

export function hostingRedirectRules() {
  return (
    Object.entries(legacyRedirects)
      .flatMap(([from, to]) => [
        `${from} ${to} 301`,
        ...(from.endsWith('/') ? [`${from.slice(0, -1)} ${to} 301`] : []),
      ])
      .join('\n') + '\n'
  );
}

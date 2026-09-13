import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { legacyRedirects } from '../redirects.mjs';

// Audit the delivered HTML, not just the source components.
const output = resolve(process.argv[2] ?? 'dist');
const staging = process.argv.includes('--staging');
const origin = 'https://www.letsplayguitarcenter.nl';
const read = (path) => readFile(resolve(output, path), 'utf8');
const decode = (text) =>
  text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
const attr = (tag, name) =>
  decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] ?? '');
const tags = (html, name) =>
  [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(
    (match) => match[0],
  );
const meta = (html, name) =>
  tags(html, 'meta').find(
    (tag) => attr(tag, 'name') === name || attr(tag, 'property') === name,
  );
const content = (html, name) => attr(meta(html, name) ?? '', 'content');
const sitemap = await read('sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  decode(match[1]),
);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
assert.equal(
  urls.length,
  29,
  'All main, teacher, pricing, and terms pages are in the sitemap',
);
const titles = new Set();
const descriptions = new Set();
const reachable = new Set(['/']);
const linksByPage = new Map();
for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, origin, `Production origin: ${url}`);
  assert.ok(parsed.pathname.endsWith('/'), `Canonical trailing slash: ${url}`);
  const pathname = parsed.pathname;
  const html = await read(
    pathname === '/' ? 'index.html' : `${pathname.slice(1)}index.html`,
  );
  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] ?? '');
  const description = content(html, 'description');
  assert.ok(
    title.length > 15 && title.length < 85,
    `Descriptive, concise title: ${pathname}`,
  );
  assert.ok(
    description.length > 70 && description.length < 230,
    `Useful description: ${pathname}`,
  );
  assert.ok(!titles.has(title), `Unique title: ${pathname}`);
  assert.ok(!descriptions.has(description), `Unique description: ${pathname}`);
  titles.add(title);
  descriptions.add(description);
  assert.equal(
    tags(html, 'link').filter((tag) => attr(tag, 'rel') === 'canonical').length,
    1,
    `One canonical: ${pathname}`,
  );
  assert.equal(
    attr(
      tags(html, 'link').find((tag) => attr(tag, 'rel') === 'canonical'),
      'href',
    ),
    url,
    `Canonical matches sitemap: ${pathname}`,
  );
  assert.equal(
    (html.match(/<h1\b/g) ?? []).length,
    1,
    `One main heading: ${pathname}`,
  );
  assert.match(html, /<html lang="nl"/, `Dutch document: ${pathname}`);
  assert.match(
    content(html, 'robots'),
    staging ? /noindex/ : /^index, follow/,
    `Indexing policy: ${pathname}`,
  );
  assert.equal(content(html, 'og:title'), title);
  assert.equal(content(html, 'og:description'), description);
  assert.equal(content(html, 'og:url'), url);
  assert.equal(content(html, 'twitter:title'), title);
  assert.ok(content(html, 'og:image:alt'), `Social image alt: ${pathname}`);
  assert.match(
    content(html, 'og:image'),
    /^https:\/\//,
    `Absolute social image: ${pathname}`,
  );
  for (const image of tags(html, 'img'))
    assert.ok(attr(image, 'alt'), `Image alt: ${pathname}`);
  const json = html.match(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/,
  )?.[1];
  assert.ok(json, `Structured data: ${pathname}`);
  const graph = JSON.parse(json)['@graph'];
  const business = graph.find((node) => node['@type'] === 'MusicStore');
  assert.equal(business.address.streetAddress, 'Tongelresestraat 445a');
  assert.equal(business.telephone, '+31408796177');
  assert.equal(business.openingHoursSpecification.length, 7);
  assert.ok(graph.find((node) => node['@type'] === 'WebSite'));
  assert.ok(
    graph.find(
      (node) =>
        node['@type'] ===
        (pathname === '/contact/' ? 'ContactPage' : 'WebPage'),
    ),
  );
  if (pathname !== '/') {
    const breadcrumbs = graph.find(
      (node) => node['@type'] === 'BreadcrumbList',
    );
    assert.ok(breadcrumbs, `Breadcrumb markup: ${pathname}`);
    assert.equal(breadcrumbs.itemListElement.at(-1).item, url);
  }
  linksByPage.set(
    pathname,
    tags(html, 'a')
      .map((tag) => attr(tag, 'href'))
      .filter((href) => href.startsWith('/'))
      .map((href) => href.split('#')[0]),
  );
}
// Crawl the internal link graph from the homepage to detect orphan pages.
for (const path of reachable)
  for (const href of linksByPage.get(path) ?? []) reachable.add(href);
for (const url of urls)
  assert.ok(
    reachable.has(new URL(url).pathname),
    `Page reachable through internal links: ${url}`,
  );
const rules = await read('_redirects');
for (const [from, to] of Object.entries(legacyRedirects)) {
  assert.ok(rules.includes(`${from} ${to} 301`), `Hosting 301 rule: ${from}`);
  if (from.endsWith('/'))
    assert.ok(rules.includes(`${from.slice(0, -1)} ${to} 301`));
}
const original = JSON.parse(
  await readFile(
    new URL('../docs/original-sitemap-urls.json', import.meta.url),
    'utf8',
  ),
);
for (const url of original) {
  const path = new URL(url).pathname;
  assert.ok(
    urls.includes(url) || legacyRedirects[path],
    `Preserved or redirected original URL: ${url}`,
  );
}
const robots = await read('robots.txt');
assert.match(robots, /Allow: \//);
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const error = await read('404.html');
assert.match(content(error, 'robots'), /noindex/);
assert.ok(!tags(error, 'link').some((tag) => attr(tag, 'rel') === 'canonical'));
assert.ok(
  !urls.some(
    (url) =>
      url.includes('404') ||
      Object.hasOwn(legacyRedirects, new URL(url).pathname),
  ),
);
console.log(
  `SEO checks passed: ${urls.length} canonical pages; all ${original.length} original sitemap URLs preserved or redirected; ${staging ? 'staging noindex' : 'production indexing'} verified.`,
);

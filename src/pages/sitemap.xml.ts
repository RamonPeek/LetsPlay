import type { APIRoute } from 'astro';
import { absoluteUrl } from '../utils/urls';
import { seoPages } from '../data/seo';

export const GET: APIRoute = ({ site }) => {
  // Only canonical content pages belong here, not errors or redirect sources.
  const routes = Object.keys(seoPages);
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${absoluteUrl(route, site)}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

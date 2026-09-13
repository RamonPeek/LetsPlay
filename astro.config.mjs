import { defineConfig } from 'astro/config';
import { legacyRedirects, hostingRedirectRules } from './redirects.mjs';
import { writeFile } from 'node:fs/promises';

const base = (process.env.SITE_BASE_PATH || '').replace(/\/$/, '');

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.letsplayguitarcenter.nl',
  base: process.env.SITE_BASE_PATH || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  redirects: Object.fromEntries(
    Object.entries(legacyRedirects).map(([from, to]) => [from, `${base}${to}`]),
  ),
  integrations: [
    {
      name: 'letsplay-hosting-redirects',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          await writeFile(new URL('_redirects', dir), hostingRedirectRules());
        },
      },
    },
  ],
});

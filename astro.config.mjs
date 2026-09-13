import { defineConfig } from 'astro/config';
import { legacyRedirects, hostingRedirectRules } from './redirects.mjs';
import { writeFile } from 'node:fs/promises';

export default defineConfig({
  site: 'https://www.letsplayguitarcenter.nl',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  redirects: legacyRedirects,
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

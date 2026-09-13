// Astro's base applies to generated assets, but author-written links need it too.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  return path.startsWith('/') && !path.startsWith('//')
    ? `${base}${path}`
    : path;
}

export function withoutBase(path: string): string {
  return base && (path === base || path.startsWith(`${base}/`))
    ? path.slice(base.length) || '/'
    : path;
}

export function absoluteUrl(
  path: string,
  site: URL | string | undefined,
): string {
  return new URL(withBase(path), site).href;
}

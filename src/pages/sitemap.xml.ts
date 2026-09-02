import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blogs');
  const base = site ?? new URL('https://debuglog.dev');
  const urls = ['/', '/topics', ...posts.map(p => `/blog/${p.slug}`)];
  const body = urls.map(path => `  <url><loc>${new URL(path, base).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, {
    headers: {'Content-Type':'application/xml'}
  });
};

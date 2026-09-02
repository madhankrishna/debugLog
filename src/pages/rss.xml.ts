import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blogs');
  const base = site ?? new URL('https://debuglog.dev');
  const sorted = posts.sort((a,b) => b.data.date.valueOf() - a.data.date.valueOf());
  const items = sorted.map(p => `<item><title><![CDATA[${p.data.title}]]></title><link>${new URL(`/blog/${p.slug}`, base).href}</link><guid>${new URL(`/blog/${p.slug}`, base).href}</guid><pubDate>${p.data.date.toUTCString()}</pubDate><description><![CDATA[${p.data.description}]]></description></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>debugLog</title><link>${base.href}</link><description>Salesforce notes for builders.</description>${items}</channel></rss>`, {
    headers: {'Content-Type':'application/rss+xml'}
  });
};

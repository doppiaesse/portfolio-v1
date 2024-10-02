import type { Page } from '$lib/utils/types';
import type { RequestHandler } from './$types';

const site = 'https://simonesalerno.it';
const pages: Page[] = [
	{ slug: 'it', lastMod: '2024-09-28', priority: 1, hreflang: 'it' },
	{ slug: 'en', lastMod: '2024-09-28', priority: 1, hreflang: 'en' }
];

export const GET: RequestHandler = async () => {
	const body = sitemap(pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
};

const sitemap = (pages: Page[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${site}/${page.slug}</loc>
    <changefreq>daily</changefreq>
    <lastmod>${page.lastMod}</lastmod>
    <priority>${page.priority}</priority>
    ${pages
			.filter((altPage) => altPage.slug !== page.slug)
			.map(
				(altPage) => `
    <xhtml:link
      rel="alternate"
      hreflang="${altPage.hreflang}"
      href="${site}/${altPage.slug}"
    />`
			)
			.join('')}
  </url>
  `
		)
		.join('')}
</urlset>`;

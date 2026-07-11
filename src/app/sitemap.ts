import { MetadataRoute } from 'next';
import { site } from '../data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // Dynamically resolve baseUrl based on Vercel deployment URL or site config
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : site.url;

  const routes = site.nav.map((item) => ({
    url: `${baseUrl}${item.href === '/' ? '' : item.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1.0 : 0.8,
  }));

  return routes;
}

import { MetadataRoute } from 'next';
import { site } from '../data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = site.nav.map((item) => ({
    url: `${site.url}${item.href === '/' ? '' : item.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1.0 : 0.8,
  }));

  return routes;
}

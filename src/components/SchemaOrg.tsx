import { site } from '../data/site';
import { products } from '../data/products';

interface Props {
  type: 'organization' | 'person' | 'website' | 'products';
}

export default function SchemaOrg({ type }: Props) {
  let schemaData: any = null;

  if (type === 'organization') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      description: site.description,
      founder: {
        '@type': 'Person',
        name: site.founder.name,
        jobTitle: site.founder.title,
      },
      sameAs: [site.founder.linkedin, site.founder.github],
    };
  } else if (type === 'person') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${site.url}/founder/#person`,
      name: site.founder.name,
      jobTitle: site.founder.title,
      worksFor: {
        '@type': 'Organization',
        name: site.name,
        url: site.url,
      },
      description: site.founder.bio,
      sameAs: [site.founder.linkedin, site.founder.github],
    };
  } else if (type === 'website') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      name: site.name,
      url: site.url,
      description: site.tagline,
      publisher: {
        '@id': `${site.url}/#organization`,
      },
    };
  } else if (type === 'products') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Zydrakon AI Product Suite',
      description: 'The complete software suite and Developer tools by Zydrakon AI.',
      url: `${site.url}/products`,
      numberOfItems: products.length,
      itemListElement: products.map((prod, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: prod.title,
          description: prod.description,
          category: 'Software Application',
          offers: {
            '@type': 'Offer',
            price: '0.00',
            priceCurrency: 'USD',
            availability: prod.status === 'available' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
          },
        },
      })),
    };
  }

  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

import type { Metadata } from 'next';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import FAQ from '../../components/FAQ';
import SchemaOrg from '../../components/SchemaOrg';

export const metadata: Metadata = {
  title: 'AI Products | Zydrakon AI',
  description:
    'Discover the Zydrakon AI product suite: Nexus AI Platform, Forge SDK, and Sentinel AI. Tools built to deploy reliable, safe agentic workflows.',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Products</span>
            <h1 className="text-4xl font-extrabold tracking-tight mt-3 mb-4 text-text-primary">Our Product Suite</h1>
            <p className="text-text-muted">
              Intelligent agent orchestration, safe developer SDKs, and enterprise safety guardrails built to run autonomous workflows in production.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <SchemaOrg type="products" />
    </>
  );
}

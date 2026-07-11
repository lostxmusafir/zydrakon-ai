import type { Product } from '../data/products';
import * as Icons from 'lucide-react';

interface Props {
  product: Product;
}

const statusColors: Record<string, string> = {
  available: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  beta: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'coming-soon': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

const statusLabels: Record<string, string> = {
  available: 'Available',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
};

export default function ProductCard({ product }: Props) {
  // Dynamically load the icon
  const IconComponent = (Icons as any)[product.icon] || Icons.HelpCircle;

  return (
    <div className="group relative rounded-2xl border border-white/5 bg-surface/50 p-8 hover:bg-surface/80 hover:border-white/10 transition-all">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <IconComponent size={24} />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[product.status]}`}>
            {statusLabels[product.status]}
          </span>
        </div>

        <h3 className="text-xl font-bold text-text-primary mb-1">{product.title}</h3>
        <p className="text-sm text-accent font-medium mb-4">{product.tagline}</p>
        <p className="text-sm text-text-muted leading-relaxed mb-6">{product.description}</p>

        <ul className="space-y-2">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <Icons.CheckCircle size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

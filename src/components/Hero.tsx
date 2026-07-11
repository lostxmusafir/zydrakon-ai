import Link from 'next/link';
import { site } from '../data/site';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-base pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container relative z-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Founded by {site.founder.name}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
            <span className="text-text-primary">Engineer the</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Future of Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {site.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/founder"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-text-primary font-semibold text-sm transition-all hover:bg-white/5"
            >
              Meet the Founder
            </Link>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
          <div className="relative w-[400px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-full blur-3xl animate-glow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-6 gap-3 opacity-[0.07]">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-sm bg-white" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

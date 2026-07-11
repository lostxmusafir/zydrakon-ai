import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center rounded-3xl border border-white/5 bg-gradient-to-b from-surface/80 to-surface/40 p-8 md:p-16 backdrop-blur-xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-text-secondary md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Get in touch to learn how Zydrakon AI can power your autonomous agent workflows and enterprise backend architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-text-primary font-semibold text-sm transition-all hover:bg-white/5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

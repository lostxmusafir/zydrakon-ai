import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '../../data/site';

export const metadata: Metadata = {
  title: 'About Zydrakon AI | AI Company Founded by Raj Patil',
  description:
    'About Zydrakon AI — Founded by Raj Patil. Discover our mission to build safe, developer-first, and enterprise-ready agentic AI systems.',
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
    <section className="py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-text-primary">
          About Zydrakon AI
        </h1>

        <div className="space-y-12">
          {/* Mission */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Mission</span>
            <h2 className="text-2xl font-bold mt-2 mb-4 text-text-primary">Engineering the Future of Intelligence</h2>
            <p className="text-text-secondary leading-relaxed">
              Zydrakon AI is dedicated to constructing the next generation of artificial intelligence tools, platforms, and orchestration SDKs. Our core objective is to empower software developers and large enterprises to configure and deploy safe, autonomous agentic systems with total predictability and security.
            </p>
          </div>

          {/* Founder Connection */}
          <div className="p-8 rounded-2xl border border-white/5 bg-surface/30">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Leadership</span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-text-primary">Founder-Led Innovation</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Zydrakon AI was founded by **{site.founder.name}**, a passionate AI engineer and backend developer with 4+ years of experience designing and deploying distributed applications, multi-agent frameworks, and high-performance server architectures.
            </p>
            <Link
              href="/founder"
              className="text-sm font-semibold text-primary hover:text-primary-light transition-colors"
            >
              Meet founder Raj Patil &rarr;
            </Link>
          </div>

          {/* Philosophy */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Core Principles</span>
            <h2 className="text-2xl font-bold mt-2 mb-6 text-text-primary">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-white/5 bg-surface/20">
                <h4 className="font-bold text-text-primary mb-2">Developer-First</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  We create tools that we would love to use. Clean APIs, thorough documentation, and lightweight libraries.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-white/5 bg-surface/20">
                <h4 className="font-bold text-text-primary mb-2">Safety by Design</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  AI deployment requires robust safety boundaries, real-time auditing, and strict output schema enforcement.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-white/5 bg-surface/20">
                <h4 className="font-bold text-text-primary mb-2">Practical Utility</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  We build solutions focused on solving tangible system engineering bottlenecks, avoiding speculative abstractions.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-white/5 bg-surface/20">
                <h4 className="font-bold text-text-primary mb-2">Continuous Research</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  Our development is supported by direct research into low-latency JSON processing and multi-agent coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

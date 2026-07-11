import type { Metadata } from 'next';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Blog | Zydrakon AI',
  description:
    'Read technical deep dives, system architectures, and engineering blogs from the Zydrakon AI team.',
  alternates: {
    canonical: '/blog',
  },
};

const blogPosts = [
  {
    title: 'Designing Lightweight Agent Loops in Node.js & TypeScript',
    excerpt:
      'We walk through designing a minimal agent execution loop using standard TypeScript libraries, eliminating heavy dependency chains and speculative abstractions.',
    date: 'July 10, 2026',
    author: 'Raj Patil',
    readTime: '6 min read',
  },
  {
    title: 'Migrating from Webpack to Vite: A Production Guide',
    excerpt:
      'How we optimized our dashboard compilation times and improved hot module reloading latency by moving our front-end toolchains to Vite.',
    date: 'June 28, 2026',
    author: 'Raj Patil',
    readTime: '4 min read',
  },
  {
    title: 'Deploying High-Performance JSON-Schema Validation at the Edge',
    excerpt:
      'We examine using Vercel Edge functions for low-latency request and response body compliance validation, ensuring strict types for AI tool execution.',
    date: 'May 15, 2026',
    author: 'Raj Patil',
    readTime: '8 min read',
  },
];

export default function Blog() {
  return (
    <section className="py-24">
      <div className="container max-w-4xl">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Engineering Blog</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-3 mb-4 text-text-primary">Engineering Insights</h1>
          <p className="text-text-muted leading-relaxed">
            Technical guides, architecture walkthroughs, and system design insights published by Raj Patil and the Zydrakon AI engineering team.
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post, i) => (
            <article key={i} className="group relative border-b border-white/5 pb-12 last:border-0">
              <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={12} />
                  By {post.author}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">{post.excerpt}</p>
              <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-primary-light transition-colors">
                Read Article
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

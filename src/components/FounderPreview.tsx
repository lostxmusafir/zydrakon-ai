import Link from 'next/link';
import { site } from '../data/site';
import { ArrowRight, Linkedin, Github } from 'lucide-react';

export default function FounderPreview() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[9/16] max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 p-1 overflow-hidden group">
              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-surface">
                <img
                  src="/images/founder.jpg"
                  alt={site.founder.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/30 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-text-primary">{site.founder.name}</h3>
                  <p className="text-primary-light text-sm font-medium mt-1">{site.founder.title}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          <div className="animate-fade-in-up">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Founder &amp; CEO</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-text-primary">
              Meet <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{site.founder.name}</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">{site.founder.bio}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {site.founder.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-text-muted text-sm font-medium">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/founder"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
              >
                Full Story
                <ArrowRight size={16} />
              </Link>
              <a
                href={site.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 text-text-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={site.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 text-text-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

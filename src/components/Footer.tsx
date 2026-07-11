import Link from 'next/link';
import { site } from '../data/site';
import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-mono font-bold text-sm">
                Z
              </span>
              <span className="font-semibold text-lg tracking-tight text-text-primary">
                {site.name}
              </span>
            </Link>
            <p className="text-text-muted text-sm max-w-sm leading-relaxed">
              {site.description}
            </p>
            <p className="mt-3 text-sm text-text-muted">
              Founded by{' '}
              <Link href="/founder" className="text-primary hover:text-primary-light transition-colors">
                {site.founder.name}
              </Link>
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={site.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-text-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={site.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-text-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-text-primary mb-4">Pages</h4>
            <nav className="flex flex-col gap-3">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-text-primary mb-4">Connect</h4>
            <nav className="flex flex-col gap-3">
              <a
                href={site.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={site.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                GitHub
              </a>
              <Link href="/contact" className="text-sm text-text-muted hover:text-text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-text-muted">
            &copy; 2026 {site.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            {site.founder.title} —{' '}
            <Link href="/founder" className="text-primary hover:text-primary-light transition-colors">
              {site.founder.name}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

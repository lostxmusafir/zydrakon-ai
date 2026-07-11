import type { Metadata } from 'next';
import { site } from '../../data/site';
import ContactForm from '../../components/ContactForm';
import { Mail, Linkedin, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Zydrakon AI',
  description:
    'Get in touch with Zydrakon AI or connect with founder Raj Patil for partnerships and developer inquiries.',
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <section className="py-24">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Connect */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Get In Touch</span>
              <h1 className="text-4xl font-extrabold tracking-tight mt-3 mb-4 text-text-primary">Contact Us</h1>
              <p className="text-text-secondary leading-relaxed">
                Have questions about Forge SDK, enterprise integrations, or AI safety? Connect with us directly or drop a message through the form.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-surface/30 hover:bg-surface/50 hover:border-white/10 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Email Us</div>
                  <div className="text-sm font-semibold text-text-primary">{site.contact.email}</div>
                </div>
              </a>

              <a
                href={site.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-surface/30 hover:bg-surface/50 hover:border-white/10 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-xs text-text-muted">LinkedIn</div>
                  <div className="text-sm font-semibold text-text-primary">Connect with Raj Patil</div>
                </div>
              </a>

              <a
                href={site.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-surface/30 hover:bg-surface/50 hover:border-white/10 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Github size={20} />
                </div>
                <div>
                  <div className="text-xs text-text-muted">GitHub</div>
                  <div className="text-sm font-semibold text-text-primary">Follow lostxmusafir</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

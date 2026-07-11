import type { Metadata } from 'next';
import { site } from '../../data/site';
import SchemaOrg from '../../components/SchemaOrg';
import { Linkedin, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Raj Patil | Founder & CEO | Zydrakon AI',
  description:
    'Raj Patil is the Founder & CEO of Zydrakon AI. Read his background in backend architecture, AI safety, and agentic workflows.',
  alternates: {
    canonical: '/founder',
  },
};

export default function Founder() {
  return (
    <>
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Left Column: Image Card & Quick Links */}
            <div className="md:col-span-1 space-y-6">
              <div className="aspect-[9/16] w-full rounded-2xl border border-white/5 bg-surface/30 overflow-hidden relative">
                <img
                  src="/images/founder.jpg"
                  alt={site.founder.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
              </div>

              <div className="flex gap-3 justify-center">
                <a
                  href={site.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-text-muted hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium w-full"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href={site.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-text-muted hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium w-full"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Right Column: Bio & Message */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Founder Profile</span>
                <h1 className="text-3xl md:text-4xl font-bold mt-2 text-text-primary">{site.founder.name}</h1>
                <p className="text-primary-light font-medium text-sm mt-1">{site.founder.title}, Zydrakon AI</p>
              </div>

              <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
                <p>
                  Welcome to Zydrakon AI. I am an AI engineer and backend developer dedicated to building the future of autonomous systems and distributed architectures.
                </p>
                <p>
                  With **4 years** of experience building software architectures, API frameworks, and containerized backend microservices, my focus has shifted towards addressing the execution safety and memory scaling limits of multi-agent networks.
                </p>
                <p>
                  At Zydrakon AI, we are focused on writing clean, developer-friendly libraries like the **Forge SDK** and designing scalable systems like **Nexus AI Platform** to let developers build agents that run reliably under commercial environments without layout, latency, or logic surprises.
                </p>
              </div>

              {/* Core Focus Area */}
              <div>
                <h3 className="font-bold text-text-primary mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-text-secondary font-medium">
                    Agentic Workflow Orchestration
                  </span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-text-secondary font-medium">
                    High-Performance API Pipelines
                  </span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-text-secondary font-medium">
                    Output Guardrails & Safety
                  </span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-text-secondary font-medium">
                    Vector DB & RAG Systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SchemaOrg type="person" />
    </>
  );
}

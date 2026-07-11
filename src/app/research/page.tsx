import type { Metadata } from 'next';
import { Shield, Zap, RefreshCw, BarChart2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Research | Zydrakon AI',
  description:
    'Zydrakon AI technical reports, white papers, and research fields in safe multi-agent systems and low-latency planning.',
  alternates: {
    canonical: '/research',
  },
};

const researchPapers = [
  {
    title: 'Safe Multi-Agent Coordination via Sentinel Guardrails',
    abstract:
      'This technical report proposes the Sentinel protocol, a lightweight schema validation and real-time execution sandboxing framework designed to eliminate malicious or unstable tool-use actions in autonomous agent networks.',
    date: 'June 2026',
    category: 'AI Safety',
    icon: Shield,
  },
  {
    title: 'Optimizing Context Window Latency in Agentic Memory Retrieval',
    abstract:
      'We examine memory structures for agent planning and propose an indexed vector-cache system that reduces memory retrieval latency by up to 43% under dense multi-turn conversation logs.',
    date: 'April 2026',
    category: 'Performance',
    icon: Zap,
  },
  {
    title: 'Self-Correction Loops in Small Language Model Tool-Execution',
    abstract:
      'An analysis of validation loops inside 8B-parameter open-source models, demonstrating that dual-phase feedback loops can increase tool-calling accuracy without fine-tuning overhead.',
    date: 'February 2026',
    category: 'Agent Logic',
    icon: RefreshCw,
  },
];

export default function Research() {
  return (
    <section className="py-24">
      <div className="container max-w-4xl">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Research Hub</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-3 mb-4 text-text-primary">Technical Research</h1>
          <p className="text-text-muted leading-relaxed">
            We publish findings on AI safety, agent planning latency, structured data output parsing, and deterministic tool pipelines.
          </p>
        </div>

        {/* Areas of Lab Focus */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl border border-white/5 bg-surface/30">
            <h3 className="font-bold text-text-primary flex items-center gap-2 mb-3">
              <Shield size={18} className="text-primary" />
              Determinism
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              We design tools that guarantee output conformity through JSON Schema validation before tools are called by the system.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-white/5 bg-surface/30">
            <h3 className="font-bold text-text-primary flex items-center gap-2 mb-3">
              <BarChart2 size={18} className="text-primary" />
              Efficiency
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Our research focuses on minimizing token overhead and API roundtrips during dense multi-agent planning cycles.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mb-6">Publications & Technical Reports</h2>
        <div className="space-y-6">
          {researchPapers.map((paper, i) => {
            const Icon = paper.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/5 bg-surface/20 hover:bg-surface/30 transition-colors"
              >
                <div className="flex items-start gap-4 justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {paper.category}
                  </span>
                  <span className="text-xs text-text-muted">{paper.date}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
                  <Icon size={20} className="text-primary shrink-0" />
                  {paper.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{paper.abstract}</p>
                <button className="mt-4 text-xs font-semibold text-primary hover:text-primary-light transition-colors">
                  Read Technical Paper &rarr;
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export interface Product {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  status: 'available' | 'beta' | 'coming-soon';
}

export const products: Product[] = [
  {
    id: 'nexus-ai',
    icon: 'cpu',
    title: 'Nexus AI Platform',
    tagline: 'Enterprise-grade AI orchestration',
    description:
      'A comprehensive AI platform for building, deploying, and monitoring intelligent agents at scale. Nexus AI provides seamless integration with leading LLMs, vector databases, and observability tools.',
    features: [
      'Multi-model orchestration',
      'Agentic workflow engine',
      'Real-time monitoring',
      'Vector store integration',
      'Enterprise security & RBAC',
    ],
    status: 'beta',
  },
  {
    id: 'forge-sdk',
    icon: 'hammer',
    title: 'Forge SDK',
    tagline: 'Build AI agents in minutes',
    description:
      'An open-source SDK for rapidly building AI agents and autonomous systems. Forge SDK provides abstractions for tool use, memory management, and multi-agent coordination.',
    features: [
      'Agent framework',
      'Tool-use system',
      'Memory & context management',
      'Multi-agent coordination',
      'TypeScript & Python support',
    ],
    status: 'available',
  },
  {
    id: 'sentinel',
    icon: 'shield',
    title: 'Sentinel AI',
    tagline: 'AI safety & monitoring',
    description:
      'A monitoring and safety system for AI applications in production. Sentinel AI provides guardrails, output validation, and real-time alerts to ensure responsible AI deployment.',
    features: [
      'Content guardrails',
      'Output validation',
      'Anomaly detection',
      'Audit logging',
      'Compliance reporting',
    ],
    status: 'coming-soon',
  },
];

export const faqs = [
  {
    question: 'What is Zydrakon AI?',
    answer:
      'Zydrakon AI is an artificial intelligence company founded by Raj Patil. We specialize in building AI products, developer tools, and agentic AI solutions for enterprises and developers.',
  },
  {
    question: 'Who is the founder of Zydrakon AI?',
    answer:
      'Zydrakon AI was founded by Raj Patil, an AI Engineer and Backend Developer with expertise in building intelligent systems and agentic AI frameworks.',
  },
  {
    question: 'What products does Zydrakon AI offer?',
    answer:
      'Zydrakon AI offers the Nexus AI Platform for enterprise AI orchestration, Forge SDK for building AI agents, and Sentinel AI for AI safety monitoring. More products are in development.',
  },
  {
    question: 'Is Forge SDK open source?',
    answer:
      'Yes, Forge SDK is open source and available on GitHub. You can contribute, fork, and use it to build AI agents and autonomous systems.',
  },
  {
    question: 'How can I contact Zydrakon AI?',
    answer:
      'You can reach out through the contact form on our website or connect with founder Raj Patil on LinkedIn and GitHub.',
  },
];

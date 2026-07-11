export const site = {
  name: 'Zydrakon AI',
  tagline: 'Engineer the Future of Intelligence',
  description:
    'Zydrakon AI is an artificial intelligence company founded by Raj Patil, specializing in AI engineering, backend development, and agentic AI solutions.',
  url: 'https://zydrakon.ai',
  founder: {
    name: 'Raj Patil',
    title: 'Founder & CEO',
    roles: ['AI Engineer', 'Backend Developer', 'Agentic AI Engineer'],
    bio: 'Raj Patil is the Founder & CEO of Zydrakon AI, an AI engineer passionate about building intelligent systems that solve real-world problems. With deep expertise in backend architecture, artificial intelligence, and agentic AI frameworks, Raj leads Zydrakon AI in engineering the future of intelligence.',
    shortBio:
      'AI Engineer & Founder of Zydrakon AI. Building the future of intelligent systems.',
    linkedin: 'https://www.linkedin.com/in/rajpatilai',
    github: 'https://github.com/lostxmusafir',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/rajpatilai',
    github: 'https://github.com/lostxmusafir',
  },
  contact: {
    email: 'hello@zydrakon.ai',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Research', href: '/research' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Zydrakon AI | Official Website | Founded by Raj Patil',
    description:
      'Zydrakon AI is an artificial intelligence company founded by Raj Patil. We build AI products, developer tools, and agentic AI solutions.',
  },
  '/about': {
    title: 'About Zydrakon AI | AI Company Founded by Raj Patil',
    description:
      'Learn about Zydrakon AI, its mission, and its values as an agentic artificial intelligence company founded by Raj Patil.',
  },
  '/founder': {
    title: 'Raj Patil | Founder & CEO | Zydrakon AI',
    description:
      'Meet Raj Patil, Founder & CEO of Zydrakon AI. AI Engineer, Backend Developer, and Agentic AI framework architect.',
  },
  '/products': {
    title: 'AI Products | Zydrakon AI',
    description:
      'Explore advanced AI products from Zydrakon AI: Nexus AI Platform, Forge SDK, and Sentinel AI.',
  },
  '/research': {
    title: 'AI Research | Zydrakon AI',
    description:
      'Explore Zydrakon AI\'s research papers, publications, and breakthroughs in agentic AI and intelligent systems.',
  },
  '/blog': {
    title: 'Engineering Blog | Zydrakon AI',
    description:
      'Read technical blogs, articles, and guides on AI engineering, backend systems, and agentic AI from Zydrakon AI.',
  },
  '/contact': {
    title: 'Contact Zydrakon AI — Let\'s Build the Future',
    description:
      'Get in touch with Zydrakon AI. Reach out to founder Raj Patil for collaborations, inquiries, and partnerships.',
  },
};

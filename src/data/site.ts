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
    { label: 'Contact', href: '/contact' },
  ],
};

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Zydrakon AI — Engineer the Future of Intelligence',
    description:
      'Zydrakon AI is an artificial intelligence company founded by Raj Patil. We build AI products, developer tools, and agentic AI solutions.',
  },
  '/about': {
    title: 'About — Raj Patil, Founder & CEO of Zydrakon AI',
    description:
      'Learn about Raj Patil, Founder & CEO of Zydrakon AI. AI Engineer, Backend Developer, and Agentic AI Engineer building the future of intelligence.',
  },
  '/products': {
    title: 'AI Products & Developer Tools — Zydrakon AI',
    description:
      'Explore AI products and solutions from Zydrakon AI, founded by Raj Patil. AI platform, developer tools, and research lab.',
  },
  '/contact': {
    title: 'Contact Zydrakon AI — Let\'s Build the Future',
    description:
      'Get in touch with Zydrakon AI. Reach out to founder Raj Patil for collaborations, inquiries, and partnerships.',
  },
};

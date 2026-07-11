# Zydrakon AI

<p align="center">
  <img src="https://zydrakon.ai/logo.png" alt="Zydrakon AI Logo" width="120px" height="120px" />
</p>

<p align="center">
  <strong>Engineer the Future of Intelligence</strong>
</p>

<p align="center">
  <a href="https://github.com/lostxmusafir/seo.website-ai/actions"><img src="https://github.com/lostxmusafir/seo.website-ai/workflows/CI/CD/badge.svg" alt="CI/CD Status" /></a>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/deployed-Vercel-black.svg" alt="Vercel" /></a>
  <a href="https://astro.build"><img src="https://img.shields.io/badge/framework-Astro-ff5e00.svg" alt="Astro" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/styling-Tailwind%20CSS-38bdf8.svg" alt="Tailwind CSS" /></a>
  <a href="https://github.com/lostxmusafir/seo.website-ai/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
</p>

---

## 🚀 Overview

Zydrakon AI is an artificial intelligence company pioneering autonomous agentic intelligence, orchestration platforms, and safety guardrails. We build tools that empower developers to construct multi-agent networks, secure tool pipelines, and deploy AI agents at scale.

This repository (`zydrakon-ai`) is the central portal for the Zydrakon AI ecosystem, housing the official website, engineering blog, documentation portal, and AI research hub.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) (Static Site Generation & Islands Architecture)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Utility-First CSS)
- **Icons**: [Iconify / Lucide Icons](https://iconify.design)
- **Structured Data**: JSON-LD Schema.org (Organization, Person, Product, FAQ, ItemList)
- **Deployment**: [Vercel](https://vercel.app)
- **AI Crawler Optimization**: `llms.txt` + robots.txt configurations for ChatGPT, Claude, Gemini, and Perplexity.

---

## ✨ Features

- ⚡ **Near-Zero JS Page Loads**: High performance leveraging Astro static site generation.
- 🎨 **Premium Aesthetics**: Sleek dark-mode theme, glassmorphic elements, and fluid micro-animations.
- 📱 **Fully Responsive Layout**: Mobile-first design adapting seamlessly from 320px screens to large 4K monitors.
- 🔍 **SEO & GEO Ready**: In-depth metadata tags, dynamic JSON-LD schemas, XML sitemap generation, and AI-crawler targeted `llms.txt`.
- 📂 **Multi-Section Portal**: Includes Home, About, Founder, Products, Research, and Engineering Blog.

---

## 📁 Repository Structure

```
zydrakon-ai/
├── .github/               # GitHub workflows and issue templates
├── config/                # Environment configurations
├── content/               # Markdown content collections (blog, docs, research, etc.)
├── docs/                  # Project documentation
├── public/                # Static assets (images, favicon, robots.txt, llms.txt)
├── schemas/               # JSON Schema validations for configs and data
├── scripts/               # Automation scripts (deployment, checks, site-mapping)
├── seo/                   # SEO/GEO specific audits and baselines
└── src/                   # Source files
    ├── assets/            # Uncompiled local media assets
    ├── components/        # Reusable UI components
    ├── data/              # TS data structures and metadata
    ├── hooks/             # Custom utility hooks
    ├── layouts/           # Page layouts (BaseLayout)
    ├── lib/               # Third-party library initializations
    ├── pages/             # Astro file-system routes
    ├── styles/            # Global styling sheets (global.css)
    ├── types/             # TS declarations and types
    └── utils/             # Helper utilities
```

---

## 💻 Getting Started

### Prerequisites

- Node.js (>=22.12.0)
- npm (>=10.0.0)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lostxmusafir/seo.website-ai.git zydrakon-ai
   cd zydrakon-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build

Build the static site:
```bash
npm run build
```
Verify the build locally:
```bash
npm run preview
```

---

## 🚢 Deployment

This site is automatically deployed via **Vercel** on every push to the `main` branch. 

To trigger a manual production deployment from CLI:
```bash
npx vercel --prod --yes
```

---

## 🤝 Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before making submissions.

1. Fork the Repository.
2. Create a Feature Branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes using Conventional Commits (`git commit -m "feat: add amazing feature"`).
4. Push to the Branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

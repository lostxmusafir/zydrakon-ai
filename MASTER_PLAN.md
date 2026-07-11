# Zydrakon AI — Master Plan

This document serves as the absolute Source of Truth for Zydrakon AI's strategic direction, branding, engineering standards, folder structures, design tokens, SEO policies, and long-term vision.

---

## Table of Contents

- [01 Executive Summary](#01-executive-summary)
- [02 Company Vision](#02-company-vision)
- [03 Brand Identity](#03-brand-identity)
- [04 Design System](#04-design-system)
- [05 UI Guidelines](#05-ui-guidelines)
- [06 Typography](#06-typography)
- [07 Color System](#07-color-system)
- [08 Animation Rules](#08-animation-rules)
- [09 Layout Rules](#09-layout-rules)
- [10 Component Library](#10-component-library)
- [11 Pages](#11-pages)
- [12 SEO](#12-seo)
- [13 Google AI Optimization](#13-google-ai-optimization)
- [14 Structured Data](#14-structured-data)
- [15 Knowledge Graph](#15-knowledge-graph)
- [16 LLM Optimization](#16-llm-optimization)
- [17 Blog Strategy](#17-blog-strategy)
- [18 Documentation](#18-documentation)
- [19 Products](#19-products)
- [20 Founder Page](#20-founder-page)
- [21 Careers](#21-careers)
- [22 Contact](#22-contact)
- [23 Press Kit](#23-press-kit)
- [24 Research](#24-research)
- [25 Analytics](#25-analytics)
- [26 Security](#26-security)
- [27 Deployment](#27-deployment)
- [28 CI/CD](#28-cicd)
- [29 Performance](#29-performance)
- [30 Accessibility](#30-accessibility)
- [31 Lighthouse](#31-lighthouse)
- [32 Testing](#32-testing)
- [33 Folder Structure](#33-folder-structure)
- [34 Naming Convention](#34-naming-convention)
- [35 Git Convention](#35-git-convention)
- [36 Coding Standards](#36-coding-standards)
- [37 Future Roadmap](#37-future-roadmap)
- [38 Versioning](#38-versioning)
- [39 Launch Checklist](#39-launch-checklist)
- [40 Post-Launch Checklist](#40-post-launch-checklist)

---

## 01 Executive Summary
Zydrakon AI is a developer-focused, enterprise-grade AI company creating the orchestration layers, software development kits (SDKs), and safety guardrails required to run autonomous agentic systems. We address the critical bottleneck in AI deployment: bridging the gap between raw LLM capabilities and reliable, safe, and context-aware tool-use execution in commercial environments.

## 02 Company Vision
Our core vision is to engineer the future of intelligence. We believe software development will pivot from line-by-line coding to high-level multi-agent workflow design. Zydrakon AI aims to build the standard protocols and runtime environments for these agentic workflows, ensuring they are:
1. **Goal-Oriented**: Focused on actual task resolution, reasoning, and self-correction.
2. **Deterministic & Safe**: Subject to strict sandboxing, output validation, and compliance policies.
3. **Developer-Empowered**: Backed by lightweight, open-source SDKs and robust local testing tools.

## 03 Brand Identity
- **Name**: Zydrakon AI
- **Tagline**: Engineer the Future of Intelligence
- **Tone**: Technical, authoritative, forward-looking, clean, precise.
- **Audience**: Software engineers, backend architects, AI researchers, enterprise tech leads.
- **Imagery**: Deep space backgrounds, fine grid overlays, glowing neon details, glowing outlines.

## 04 Design System
The Zydrakon AI design system is built around a premium **glassmorphism** and **dark-mode-first** aesthetic:
- **Surfaces**: Dark, semi-transparent layers (`bg-surface/50`) with thin borders (`border-white/5`), high backdrop-blur (`backdrop-blur-xl`), and subtle neon-accented glowing dropshadows.
- **Accents**: High-contrast, vibrant gradients (from Blue to Violet to Cyan) that draw attention to CTAs and core highlights without overloading the interface.

## 05 UI Guidelines
- **States**: Interactive elements must feature clear transition animations (hover, active, disabled) that are visually distinct.
- **Icons**: SVG vectors only (no emojis as UI controls). Stroke widths must remain consistent (default `1.5px` or `2px`).
- **Touch Targets**: Mobile targets must have a minimum area of `44x44px` to comply with touch-target guidelines.
- **Safe Areas**: Elements must clear notched headers and bottom navigation bars.

## 06 Typography
- **Primary Font**: `Inter` (Sans-Serif) for high readability, balance, and modern look.
- **Monospaced Font**: `JetBrains Mono` for code snippets, tags, system readouts, numbers, and stats.
- **Typography Scale**:
  - `Hero Title`: 4rem / 64px (Font Weight: 800)
  - `Section Header`: 2.25rem / 36px (Font Weight: 700)
  - `Card Header`: 1.25rem / 20px (Font Weight: 600)
  - `Body Text`: 1rem / 16px (Font Weight: 400, Line Height: 1.6)
  - `Muted Labels`: 0.875rem / 14px (Font Weight: 500)

## 07 Color System
Colors are defined systematically as Tailwind theme variables in `src/styles/global.css`:
- `Base Background`: `#0A0A0F` (Dark space tint)
- `Surface background`: `#111827` (Dark slate gray)
- `Surface Light background`: `#1F2937`
- `Primary Accent`: `#3B82F6` (Electric Blue)
- `Primary Dark Accent`: `#2563EB`
- `Primary Light Accent`: `#60A5FA`
- `Secondary Accent`: `#8B5CF6` (Vibrant Violet)
- `Cyan Accent`: `#06B6D4` (Teal/Cyan)
- `Text Primary`: `#F9FAFB` (Off-white)
- `Text Secondary`: `#D1D5DB` (Medium Gray)
- `Text Muted`: `#9CA3AF` (Light Gray)

## 08 Animation Rules
- **Duration**: Micro-interactions must complete within `150-200ms`. Page transitions and overlays must not exceed `350ms`.
- **Curves**: CSS transition-easing should be set to `ease-out` (entering) or `ease-in` (exiting), avoiding raw linear transitions.
- **Performance**: Animations must only modify `opacity` and `transform` properties to prevent page layout reflows (avoid animating `width`, `height`, `top`, `left`).

## 09 Layout Rules
- **Breakpoints**: Mobile (`375px`), Tablet (`768px`), Desktop (`1024px`), Wide Desktop (`1440px`).
- **Mobile First**: Layouts must scale up from mobile breakpoints rather than folding down.
- **Max Width**: Containers on wide screens must clamp at `80rem` / `1280px` for optimal readability and layout spacing.
- **Grid & Spacing**: Use an `8px` spacing scale (8, 16, 24, 32, 48, 64) to maintain layout consistency.

## 10 Component Library
Components must reside in `src/components/` and be modular, reusable, and framework-independent where possible:
- **Header**: Navigation bar with desktop links, brand logo, and hamburger mobile menu toggle.
- **Footer**: Brand disclaimer, sitemap navigation links, founder references, and social buttons.
- **ProductCard**: Standardized cards displaying product title, status badge, tagline, features list, and links.
- **CTA**: Reusable newsletter/contact section encouraging conversion.
- **FAQ**: Frequently Asked Questions block with clean visual separation.

## 11 Pages
Our website includes seven core static pages:
- **Home (`/`)**: Main entrypoint showing logo, hero banner, core company stats, product overview, and founder preview.
- **About (`/about`)**: Company background, vision, mission, and structural information.
- **Founder (`/founder`)**: Portfolio and bio of Raj Patil (Founder & CEO), areas of expertise, and founder message.
- **Products (`/products`)**: Solution overview for Forge SDK, Nexus AI Platform, and Sentinel AI.
- **Research (`/research`)**: Publications, white papers, and research fields.
- **Blog (`/blog`)**: Listing of engineering blog posts, deep dives, and technical articles.
- **Contact (`/contact`)**: Form and direct email contact info.

## 12 SEO
- **Canonical URLs**: Every page must output a canonical link pointing to `https://zydrakon.ai{page}` to prevent duplicate content indexing.
- **Meta Tags**: Open Graph (og:type, og:url, og:title, og:description, og:image) and Twitter Cards must be present on every page.
- **Headers**: Maintain a single `h1` tag per page, sequentially followed by `h2` and `h3` tags.

## 13 Google AI Optimization
To optimize for Google's Gemini-powered AI Overviews, we enforce:
1. **Clear Entity Definitions**: Writing clear, declarative statements like "Zydrakon AI is an artificial intelligence company founded by Raj Patil."
2. **Definition Summaries**: Placing clear definitions of products and systems at the start of documentation pages.
3. **Structured Content**: Using HTML lists and tables to describe features and parameters so parser models can easily extract data.

## 14 Structured Data
JSON-LD schemas are dynamically injected on relevant pages via `SchemaOrg.astro`:
- **Organization**: Describes the Zydrakon AI company, url, and founders.
- **Person**: Describes founder Raj Patil, expertise, and sameAs profiles (LinkedIn, GitHub).
- **WebSite**: Sets up search engine structure and capabilities.
- **WebPage**: Injects unique page metadata and site hierarchy.
- **ItemList**: Outlines the product suite on `/products` to enable Rich Snippets.
- **BreadcrumbList**: Lists current page depth and parents.

## 15 Knowledge Graph
We establish concrete entities and relationships to link the Zydrakon AI brand to founder Raj Patil. All social profiles (LinkedIn, GitHub) must be linked consistently in the Organization and Person JSON-LD schemas to solidify the connection in the Google Knowledge Graph.

## 16 LLM Optimization
For AI-crawlers (Perplexity, Claude, ChatGPT, etc.), we maintain:
- **`public/llms.txt`**: A plain text file defining company structure, product listings, founder biography, and navigation maps in clean markdown.
- **`public/robots.txt`**: Allows crawling by standard user agents and explicitly specifies the sitemap-index URL.

## 17 Blog Strategy
- **Format**: All posts are written in MDX to support embedded interactive Astro components.
- **Content Focus**: Advanced system design, LLM parameters, tool schemas, safety guardrails, and benchmark evaluations.
- **Frequency**: Twice-monthly deep-dive engineering reports.

## 18 Documentation
- **Location**: To be set up in `src/content/docs/`.
- **Navigation**: Clean sidebar hierarchy (Introduction, Installation, Architecture, Guides, API References).
- **Abstractions**: Short code snippets in multiple languages (TypeScript, Python, Curl) using JetBrains Mono styling.

## 19 Products
We showcase three core solutions:
1. **Nexus AI Platform**: Enterprise-grade agent orchestration framework.
2. **Forge SDK**: Lightweight, open-source SDK for agent planning, memory, and tool-use.
3. **Sentinel AI**: Safe production hosting and output guardrail compliance monitoring.

## 20 Founder Page
- **URL**: `/founder`
- **Objective**: Establish the technical authority of Raj Patil. Showcases 4+ years of building backend architectures, distributed systems, and agentic AI tools.
- **Asset**: Full 9:16 portrait image with custom glassmorphic social links.

## 21 Careers
- **Location**: Planned at `src/content/careers/`.
- **Mission**: Attract top systems engineers, compilers experts, and AI safety researchers.
- **Values**: Hard problems first, minimal meetings, code-driven delivery.

## 22 Contact
- **Portal**: `/contact` page with interactive ContactForm.
- **Direct Mail**: `hello@zydrakon.ai`.
- **Fields**: Name, email, company, message. Includes clientside validation.

## 23 Press Kit
- **Assets**: High-resolution brand logo (SVG/PNG), founder headshots, brand color codes, and official boilerplate text.
- **Access**: To be made available under `/branding/` or `/press/`.

## 24 Research
- **Lab Focus**: Safe multi-agent coordination, memory retrieval latency optimization, and low-latency JSON validation engines.
- **Publications**: Structured reports featuring author attribution, date, abstract, and external download links.

## 25 Analytics
- **Configuration**: Privacy-centric, lightweight analytical scripts (like Vercel Web Analytics or Plausible) to track page visits without cookies or bloated script sizes.

## 26 Security
- **Headers**: Implement strong security headers (Content-Security-Policy, X-Frame-Options, X-Content-Type-Options) via Vercel configurations.
- **Audit**: Periodic dependency scanning using `npm audit` to mitigate supply chain risks.

## 27 Deployment
- **Provider**: Vercel (Production environments mapped to `main` branch).
- **Caching**: Edge cache headers configured for static assets (`/images/*`, `/favicon.*`) to ensure sub-100ms load times.

## 28 CI/CD
- **Platform**: GitHub Actions.
- **Pipeline**: On pull requests to `main` and `develop`:
  1. Install dependencies.
  2. Run linter and formatting checks.
  3. Compile TypeScript checks.
  4. Run production build.

## 29 Performance
- **Target**: Sub-100ms Time to First Byte (TTFB), <1s Largest Contentful Paint (LCP), and 0 Cumulative Layout Shift (CLS) on both mobile and desktop.
- **Optimizations**: Responsive images, WebP format, deferred font preloading, and minimal CSS size.

## 30 Accessibility
- **Standards**: WCAG 2.1 AA Compliance.
- **Checks**:
  - Color contrast ratio >= 4.5:1.
  - Descriptive alt text on all images.
  - Interactive controls focusable via keyboard (`focus-visible`).
  - Text scaling supported up to 200% without layout overlapping.

## 31 Lighthouse
- **Goals**: Target score of `100 / 100 / 100 / 100` on Lighthouse metrics (Performance, Accessibility, Best Practices, SEO).

## 32 Testing
- **Linter**: ESLint with TypeScript configurations.
- **Formatter**: Prettier for codebase stylistic consistency.
- **Build Checks**: Validation of sitemap and page compilation on every pull request.

## 33 Folder Structure
Enforce directory structure consistency (refer to README.md file structure diagram). Feature-specific code must go to `src/components/` and shared data structures to `src/data/` or `src/types/`.

## 34 Naming Convention
- **Components**: PascalCase (e.g., `ProductCard.astro`, `SchemaOrg.astro`).
- **Pages / Routing**: lowercase-hyphenated (e.g., `about.astro`, `founder.astro`).
- **CSS classes**: Tailwind standard classes. Custom utilities in global.css must use standard hyphenated casing (e.g., `@utility animate-fade-in-up`).
- **Variables / Functions**: camelCase.
- **TS Types / Interfaces**: PascalCase.

## 35 Git Convention
Conventional commits must be enforced:
- `feat:` for new features and components.
- `fix:` for bug fixes.
- `docs:` for documentation updates.
- `chore:` for settings, config updates, and package dependencies.
- `style:` for changes that do not affect code logic (formatting, spacing).
- `refactor:` for code restructuring without feature modification.

## 36 Coding Standards
- Strict TypeScript configurations (no `any` types).
- Maintain code simplicity (adhere to `ponytail` guidelines—stdlib first, minimal dependencies, avoid speculative abstractions).
- Preserve documentation integrity (maintain relevant comments and type declarations).

## 37 Future Roadmap
Transition from static site to interactive platform (refer to ROADMAP.md file). Add developer consoles, serverless agent hosting, and enterprise safe workspaces.

## 38 Versioning
- **Core Site**: SemVer starting at `0.0.1`.
- **SDKs & Tools**: Standard Semantic Versioning (`major.minor.patch`) tracked on individual repositories.

## 39 Launch Checklist
- [ ] Verify production build completes successfully.
- [ ] Audit contrast and layout safe-areas on mobile views.
- [ ] Validate sitemap-index.xml and robots.txt paths.
- [ ] Deploy to Vercel production branch.
- [ ] Connect custom primary domain `zydrakon.ai`.

## 40 Post-Launch Checklist
- [ ] Monitor Search Console indexation status.
- [ ] Check page load speeds and Core Web Vitals field data.
- [ ] Inspect LLM crawler access logs.
- [ ] Publish Phase 2 Blog features.

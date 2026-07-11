import { NextResponse } from 'next/server';
import { site } from '../../data/site';

export async function GET() {
  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${site.name} Engineering Blog</title>
    <link>${site.url}/blog</link>
    <description>Technical guides, architectures, and updates from Zydrakon AI.</description>
    <language>en-us</language>
    <item>
      <title>Designing Lightweight Agent Loops in Node.js &amp; TypeScript</title>
      <link>${site.url}/blog</link>
      <description>We walk through designing a minimal agent execution loop using standard TypeScript libraries, eliminating heavy dependency chains.</description>
      <pubDate>Fri, 10 Jul 2026 00:00:00 GMT</pubDate>
    </item>
    <item>
      <title>Migrating from Webpack to Vite: A Production Guide</title>
      <link>${site.url}/blog</link>
      <description>How we optimized our dashboard compilation times and improved hot module reloading latency by moving our front-end toolchains to Vite.</description>
      <pubDate>Sun, 28 Jun 2026 00:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

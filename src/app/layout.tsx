import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SchemaOrg from '../components/SchemaOrg';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zydrakon AI | Official Website | Founded by Raj Patil',
  description:
    'Official website of Zydrakon AI — Building intelligent AI Agents, automation platforms, developer tools, and enterprise AI infrastructure. Founded by Raj Patil.',
  metadataBase: new URL('https://zydrakon.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zydrakon AI | Official Website | Founded by Raj Patil',
    description:
      'Official website of Zydrakon AI — Building intelligent AI Agents, automation platforms, developer tools, and enterprise AI infrastructure.',
    url: 'https://zydrakon.ai',
    siteName: 'Zydrakon AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zydrakon AI | Official Website | Founded by Raj Patil',
    description:
      'Official website of Zydrakon AI — Building intelligent AI Agents, automation platforms, developer tools, and enterprise AI infrastructure.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-base text-text-primary">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <SchemaOrg type="organization" />
        <SchemaOrg type="website" />
      </body>
    </html>
  );
}

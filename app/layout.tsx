import type { Metadata } from 'next';
import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextsspark.com'),
  title: 'NEXTSSPARK - Software Development, Consulting & IT Training',
  description:
    'NEXTSSPARK delivers custom software development, strategic consulting, and professional IT training for startups and growing businesses worldwide.',
  keywords: [
    'software development',
    'consulting',
    'IT training',
    'web development',
    'mobile apps',
    'digital transformation',
    'custom software',
    'SaaS development',
  ],
  authors: [{ name: 'NEXTSSPARK' }],
  creator: 'NEXTSSPARK',
  alternates: {
    canonical: 'https://nextsspark.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextsspark.com',
    siteName: 'NEXTSSPARK',
    title: 'NEXTSSPARK - Software Development, Consulting & IT Training',
    description: 'Custom software solutions, strategic consulting, and expert IT training tailored to modern digital growth.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NEXTSSPARK software development company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXTSSPARK',
    description: 'Software Development & Consulting',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        <Analytics />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

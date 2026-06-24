import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NEXTSSPARK - Software Development & Consulting',
  description:
    'Leading software development, consulting, and IT training company. We deliver innovative solutions for businesses worldwide.',
  keywords: [
    'software development',
    'consulting',
    'IT training',
    'web development',
    'mobile apps',
    'digital transformation',
  ],
  authors: [{ name: 'NEXTSSPARK' }],
  creator: 'NEXTSSPARK',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextsspark.com',
    title: 'NEXTSSPARK - Software Development & Consulting',
    description: 'Leading software development, consulting, and IT training company',
    images: [
      {
        url: 'https://nextsspark.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXTSSPARK',
    description: 'Software Development & Consulting',
    images: ['https://nextsspark.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

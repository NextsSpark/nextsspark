import type { Metadata } from 'next';
import ContactPageClient from '@/components/contact/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact NEXTSSPARK | Let’s Build Your Next Digital Product',
  description:
    'Get in touch with NEXTSSPARK for software development, consulting, and training services tailored to your goals.',
  keywords: ['contact NEXTSSPARK', 'software development contact', 'consulting inquiry', 'IT training inquiry'],
  alternates: {
    canonical: 'https://nextsspark.com/contact',
  },
  openGraph: {
    title: 'Contact NEXTSSPARK | Let’s Build Your Next Digital Product',
    description: 'Reach out to start a conversation about your next project or digital transformation initiative.',
    url: 'https://nextsspark.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact NEXTSSPARK' }],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

import { Metadata } from 'next';
import { Suspense } from 'react';
import AboutClient from './components/AboutClient';
import AboutSkeleton from './components/AboutSkeleton';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

// SEO Metadata for policies page
export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Read EduPons privacy policy and terms of use. Learn how we protect your data, handle user information, and outline the terms governing our educational platform.',
  keywords: [
    'privacy policy',
    'terms of use',
    'terms and conditions',
    'data protection',
    'user agreement',
    'EduPons policies',
    'legal',
    'GDPR',
    'data privacy',
  ],
  openGraph: {
    title: 'About Us | EduPons',
    description:
      'Our commitment to transparency and trust. Read our privacy policy and terms of use.',
    type: 'website',
    url: '/about',
  },
  twitter: {
    card: 'summary',
    title: 'About Us | EduPons',
    description:
      'Our commitment to transparency and trust. Read our privacy policy and terms of use.',
  },
  alternates: {
    canonical: '/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Policies page - Server Component with SEO optimization
 * Displays Terms of Use and Privacy Policy with tab navigation
 *
 * @route /policies
 * @query tab - Optional query param to select tab ('privacy' or 'terms')
 */
export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data for Legal Pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'About Us',
            description:
              'EduPons privacy policy and terms of use governing the educational platform.',
            url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
            publisher: {
              '@type': 'Organization',
              name: 'EduPons',
              url: process.env.NEXT_PUBLIC_APP_URL,
            },
            dateModified: '2025-11-13',
            inLanguage: 'en-US',
          }),
        }}
      />

      {/* Suspense boundary with SEO-friendly skeleton */}
      <Suspense fallback={<AboutSkeleton />}>
        <Navbar />
        <AboutClient />
        <Footer />
      </Suspense>
    </>
  );
}

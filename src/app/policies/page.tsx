import { Metadata } from 'next';
import { Suspense } from 'react';
import PoliciesClient from './components/PoliciesClient';
import PoliciesSkeleton from './components/PoliciesSkeleton';

// SEO Metadata for policies page
export const metadata: Metadata = {
  title: 'Privacy Policy & Terms of Use',
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
    title: 'Privacy Policy & Terms of Use | EduPons',
    description:
      'Our commitment to transparency and trust. Read our privacy policy and terms of use.',
    type: 'website',
    url: '/policies',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy & Terms of Use | EduPons',
    description:
      'Our commitment to transparency and trust. Read our privacy policy and terms of use.',
  },
  alternates: {
    canonical: '/policies',
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
export default function PoliciesPage() {
  return (
    <>
      {/* JSON-LD Structured Data for Legal Pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy & Terms of Use',
            description:
              'EduPons privacy policy and terms of use governing the educational platform.',
            url: `${process.env.NEXT_PUBLIC_APP_URL}/policies`,
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
      <Suspense fallback={<PoliciesSkeleton />}>
        <PoliciesClient />
      </Suspense>
    </>
  );
}

import { Metadata } from 'next';
import { Box, Container, Flex } from '@chakra-ui/react';
import Hero from '@/components/homeComponents/hero';
import About from '@/components/homeComponents/about';
import HowItWorks from '@/components/homeComponents/howItWorks';
import Testimonials from '@/components/homeComponents/testimonials';
import FAQs from '@/components/homeComponents/faq';
import Message from '@/components/homeComponents/message';

// Enhanced SEO Metadata for homepage
export const metadata: Metadata = {
  title: 'EduPons - Bridge to Your Next Stride',
  description:
    'EduPons connects students, educators, and companies in one dynamic ecosystem. Turn learning into real opportunities through challenges, recognition, and collaboration. Join the future of education in Nigeria.',
  keywords: [
    'education platform',
    'student opportunities',
    'career development',
    'educational challenges',
    'student portfolio',
    'internships Nigeria',
    'student-company connection',
    'educational ecosystem',
    'skill development',
    'career readiness',
    'EduPons',
  ],
  openGraph: {
    title: 'EduPons - Building Bridges Between Classrooms and Careers',
    description:
      'Connect students, educators, and companies in one dynamic ecosystem. Turn learning into real opportunities.',
    type: 'website',
    url: '/',
    siteName: 'EduPons',
    images: [
      {
        url: '/home/Homepage Dashboard Overview B.svg',
        width: 1200,
        height: 630,
        alt: 'EduPons Platform Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduPons - Building Bridges Between Classrooms and Careers',
    description:
      'Connect students, educators, and companies in one dynamic ecosystem. Turn learning into real opportunities.',
    images: ['/home/Homepage Dashboard Overview B.svg'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * @route /
 */
export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'EduPons',
            url: process.env.NEXT_PUBLIC_APP_URL,
            logo: `${process.env.NEXT_PUBLIC_APP_URL}/logo.png`,
            description:
              'A role-based platform designed to unify students, educators, and companies into a single ecosystem that promotes visibility, engagement, and career readiness.',
            sameAs: ['https://twitter.com/edupons', 'https://linkedin.com/company/edupons'],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Support',
              availableLanguage: 'English',
            },
          }),
        }}
      />

      {/* JSON-LD Structured Data for Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'EduPons',
            url: process.env.NEXT_PUBLIC_APP_URL,
            description:
              'Building Bridges Between Classrooms and Careers. Connect students, educators, and companies.',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${process.env.NEXT_PUBLIC_APP_URL}/search?q={search_term_string}`,
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      <Box minH="100vh" bg="gray.50">
        <Hero />
        <Container maxW="container.xl">
          <Flex direction="column" gap={12}>
            <About />
            <HowItWorks />
            <Testimonials />
            <FAQs />
            <Message />
          </Flex>
        </Container>
      </Box>
    </>
  );
}

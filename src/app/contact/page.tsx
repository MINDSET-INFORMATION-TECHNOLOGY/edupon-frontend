import { Metadata } from 'next';
import { Box, Container } from '@chakra-ui/react';
import Hero from '@/components/contactUsComponents/hero';
import ContactForm from '@/components/contactUsComponents/contactForm';

// SEO Metadata for contact page
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with EduPons. Have questions about our platform? Want to partner with us? Reach out to our team and we'll get back to you as soon as possible.",
  keywords: [
    'contact EduPons',
    'get in touch',
    'support',
    'customer service',
    'partnership',
    'inquiries',
    'help',
  ],
  openGraph: {
    title: 'Contact Us | EduPons',
    description: "Get in touch with EduPons. We're here to help!",
    type: 'website',
    url: '/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | EduPons',
    description: "Get in touch with EduPons. We're here to help!",
  },
  alternates: {
    canonical: '/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Contact Us page - Server Component with SEO optimization
 * @route /contact
 */
export default function ContactUs() {
  return (
    <>
      {/* JSON-LD Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact EduPons',
            description: 'Get in touch with the EduPons team',
            url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
            mainEntity: {
              '@type': 'Organization',
              name: 'EduPons',
              url: process.env.NEXT_PUBLIC_APP_URL,
            },
          }),
        }}
      />

      <Box minH="100vh" bg="gray.50">
        <Hero />
        <Container maxW="container.xl">
          <ContactForm />
        </Container>
      </Box>
    </>
  );
}

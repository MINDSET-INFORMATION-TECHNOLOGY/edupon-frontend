'use client';

import { Box, Container, Flex } from '@chakra-ui/react';
import Hero from '@/components/homeComponents/hero';
import About from '@/components/homeComponents/about';
import HowItWorks from '@/components/homeComponents/howItWorks';
import Testimonials from '@/components/homeComponents/testimonials';
import FAQs from '@/components/homeComponents/faq';
import Message from '@/components/homeComponents/message';

export default function Home() {
  return (
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
  );
}

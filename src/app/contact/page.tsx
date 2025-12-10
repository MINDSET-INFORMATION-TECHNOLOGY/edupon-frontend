import { Box, Container } from '@chakra-ui/react';
import Hero from '@/components/contactUsComponents/hero';
import ContactForm from '@/components/contactUsComponents/contactForm';

export default function ContactUs() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Hero />
      <Container maxW="container.xl">
        <ContactForm />
      </Container>
    </Box>
  );
}

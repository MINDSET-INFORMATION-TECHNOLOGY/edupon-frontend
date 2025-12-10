import { Metadata } from 'next';
import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * 404 Not Found page, This is a Next.js 15 requirement
 */
export default function NotFound() {
  return (
    <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="container.md">
        <VStack spacing={6} textAlign="center">
          <Heading as="h1" size="2xl" color="gray.700">
            404
          </Heading>
          <Heading as="h2" size="lg" color="gray.600">
            Page Not Found
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Sorry, the page you are looking for does not exist or has been moved.
          </Text>
          <Link href="/" passHref>
            <Button colorScheme="brand" size="lg">
              Go Back Home
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  );
}

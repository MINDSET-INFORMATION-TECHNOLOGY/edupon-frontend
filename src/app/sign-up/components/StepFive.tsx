'use client';

import { VStack, Heading, Text, Spinner } from '@chakra-ui/react';

export default function StepFive() {
  return (
    <VStack spacing={6} align="center" textAlign="center">
      <Heading size="lg">Verification Successful 🎉</Heading>
      <Text color="gray.500">Redirecting you to login...</Text>
      <Spinner size="lg" />
    </VStack>
  );
}

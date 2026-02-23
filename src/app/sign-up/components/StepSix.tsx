'use client';

import { VStack, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function StepSix() {
  const router = useRouter();

  return (
    <VStack spacing={4} textAlign="center">
      <Heading fontSize="22px">Welcome to SmartLink, Amira! 🎉</Heading>

      <Text color="gray.500">
        Let’s help you set up your first profile card so others can discover your skills.
      </Text>

      <Button bg="#2F4AA0" color="white" onClick={() => router.push('/dashboard')}>
        Continue
      </Button>
    </VStack>
  );
}

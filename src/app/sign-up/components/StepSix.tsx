'use client';

import { VStack, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/reduxHooks';

export default function StepSix() {
  const router = useRouter();
  const { signupData } = useAppSelector((state) => state.auth);
  const name = signupData.name || 'there';

  return (
    <VStack spacing={3} textAlign="center">
      <Heading fontSize="18px" fontWeight="600" color="#111827">
        Welcome to EduPons, {name.split(' ')[0]}! 🎉
      </Heading>

      <Text fontSize="12px" color="#6B7280">
        Let's help you set up your first profile card so others can discover your skills.
      </Text>

      <Button
        h="38px"
        bg="#2F4AA0"
        color="white"
        fontSize="13px"
        fontWeight="500"
        borderRadius="10px"
        _hover={{ bg: '#253B80' }}
        onClick={() => router.push('/login')} // or wherever you want to redirect
      >
        Continue to Dashboard
      </Button>
    </VStack>
  );
}

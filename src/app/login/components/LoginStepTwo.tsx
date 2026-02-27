'use client';

import { VStack, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function LoginStepThree() {
  const router = useRouter();

  return (
    <VStack spacing={3} textAlign="center">
      {/* Heading */}
      <Heading fontSize="18px" fontWeight="600" color="#111827">
        Welcome to back SmartLink, Adegbola! 🎉
      </Heading>

      {/* Description */}
      <Text fontSize="12px" color="#6B7280">
        Let us help you set up your first profile card so others can discover your skills.
      </Text>

      {/* Continue Button */}
      <Button
        h="38px"
        bg="#2F4AA0"
        color="white"
        fontSize="13px"
        fontWeight="500"
        borderRadius="10px"
        _hover={{ bg: '#253B80' }}
        onClick={() => router.push('/dashboard')}
      >
        Continue
      </Button>
    </VStack>
  );
}

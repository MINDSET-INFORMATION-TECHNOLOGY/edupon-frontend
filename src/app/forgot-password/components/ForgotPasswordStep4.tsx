'use client';

import { VStack, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/app/sign-up/components/AuthLayout';

export default function ForgotPasswordStep4() {
  const router = useRouter();

  return (
    <AuthLayout imageSrc="/auth1.png" step={4} totalSteps={4} imagePosition="right" type="login">
      <VStack spacing={4} textAlign="center">
        <Heading fontSize="18px" fontWeight="600" color="#111827">
          Password Reset Successful! 🎉
        </Heading>
        <Text fontSize="12px" color="#6B7280">
          Your password has been updated successfully. You can now log in with your new password.
        </Text>
        <Button
          h="38px"
          bg="#2F4AA0"
          color="white"
          fontSize="13px"
          fontWeight="500"
          borderRadius="10px"
          _hover={{ bg: '#253B80' }}
          onClick={() => router.push('/login')}
        >
          Go to Login
        </Button>
      </VStack>
    </AuthLayout>
  );
}

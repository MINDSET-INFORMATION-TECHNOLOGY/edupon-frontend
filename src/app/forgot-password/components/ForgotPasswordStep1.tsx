'use client';

import { useState } from 'react';
import { VStack, Heading, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import AuthLayout from '@/app/sign-up/components/AuthLayout';

interface Props {
  nextStep: () => void;
  setEmail: (email: string) => void;
}

export default function ForgotPasswordStep1({ nextStep, setEmail }: Props) {
  const [emailInput, setEmailInput] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!emailInput.trim()) {
      setError('Email is required');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
      setError('Enter a valid email');
      return;
    }

    setError('');
    setEmail(emailInput); // pass email to parent
    nextStep();
  };

  return (
    <AuthLayout imageSrc="/auth1.png" step={1} totalSteps={4} imagePosition="right" type="login">
      <VStack spacing={4} align="stretch">
        <VStack spacing={1} align="flex-start">
          <Heading fontSize="18px" fontWeight="600" color="#111827">
            Let’s get you logged in
          </Heading>
          <Text fontSize="11px" color="#6B7280">
            Welcome back! Please enter your details.
          </Text>
          <Text fontSize="11px" color="#6B7280">
            Forgotten your Password? No worries, we’ll send you reset instructions.
          </Text>
        </VStack>

        <FormControl isInvalid={!!error} isRequired>
          <FormLabel fontSize="12px" mb={1}>
            Email Address
          </FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            h="38px"
            fontSize="13px"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          {error && (
            <Text fontSize="11px" color="red.500">
              {error}
            </Text>
          )}
        </FormControl>

        <Button
          h="38px"
          bg="#2F4AA0"
          color="white"
          fontSize="13px"
          fontWeight="500"
          borderRadius="10px"
          _hover={{ bg: '#253B80' }}
          onClick={handleContinue}
          isDisabled={!emailInput.trim() || !!error} // faded until input valid
        >
          Reset Password
        </Button>

        <Button
          variant="ghost"
          size="sm"
          fontSize="12px"
          onClick={() => (window.location.href = '/login')}
        >
          Go back to login page
        </Button>
      </VStack>
    </AuthLayout>
  );
}

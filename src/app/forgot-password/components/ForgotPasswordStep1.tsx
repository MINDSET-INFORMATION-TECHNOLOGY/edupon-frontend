'use client';

import { useState } from 'react';
import {
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import AuthLayout from '@/app/sign-up/components/AuthLayout';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Props {
  nextStep: () => void;
  setEmail: (email: string) => void;
}

export default function ForgotPasswordStep1({ nextStep, setEmail }: Props) {
  const [emailInput, setEmailInput] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const validateEmail = (email: string) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleContinue = async () => {
    if (!emailInput.trim()) {
      setError('Email is required');
      return;
    }
    if (!validateEmail(emailInput)) {
      setError('Enter a valid email');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      // Call API to request password reset code
      const response = await fetch(`${API_URL}/password/forgot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailInput }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to request password reset');
      }

      // Success - save email and go to next step
      setEmail(emailInput);

      toast({
        title: 'Reset code sent!',
        description: 'Please check your email for the password reset code.',
        status: 'success',
        duration: 5000,
      });

      nextStep();
    } catch (error: any) {
      toast({
        title: 'Request failed',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout imageSrc="/auth1.png" step={1} totalSteps={4} imagePosition="right" type="login">
      <VStack spacing={4} align="stretch">
        <VStack spacing={1} align="flex-start">
          <Heading fontSize="18px" fontWeight="600" color="#111827">
            Let's get you logged in
          </Heading>
          <Text fontSize="11px" color="#6B7280">
            Forgotten your Password? No worries, we'll send you reset instructions.
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
            isDisabled={isLoading}
          />
          {error && (
            <Text fontSize="11px" color="red.500" mt={1}>
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
          isDisabled={!emailInput.trim() || isLoading}
          isLoading={isLoading}
          loadingText="Sending..."
        >
          Reset Password
        </Button>

        <Button
          variant="ghost"
          size="sm"
          fontSize="12px"
          onClick={() => (window.location.href = '/login')}
          isDisabled={isLoading}
        >
          Go back to login page
        </Button>
      </VStack>
    </AuthLayout>
  );
}

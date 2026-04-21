'use client';

import { VStack, Text, HStack, Input, Button, useToast } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import AuthLayout from '@/app/sign-up/components/AuthLayout';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Props {
  nextStep: () => void;
  prevStep: () => void;
  email?: string;
  setOtp: (otp: string) => void;
}

export default function ForgotPasswordStep2({ nextStep, prevStep, email, setOtp }: Props) {
  const [otpInput, setOtpInput] = useState(['', '', '', '', '', '']); // 6 digits
  const [isLoading, setIsLoading] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const toast = useToast();

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otpInput];
    updated[index] = value;
    setOtpInput(updated);

    // Auto-focus next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otpInput[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const isComplete = otpInput.every((digit) => digit !== '');

  const handleVerify = async () => {
    if (!isComplete) return;

    setIsLoading(true);

    try {
      const otpCode = otpInput.join('');

      const response = await fetch(`${API_URL}/otp/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp: otpCode,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Invalid OTP');
      }

      // Store OTP in parent for next step
      setOtp(otpCode);

      toast({
        title: 'OTP verified!',
        description: 'Please enter your new password.',
        status: 'success',
        duration: 3000,
      });

      nextStep();
    } catch (error: any) {
      toast({
        title: 'Verification Failed',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/password/forgot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to resend OTP');
      }

      toast({
        title: 'OTP Resent',
        description: 'Please check your email for the new code.',
        status: 'success',
        duration: 5000,
      });

      // Clear OTP inputs
      setOtpInput(['', '', '', '', '', '']);
      inputsRef.current[0]?.focus();
    } catch (error: any) {
      toast({
        title: 'Failed to resend',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout imageSrc="/auth1.png" imagePosition="right" step={2} totalSteps={4} type="login">
      <VStack spacing={8} textAlign="center" w="100%" px={4} py={6}>
        <Text fontSize="12px" color="gray.600">
          OTP sent to{' '}
          <Text as="span" fontWeight="500" color="gray.800">
            {email || 'your email'}
          </Text>
        </Text>

        <Text fontSize="15px" fontWeight="400" color="gray.700" lineHeight="1.6" maxW="300px">
          Please enter the 6-digit code sent to your email to reset your password
        </Text>

        <HStack spacing={4} justify="center">
          {otpInput.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              value={digit}
              maxLength={1}
              textAlign="center"
              fontSize="15px"
              h="44px"
              w="44px"
              borderRadius="8px"
              bg="gray.100"
              border="1px solid"
              borderColor="gray.200"
              _focus={{
                borderColor: 'gray.400',
                boxShadow: 'none',
                bg: 'white',
              }}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              isDisabled={isLoading}
            />
          ))}
        </HStack>

        <Button
          h="42px"
          w="100%"
          bg="#2F4AA0"
          color="white"
          borderRadius="10px"
          fontSize="14px"
          fontWeight="500"
          isDisabled={!isComplete || isLoading}
          _hover={{ bg: '#253B80' }}
          onClick={handleVerify}
          isLoading={isLoading}
          loadingText="Verifying..."
        >
          Verify OTP
        </Button>

        <Button
          variant="ghost"
          size="sm"
          fontSize="12px"
          onClick={handleResendOtp}
          isDisabled={isLoading}
        >
          Resend Code
        </Button>

        <Button variant="ghost" size="sm" fontSize="12px" onClick={prevStep} isDisabled={isLoading}>
          Back
        </Button>
      </VStack>
    </AuthLayout>
  );
}

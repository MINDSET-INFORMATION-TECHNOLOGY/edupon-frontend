'use client';

import { VStack, Text, HStack, Input, Button, useToast } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setCurrentStep, setLoading, setError } from '@/store/authSlice';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function StepFive() {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { signupData, isLoading } = useAppSelector((state) => state.auth);
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6 digits for OTP
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    // Auto-focus next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Focus previous input on backspace
      inputsRef.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every((digit) => digit !== '');

  const handleVerify = async () => {
    if (!isComplete) return;

    dispatch(setLoading(true));

    try {
      const response = await fetch(`${API_URL}/otp/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp: otp.join(''), // API expects "otp" field with 6-digit code
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Invalid OTP');
      }

      toast({
        title: 'Email verified!',
        description: 'Your account has been successfully verified.',
        status: 'success',
        duration: 5000,
      });

      // Move to welcome screen
      dispatch(setCurrentStep(6));
    } catch (error: any) {
      dispatch(setError(error.message));
      toast({
        title: 'Verification Failed',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleResendOtp = async () => {
    dispatch(setLoading(true));

    try {
      const response = await fetch(`${API_URL}/otp/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: signupData.email }),
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

      // Clear OTP inputs for new code
      setOtp(['', '', '', '', '', '']);
      // Focus first input
      inputsRef.current[0]?.focus();
    } catch (error: any) {
      toast({
        title: 'Failed to resend',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handlePrev = () => {
    dispatch(setCurrentStep(4));
  };

  return (
    <VStack spacing={8} textAlign="center" w="100%" bg="white" px={4} py={6}>
      {/* Top notice */}
      <Text fontSize="12px" color="gray.600">
        Verification code sent to{' '}
        <Text as="span" fontWeight="500" color="gray.800">
          {signupData.email}
        </Text>
      </Text>

      {/* Main instruction */}
      <Text fontSize="15px" fontWeight="400" color="gray.700" lineHeight="1.6" maxW="300px">
        Please enter the 6-digit code sent to your email to verify your account
      </Text>

      {/* OTP Boxes - 6 digits */}
      <HStack spacing={4} justify="center">
        {otp.map((digit, index) => (
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

      {/* Verify button */}
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
        Verify Account
      </Button>

      {/* Resend OTP */}
      <Button
        variant="ghost"
        size="sm"
        fontSize="12px"
        onClick={handleResendOtp}
        isDisabled={isLoading}
      >
        Resend Code
      </Button>

      {/* Back */}
      <Button variant="ghost" size="sm" fontSize="12px" onClick={handlePrev} isDisabled={isLoading}>
        Back
      </Button>
    </VStack>
  );
}

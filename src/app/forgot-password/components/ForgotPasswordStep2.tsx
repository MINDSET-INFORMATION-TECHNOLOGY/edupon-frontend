'use client';

import { VStack, Text, HStack, Input, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import AuthLayout from '@/app/sign-up/components/AuthLayout';

interface Props {
  nextStep: () => void;
  prevStep: () => void;
  email?: string;
}

export default function ForgotPasswordStep2({ nextStep, prevStep, email }: Props) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every((digit) => digit !== '');

  return (
    <AuthLayout
      imageSrc="/auth1.png" // right side image
      imagePosition="right"
      step={2}
      totalSteps={4} // forgot password has 4 steps
    >
      <VStack spacing={8} textAlign="center" w="100%" px={4} py={6}>
        {/* Top notice */}
        <Text fontSize="12px" color="gray.600">
          OTP sent to{' '}
          <Text as="span" fontWeight="500" color="gray.800">
            {email || 'salauadegbola@smartlink.com'}
          </Text>
          , please check your inbox or spam for OTP.
        </Text>

        {/* Main instruction */}
        <Text fontSize="15px" fontWeight="400" color="gray.700" lineHeight="1.6" maxW="300px">
          Please input the OTP sent to{' '}
          <Text as="span" fontWeight="500" color="gray.900">
            {email || 'salauadegbola@smartlink.com'}
          </Text>{' '}
          to reset your password.
        </Text>

        {/* OTP Boxes */}
        <HStack spacing={4}>
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
          isDisabled={!isComplete}
          _hover={{ bg: '#253B80' }}
          onClick={nextStep}
        >
          Verify OTP
        </Button>

        {/* Back */}
        <Button variant="ghost" size="sm" fontSize="12px" onClick={prevStep}>
          Back
        </Button>
      </VStack>
    </AuthLayout>
  );
}

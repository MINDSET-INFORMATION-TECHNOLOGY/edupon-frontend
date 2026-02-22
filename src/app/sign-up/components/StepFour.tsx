'use client';

import { VStack, Heading, Text, HStack, Input, Button } from '@chakra-ui/react';
import { useState, useRef } from 'react';

interface Props {
  prevStep: () => void;
  onSuccess: () => void;
}

export default function StepFour({ prevStep, onSuccess }: Props) {
  const [code, setCode] = useState(['', '', '', '']);

  // Chakra Input ref array
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Backspace moves to previous input
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const joined = code.join('');
    if (joined === '1234') {
      onSuccess();
    } else {
      alert('Invalid verification code');
    }
  };

  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg">Verify Your Email</Heading>
      <Text color="gray.500">Enter the 4-digit code sent to your email</Text>

      <HStack justify="center" spacing={6}>
        {code.map((digit, index) => (
          <Input
            key={index}
            // ✅ Fixed: use braces so ref returns void
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            textAlign="center"
            fontSize="24px"
            w="70px"
            h="70px"
            borderRadius="12px"
            bg="#F3F4F6"
            border="1px solid #E5E7EB"
            autoComplete="one-time-code"
            inputMode="numeric"
            _focus={{
              borderColor: '#2F4AA0',
              boxShadow: 'none',
            }}
          />
        ))}
      </HStack>

      <Button colorScheme="brand" onClick={handleVerify}>
        Verify Code
      </Button>

      <Button variant="ghost" onClick={prevStep}>
        Back
      </Button>
    </VStack>
  );
}

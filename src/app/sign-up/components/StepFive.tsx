'use client';

import { VStack, Heading, Text, HStack, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

export default function StepFive({ nextStep, prevStep }: Props) {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    if (code.length === 4) {
      nextStep();
    }
  };

  return (
    <VStack spacing={4} textAlign="center">
      <Heading fontSize="20px">Please input OTP sent to Rufia@smartlink.com</Heading>

      <HStack>
        <Input
          maxLength={4}
          textAlign="center"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </HStack>

      <Button bg="#2F4AA0" color="white" onClick={handleVerify}>
        Create Account
      </Button>

      <Button variant="ghost" size="sm" onClick={prevStep}>
        Back
      </Button>
    </VStack>
  );
}

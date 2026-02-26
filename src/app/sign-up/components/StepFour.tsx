'use client';

import {
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

export default function StepFour({ nextStep, prevStep }: Props) {
  const [institution, setInstitution] = useState('');
  const [interest, setInterest] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!interest.trim()) {
      setError('Area of interest is required');
      return;
    }

    setError('');
    nextStep();
  };

  const handleInterestChange = (value: string) => {
    setInterest(value);

    if (value.trim()) {
      setError('');
    }
  };

  return (
    <VStack spacing={3} align="stretch">
      {/* Header */}
      <VStack spacing={1} align="flex-start">
        <Heading fontSize="18px" fontWeight="600" color="#111827">
          Finish setting up your account
        </Heading>

        <Text fontSize="11px" color="#6B7280">
          Provide a few more details to personalize your experience.
        </Text>
      </VStack>

      {/* Institution*/}
      <FormControl>
        <FormLabel fontSize="12px" mb={1}>
          Institution (optional)
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        />
      </FormControl>

      {/* Area of Interest */}
      <FormControl isInvalid={!!error}>
        <FormLabel fontSize="12px" mb={1}>
          Area of Interest
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          value={interest}
          onChange={(e) => handleInterestChange(e.target.value)}
        />
        <FormErrorMessage fontSize="11px">{error}</FormErrorMessage>
      </FormControl>

      {/* Continue */}
      <Button
        h="38px"
        bg="#2F4AA0"
        color="white"
        borderRadius="10px"
        fontSize="13px"
        fontWeight="500"
        _hover={{ bg: '#253B80' }}
        mt={1}
        onClick={handleContinue}
      >
        Continue
      </Button>

      {/* Back */}
      <Button variant="ghost" size="sm" fontSize="12px" onClick={prevStep}>
        Back
      </Button>
    </VStack>
  );
}

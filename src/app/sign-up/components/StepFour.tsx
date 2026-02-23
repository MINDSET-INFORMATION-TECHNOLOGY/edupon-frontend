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
  const [error, setError] = useState(false);

  const handleContinue = () => {
    if (!interest.trim()) {
      setError(true);
      return;
    }
    nextStep();
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading fontSize="20px">Finish Setting up your account</Heading>

      <Text fontSize="13px" color="gray.500">
        In order to get you in front of potential clients, please provide your details.
      </Text>

      <FormControl>
        <FormLabel>Institution (optional)</FormLabel>
        <Input value={institution} onChange={(e) => setInstitution(e.target.value)} />
      </FormControl>

      <FormControl isInvalid={error}>
        <FormLabel>Area of Interest</FormLabel>
        <Input value={interest} onChange={(e) => setInterest(e.target.value)} />
        <FormErrorMessage>Area of interest is required</FormErrorMessage>
      </FormControl>

      <Button bg="#2F4AA0" color="white" onClick={handleContinue}>
        Continue
      </Button>

      <Button variant="ghost" size="sm" onClick={prevStep}>
        Back
      </Button>
    </VStack>
  );
}

'use client';

import { VStack, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

interface StepThreeProps {
  nextStep: () => void;
  prevStep?: () => void;
}

export default function StepThree({ nextStep, prevStep }: StepThreeProps) {
  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg">Finish Setting up your account</Heading>

      <FormControl>
        <FormLabel>Industry</FormLabel>
        <Input placeholder="Enter your industry" />
      </FormControl>

      <FormControl>
        <FormLabel>Area of Interest</FormLabel>
        <Input placeholder="Choose area of interest" />
      </FormControl>

      <Button
        h="56px"
        bg="#2F4AA0"
        color="white"
        borderRadius="12px"
        _hover={{ bg: '#253B80' }}
        fontWeight="500"
        onClick={nextStep} // ✅ call nextStep to move to Step 4
      >
        Create Account
      </Button>

      {prevStep && (
        <Button variant="ghost" onClick={prevStep}>
          Back
        </Button>
      )}
    </VStack>
  );
}

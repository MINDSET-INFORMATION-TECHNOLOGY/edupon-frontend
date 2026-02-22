'use client';

import { VStack, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

interface StepTwoProps {
  nextStep: () => void;
  prevStep?: () => void; // optional back button
}

export default function StepTwo({ nextStep, prevStep }: StepTwoProps) {
  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg">Create your SmartLink account</Heading>

      <FormControl>
        <FormLabel>Company Name</FormLabel>
        <Input
          h="56px"
          borderRadius="12px"
          bg="#F9FAFB"
          border="1px solid #E5E7EB"
          _focus={{ borderColor: '#2F4AA0', boxShadow: 'none' }}
          placeholder="Enter your company name"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Company Email Address</FormLabel>
        <Input
          h="56px"
          borderRadius="12px"
          bg="#F9FAFB"
          border="1px solid #E5E7EB"
          _focus={{ borderColor: '#2F4AA0', boxShadow: 'none' }}
          placeholder="Enter your company email"
          type="email"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          h="56px"
          borderRadius="12px"
          bg="#F9FAFB"
          border="1px solid #E5E7EB"
          _focus={{ borderColor: '#2F4AA0', boxShadow: 'none' }}
          placeholder="Enter your password"
          type="password"
        />
      </FormControl>

      <Button
        h="56px"
        bg="#2F4AA0"
        color="white"
        borderRadius="12px"
        _hover={{ bg: '#253B80' }}
        fontWeight="500"
        onClick={nextStep} // move to next step
      >
        Continue
      </Button>

      {prevStep && (
        <Button variant="ghost" onClick={prevStep}>
          Back
        </Button>
      )}
    </VStack>
  );
}

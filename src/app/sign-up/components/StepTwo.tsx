'use client';

import { VStack, Heading, Text, Button, Divider } from '@chakra-ui/react';

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

export default function StepTwo({ nextStep, prevStep }: Props) {
  return (
    <VStack spacing={4} align="stretch">
      <Heading fontSize="20px">
        Welcome to EduPons <span style={{ color: '#2F4AA0' }}>Educator</span>
      </Heading>

      <Text fontSize="13px" color="gray.500">
        The all-in-one ecosystem where talents connect with educators and companies to create
        opportunities together.
      </Text>

      <Button variant="outline" h="42px">
        Continue with Google
      </Button>

      <Button variant="outline" h="42px">
        Continue with LinkedIn
      </Button>

      <Button variant="outline" h="42px">
        Continue with Apple
      </Button>

      <Divider />

      <Button h="44px" bg="#2F4AA0" color="white" onClick={nextStep}>
        Continue with email
      </Button>

      <Text fontSize="11px" color="gray.500" textAlign="center">
        By continuing, you agree to our Terms of Use and Privacy Policy.
      </Text>

      <Button variant="ghost" size="sm" onClick={prevStep}>
        Back
      </Button>
    </VStack>
  );
}

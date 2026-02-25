'use client';

import { VStack, Heading, Text, Button, Divider } from '@chakra-ui/react';

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

export default function StepTwo({ nextStep, prevStep }: Props) {
  const handleOAuth = (provider: string) => {
    console.log(`Continue with ${provider}`);
    // TODO: Add OAuth logic here later
  };

  return (
    <VStack spacing={3} align="stretch">
      {/* Heading */}
      <Heading fontSize="18px" fontWeight="600">
        Welcome to EduPons <span style={{ color: '#2F4AA0' }}>Educator</span>
      </Heading>

      {/* Description */}
      <Text fontSize="12px" color="gray.500">
        The all-in-one ecosystem where talents connect with educators and companies.
      </Text>

      {/* Social Buttons */}
      <Button variant="outline" h="38px" fontSize="13px" onClick={() => handleOAuth('google')}>
        Continue with Google
      </Button>

      <Button variant="outline" h="38px" fontSize="13px" onClick={() => handleOAuth('linkedin')}>
        Continue with LinkedIn
      </Button>

      <Divider my={2} />

      {/* Email Button (only this moves to next step) */}
      <Button
        h="40px"
        bg="#2F4AA0"
        color="white"
        fontSize="13px"
        _hover={{ bg: '#253B80' }}
        onClick={nextStep}
      >
        Continue with email
      </Button>

      {/* Terms */}
      <Text fontSize="10px" color="gray.500" textAlign="center">
        By continuing, you agree to our Terms of Use and Privacy Policy.
      </Text>

      <Button variant="ghost" size="xs" onClick={prevStep}>
        Back
      </Button>
    </VStack>
  );
}

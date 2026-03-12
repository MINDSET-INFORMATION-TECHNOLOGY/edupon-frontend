'use client';

import { VStack, Heading, Text, Button, Divider } from '@chakra-ui/react';

interface Props {
  nextStep: () => void;
  prevStep: () => void;
  role: string;
}

export default function StepTwo({ nextStep, prevStep, role }: Props) {
  const handleOAuth = (provider: string) => {
    console.log(`Continue with ${provider}`);
  };

  return (
    <VStack spacing={3} align="stretch">
      <Heading fontSize="18px" fontWeight="600">
        Welcome to EduPons{' '}
        {role === 'educator' ? (
          <span style={{ color: '#2F4AA0' }}>Educator</span>
        ) : role === 'student' ? (
          <span style={{ color: '#2F4AA0' }}>Talent</span>
        ) : null}
      </Heading>

      <Text fontSize="12px" color="gray.500">
        The all-in-one ecosystem where talents connect with educators and companies.
      </Text>

      {/* Only show social buttons for talent & educator */}
      {role !== 'company' && (
        <>
          <Button variant="outline" h="38px" fontSize="13px" onClick={() => handleOAuth('google')}>
            Continue with Google
          </Button>
          <Button
            variant="outline"
            h="38px"
            fontSize="13px"
            onClick={() => handleOAuth('linkedin')}
          >
            Continue with LinkedIn
          </Button>
          <Divider my={2} />
        </>
      )}

      {/* Email always */}
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

      <Text fontSize="10px" color="gray.500" textAlign="center">
        By continuing, you agree to our Terms of Use and Privacy Policy.
      </Text>

      <Button variant="ghost" size="xs" onClick={prevStep}>
        Back
      </Button>
    </VStack>
  );
}

'use client';

import { VStack, Heading, Text, Button, Radio, RadioGroup, Box } from '@chakra-ui/react';
import { useState } from 'react';

interface StepOneProps {
  nextStep: () => void;
}

export default function StepOne({ nextStep }: StepOneProps) {
  const [value, setValue] = useState('student');

  const handleContinue = () => {
    nextStep();
  };

  return (
    <VStack spacing={6} align="stretch">
      {' '}
      // reduced spacing from 8
      <VStack spacing={1} align="flex-start">
        {' '}
        // reduced from 2
        <Heading fontSize="20px" fontWeight="600" color="#1F2937">
          Welcome to EduPons
        </Heading>
        <Text fontSize="12px" color="#6B7280">
          Before proceeding to register, select the profile that best fits you.
        </Text>
      </VStack>
      <RadioGroup value={value} onChange={setValue}>
        <VStack spacing={3} align="stretch">
          {' '}
          // reduced spacing from 4
          {[
            { label: 'A Student', value: 'student' },
            { label: 'An Educator', value: 'educator' },
            { label: 'A Company', value: 'company' },
          ].map((item) => (
            <Box
              key={item.value}
              border="1px solid #E5E7EB"
              borderRadius="10px"
              px={2}
              py={2}
              bg="white"
            >
              <Radio value={item.value} colorScheme="blue">
                {item.label}
              </Radio>
            </Box>
          ))}
        </VStack>
      </RadioGroup>
      <Button
        h="40px" // smaller than 56px
        bg="#2F4AA0"
        color="white"
        borderRadius="10px"
        _hover={{ bg: '#253B80' }}
        fontWeight="500"
        onClick={handleContinue}
      >
        Continue
      </Button>
    </VStack>
  );
}

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
    <VStack spacing={5} align="stretch">
      {/* Header */}
      <VStack spacing={1} align="flex-start">
        <Heading fontSize="18px" fontWeight="600" color="#111827">
          Welcome to EduPons
        </Heading>

        <Text fontSize="11px" color="#6B7280">
          Select the profile that best fits you.
        </Text>
      </VStack>

      {/* Role Selection */}
      <RadioGroup value={value} onChange={setValue}>
        <VStack spacing={2} align="stretch">
          {[
            { label: 'A Student', value: 'student' },
            { label: 'An Educator', value: 'educator' },
            { label: 'A Company', value: 'company' },
          ].map((item) => (
            <Box
              key={item.value}
              border="1px solid #E5E7EB"
              borderRadius="10px"
              px={3}
              py={2}
              bg="white"
            >
              <Radio value={item.value} colorScheme="blue" size="sm">
                <Text fontSize="13px" fontWeight="500">
                  {item.label}
                </Text>
              </Radio>
            </Box>
          ))}
        </VStack>
      </RadioGroup>

      {/* Continue Button */}
      <Button
        h="38px"
        bg="#2F4AA0"
        color="white"
        borderRadius="10px"
        fontSize="13px"
        fontWeight="500"
        _hover={{ bg: '#253B80' }}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </VStack>
  );
}

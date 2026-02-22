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
    <VStack spacing={8} align="stretch">
      <VStack spacing={2} align="flex-start">
        <Heading fontSize="28px" fontWeight="700" color="#1F2937">
          Welcome to EduPons
        </Heading>
        <Text fontSize="15px" color="#6B7280">
          Before proceeding to register, select the profile that best fits you.
        </Text>
      </VStack>

      <RadioGroup value={value} onChange={setValue}>
        <VStack spacing={4} align="stretch">
          {[
            { label: 'A Student', value: 'student' },
            { label: 'An Educator', value: 'educator' },
            { label: 'A Company', value: 'company' },
          ].map((item) => (
            <Box
              key={item.value}
              border="1px solid #E5E7EB"
              borderRadius="12px"
              px={4}
              py={4}
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
        h="56px"
        bg="#2F4AA0"
        color="white"
        borderRadius="12px"
        _hover={{ bg: '#253B80' }}
        fontWeight="500"
        onClick={handleContinue}
      >
        Continue
      </Button>
    </VStack>
  );
}

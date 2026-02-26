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

export default function StepThree({ nextStep, prevStep }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Minimum 6 characters';
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (
      form.password &&
      form.password.length >= 6 &&
      form.password !== form.confirmPassword
    ) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) nextStep();
  };

  return (
    <VStack spacing={3} align="stretch">
      {/* Header */}
      <VStack spacing={1} align="flex-start">
        <Heading fontSize="18px" fontWeight="600" color="#111827">
          Create your EduPons account
        </Heading>

        <Text fontSize="11px" color="#6B7280">
          Join a growing network of learners.
        </Text>
      </VStack>

      {/* Full Name */}
      <FormControl isInvalid={!!errors.name}>
        <FormLabel fontSize="12px" mb={1}>
          Full name
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <FormErrorMessage fontSize="11px">{errors.name}</FormErrorMessage>
      </FormControl>

      {/* Email */}
      <FormControl isInvalid={!!errors.email}>
        <FormLabel fontSize="12px" mb={1}>
          Email Address
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormErrorMessage fontSize="11px">{errors.email}</FormErrorMessage>
      </FormControl>

      {/* Password */}
      <FormControl isInvalid={!!errors.password}>
        <FormLabel fontSize="12px" mb={1}>
          Password
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <FormErrorMessage fontSize="11px">{errors.password}</FormErrorMessage>
      </FormControl>

      {/* Confirm Password */}
      <FormControl isInvalid={!!errors.confirmPassword}>
        <FormLabel fontSize="12px" mb={1}>
          Confirm Password
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          type="password"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
        <FormErrorMessage fontSize="11px">{errors.confirmPassword}</FormErrorMessage>
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

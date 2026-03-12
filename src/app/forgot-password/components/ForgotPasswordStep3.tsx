'use client';

import { useState } from 'react';
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
import AuthLayout from '@/app/sign-up/components/AuthLayout';

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

export default function ForgotPasswordStep3({ nextStep, prevStep }: Props) {
  const [form, setForm] = useState({ password: '', confirmPassword: '' });
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.password) newErrors.password = 'New password is required';
    else if (form.password.length < 6) newErrors.password = 'Minimum 6 characters';
    if (!form.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) nextStep();
  };

  return (
    <AuthLayout imageSrc="/auth1.png" step={3} totalSteps={4} imagePosition="right" type="login">
      <VStack spacing={4} align="stretch">
        <VStack spacing={1} align="flex-start">
          <Heading fontSize="18px" fontWeight="600" color="#111827">
            Enter New Password
          </Heading>
          <Text fontSize="11px" color="#6B7280">
            Please enter your new password
          </Text>
        </VStack>

        {/* New Password */}
        <FormControl isInvalid={!!errors.password} isRequired>
          <FormLabel fontSize="12px" mb={1}>
            New Password
          </FormLabel>
          <Input
            type="password"
            placeholder="Enter your new password"
            h="38px"
            fontSize="13px"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <FormErrorMessage fontSize="11px">{errors.password}</FormErrorMessage>
        </FormControl>

        {/* Confirm Password */}
        <FormControl isInvalid={!!errors.confirmPassword} isRequired>
          <FormLabel fontSize="12px" mb={1}>
            Confirm New Password
          </FormLabel>
          <Input
            type="password"
            placeholder="Confirm new password"
            h="38px"
            fontSize="13px"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          />
          <FormErrorMessage fontSize="11px">{errors.confirmPassword}</FormErrorMessage>
        </FormControl>

        <Button
          h="38px"
          bg="#2F4AA0"
          color="white"
          fontSize="13px"
          fontWeight="500"
          borderRadius="10px"
          _hover={{ bg: '#253B80' }}
          onClick={handleContinue}
          isDisabled={
            !form.password || !form.confirmPassword || !!errors.password || !!errors.confirmPassword
          }
        >
          Finish
        </Button>

        <Button variant="ghost" size="sm" fontSize="12px" onClick={prevStep}>
          Back
        </Button>
      </VStack>
    </AuthLayout>
  );
}

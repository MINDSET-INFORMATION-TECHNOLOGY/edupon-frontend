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
  useToast,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import AuthLayout from '@/app/sign-up/components/AuthLayout';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Props {
  nextStep: () => void;
  prevStep: () => void;
  email: string;
  otp: string;
}

export default function ForgotPasswordStep3({ nextStep, prevStep, email, otp }: Props) {
  const [form, setForm] = useState({ password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

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

  const handleContinue = async () => {
    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/password/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          otp: otp,
          new_password: form.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to reset password');
      }

      toast({
        title: 'Password reset successful!',
        description: 'You can now log in with your new password.',
        status: 'success',
        duration: 5000,
      });

      nextStep();
    } catch (error: any) {
      toast({
        title: 'Reset failed',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    form.password &&
    form.confirmPassword &&
    form.password.length >= 6 &&
    form.password === form.confirmPassword;

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
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your new password"
              h="38px"
              fontSize="13px"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              isDisabled={isLoading}
            />
            <InputRightElement height="38px">
              <IconButton
                aria-label="Toggle password visibility"
                variant="ghost"
                size="sm"
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={() => setShowPassword(!showPassword)}
                isDisabled={isLoading}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage fontSize="11px">{errors.password}</FormErrorMessage>
        </FormControl>

        {/* Confirm Password */}
        <FormControl isInvalid={!!errors.confirmPassword} isRequired>
          <FormLabel fontSize="12px" mb={1}>
            Confirm New Password
          </FormLabel>
          <InputGroup>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm new password"
              h="38px"
              fontSize="13px"
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              isDisabled={isLoading}
            />
            <InputRightElement height="38px">
              <IconButton
                aria-label="Toggle password visibility"
                variant="ghost"
                size="sm"
                icon={showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                isDisabled={isLoading}
              />
            </InputRightElement>
          </InputGroup>
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
          isDisabled={!isFormValid || isLoading}
          isLoading={isLoading}
          loadingText="Resetting..."
        >
          Reset Password
        </Button>

        <Button variant="ghost" size="sm" fontSize="12px" onClick={prevStep} isDisabled={isLoading}>
          Back
        </Button>
      </VStack>
    </AuthLayout>
  );
}

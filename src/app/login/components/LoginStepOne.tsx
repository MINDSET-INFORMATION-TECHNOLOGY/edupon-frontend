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
  InputGroup,
  InputRightElement,
  IconButton,
  Link,
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState, useMemo } from 'react';
import NextLink from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Props {
  nextStep: () => void;
}

export default function LoginStepOne({ nextStep }: Props) {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isEmailValid = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [email]);

  const isPasswordValid = password.length >= 6;

  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isFormValid) return;

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.token) {
        localStorage.setItem('accessToken', data.token);

        // Store user role and email for welcome screen
        if (data.role) {
          localStorage.setItem('userRole', data.role);
        }
        localStorage.setItem('userEmail', email);

        const userName = email.split('@')[0] || 'User';
        localStorage.setItem('userName', userName);
      }

      toast({
        title: 'Login successful!',
        description: 'Welcome back to EduPons.',
        status: 'success',
        duration: 3000,
      });

      nextStep();
    } catch (error: any) {
      toast({
        title: 'Login failed',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack as="form" spacing={4} align="stretch" onSubmit={handleSubmit}>
      {/* Heading */}
      <VStack spacing={1} align="flex-start">
        <Heading fontSize="18px" fontWeight="600" color="#111827">
          Welcome back to EduPons
        </Heading>

        <Text fontSize="11px" color="#6B7280">
          Please enter your email and password to access EduPons.
        </Text>
      </VStack>

      {/* Email */}
      <FormControl isInvalid={submitted && !isEmailValid} isRequired>
        <FormLabel fontSize="12px" mb={1}>
          Email Address
        </FormLabel>

        <Input
          type="email"
          h="38px"
          fontSize="13px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          borderRadius="10px"
          isDisabled={isLoading}
        />

        <FormErrorMessage fontSize="11px">Please enter a valid email address.</FormErrorMessage>
      </FormControl>

      {/* Password */}
      <FormControl isInvalid={submitted && !isPasswordValid} isRequired>
        <FormLabel fontSize="12px" mb={1}>
          Password
        </FormLabel>

        <InputGroup>
          <Input
            type={showPassword ? 'text' : 'password'}
            h="38px"
            fontSize="13px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderRadius="10px"
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

        <FormErrorMessage fontSize="11px">Password must be at least 6 characters.</FormErrorMessage>
      </FormControl>

      {/* Forgot Password */}
      <Text textAlign="right" fontSize="11px">
        <Link as={NextLink} href="/forgot-password" color="#2F4AA0">
          Forgotten password?
        </Link>
      </Text>

      {/* Login Button */}
      <Button
        type="submit"
        h="38px"
        fontSize="13px"
        borderRadius="10px"
        bg={isFormValid ? '#2F4AA0' : '#CBD5E1'}
        color="white"
        _hover={isFormValid ? { bg: '#253B80' } : {}}
        isDisabled={!isFormValid || isLoading}
        isLoading={isLoading}
        loadingText="Logging in..."
      >
        Login
      </Button>

      {/* Terms */}
      <Text fontSize="10px" color="#6B7280" textAlign="center">
        By continuing, you agree to our Terms of Use and Privacy Policy.
      </Text>
    </VStack>
  );
}

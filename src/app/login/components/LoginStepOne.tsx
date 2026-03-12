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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState, useMemo } from 'react';
import NextLink from 'next/link';

interface Props {
  nextStep: () => void;
}

export default function LoginStepOne({ nextStep }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isEmailValid = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [email]);

  const isPasswordValid = password.length >= 6;

  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isFormValid) return;

    nextStep();
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
          />

          <InputRightElement height="38px">
            <IconButton
              aria-label="Toggle password visibility"
              variant="ghost"
              size="sm"
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={() => setShowPassword(!showPassword)}
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
        isDisabled={!isFormValid}
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

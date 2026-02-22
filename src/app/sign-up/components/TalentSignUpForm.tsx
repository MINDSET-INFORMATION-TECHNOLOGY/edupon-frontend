'use client';

import {
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { useState } from 'react';

export default function TalentSignUpForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: connect to your backend API
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <VStack as="form" spacing={6} align="stretch" onSubmit={handleSubmit}>
      <VStack spacing={2} align="flex-start">
        <Heading size="lg">Create your account</Heading>
        <Text color="gray.500" fontSize="sm">
          Join EduPons as a Talent
        </Text>
      </VStack>

      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input placeholder="Enter your full name" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input type="email" placeholder="Enter your email" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input type="password" placeholder="Confirm your password" />
      </FormControl>

      <Button type="submit" colorScheme="brand" size="lg" isLoading={loading}>
        Continue
      </Button>

      <Text fontSize="sm" textAlign="center">
        Already have an account?{' '}
        <Link as={NextLink} href="/login" color="brand.500">
          Log in
        </Link>
      </Text>
    </VStack>
  );
}

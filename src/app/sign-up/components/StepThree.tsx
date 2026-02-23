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

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.email.includes('@')) newErrors.email = 'Valid email required';
    if (form.password.length < 6) newErrors.password = 'Minimum 6 characters';
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) nextStep();
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading fontSize="20px">Create your Edupons account</Heading>

      <Text fontSize="13px" color="gray.500">
        Join a growing network of learners, creators, and doers.
      </Text>

      <FormControl isInvalid={errors.name}>
        <FormLabel>Full name</FormLabel>
        <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email}>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.confirmPassword}>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
        <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
      </FormControl>

      <Button bg="#2F4AA0" color="white" onClick={handleContinue}>
        Continue
      </Button>

      <Button variant="ghost" size="sm" onClick={prevStep}>
        Back
      </Button>
    </VStack>
  );
}

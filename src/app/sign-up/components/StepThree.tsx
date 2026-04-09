'use client';

import {
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setUserData, setCurrentStep } from '@/store/authSlice';

export default function StepThree() {
  const dispatch = useAppDispatch();
  const role = useAppSelector((state) => state.auth.signupData.role);
  const savedData = useAppSelector((state) => state.auth.signupData);

  const [form, setForm] = useState({
    name: savedData.name || '',
    email: savedData.email || '',
    password: savedData.password || '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = role === 'company' ? 'Company name is required' : 'Full name is required';
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
    } else if (form.password && form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      dispatch(
        setUserData({
          name: form.name,
          email: form.email,
          password: form.password,
        })
      );
      dispatch(setCurrentStep(4));
    }
  };

  const handlePrev = () => {
    dispatch(setCurrentStep(2));
  };

  return (
    <VStack spacing={3} align="stretch">
      <VStack spacing={1} align="flex-start">
        <Heading fontSize="18px" fontWeight="600" color="#111827">
          {role === 'company' ? 'Create your company account' : 'Create your EduPons account'}
        </Heading>
        <Text fontSize="11px" color="#6B7280">
          {role === 'company'
            ? 'Join as a company and connect with talents and educators.'
            : 'Join a growing network of learners.'}
        </Text>
      </VStack>

      {/* Name / Company Name */}
      <FormControl isInvalid={!!errors.name}>
        <FormLabel fontSize="12px" mb={1}>
          {role === 'company' ? 'Company Name' : 'Full Name'}
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          placeholder={role === 'company' ? 'Enter your company name' : 'Enter your full name'}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <FormErrorMessage fontSize="11px">{errors.name}</FormErrorMessage>
      </FormControl>

      {/* Email */}
      <FormControl isInvalid={!!errors.email}>
        <FormLabel fontSize="12px" mb={1}>
          {role === 'company' ? 'Company Email Address' : 'Email Address'}
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          type="email"
          placeholder={role === 'company' ? 'Enter your company email' : 'Enter your email'}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormErrorMessage fontSize="11px">{errors.email}</FormErrorMessage>
      </FormControl>

      {/* Password with visibility toggle */}
      <FormControl isInvalid={!!errors.password}>
        <FormLabel fontSize="12px" mb={1}>
          Password
        </FormLabel>
        <InputGroup>
          <Input
            h="38px"
            fontSize="13px"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <InputRightElement h="38px">
            <IconButton
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              size="sm"
              variant="ghost"
              onClick={() => setShowPassword(!showPassword)}
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
            />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage fontSize="11px">{errors.password}</FormErrorMessage>
      </FormControl>

      {/* Confirm Password with visibility toggle */}
      <FormControl isInvalid={!!errors.confirmPassword}>
        <FormLabel fontSize="12px" mb={1}>
          Confirm Password
        </FormLabel>
        <InputGroup>
          <Input
            h="38px"
            fontSize="13px"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          />
          <InputRightElement h="38px">
            <IconButton
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              icon={showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
              size="sm"
              variant="ghost"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
            />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage fontSize="11px">{errors.confirmPassword}</FormErrorMessage>
      </FormControl>

      {/* Password strength indicator (optional but helpful) */}
      {form.password && form.password.length > 0 && (
        <VStack spacing={1} align="flex-start">
          <Text fontSize="10px" color="gray.500">
            Password strength:
            <Text
              as="span"
              ml={1}
              color={
                form.password.length < 6
                  ? 'red.500'
                  : form.password.length < 8
                    ? 'orange.500'
                    : 'green.500'
              }
              fontWeight="500"
            >
              {form.password.length < 6 ? 'Weak' : form.password.length < 8 ? 'Medium' : 'Strong'}
            </Text>
          </Text>
          <Text fontSize="9px" color="gray.400">
            Use at least 6 characters
          </Text>
        </VStack>
      )}

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

      <Button variant="ghost" size="sm" fontSize="12px" onClick={handlePrev}>
        Back
      </Button>
    </VStack>
  );
}

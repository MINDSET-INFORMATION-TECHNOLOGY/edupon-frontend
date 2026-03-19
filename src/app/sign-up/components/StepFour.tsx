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
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setUserData, setCurrentStep, setLoading, setError } from '@/store/authSlice';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function StepFour() {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { signupData, isLoading } = useAppSelector((state) => state.auth);

  const [institution, setInstitution] = useState(signupData.institution || '');
  const [interest, setInterest] = useState(signupData.interest || '');
  const [error, setLocalError] = useState('');

  const handleContinue = async () => {
    if (!interest.trim()) {
      setLocalError('Area of interest is required');
      return;
    }
    setLocalError('');
    dispatch(setLoading(true));

    try {
      // Save to Redux
      dispatch(setUserData({ institution, interest }));

      // Prepare FormData
      const formData = new FormData();
      formData.append('email', signupData.email);
      formData.append('fullname', signupData.name);
      formData.append('password', signupData.password);
      formData.append('role', signupData.role);
      formData.append('area_of_interest', interest);

      if (institution) {
        formData.append('institution', institution);
      }

      // Make API call using env variable
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      toast({
        title: 'Account created!',
        description: 'Please check your email for OTP.',
        status: 'success',
        duration: 5000,
      });

      // Move to OTP step
      dispatch(setCurrentStep(5));
    } catch (error: any) {
      dispatch(setError(error.message));
      toast({
        title: 'Registration Error',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handlePrev = () => {
    dispatch(setCurrentStep(3));
  };

  return (
    <VStack spacing={3} align="stretch">
      <VStack spacing={1} align="flex-start">
        <Heading fontSize="18px" fontWeight="600" color="#111827">
          Finish setting up your account
        </Heading>
        <Text fontSize="11px" color="#6B7280">
          Provide a few more details to personalize your experience.
        </Text>
      </VStack>

      <FormControl>
        <FormLabel fontSize="12px" mb={1}>
          Institution (optional)
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          isDisabled={isLoading}
        />
      </FormControl>

      <FormControl isInvalid={!!error}>
        <FormLabel fontSize="12px" mb={1}>
          Area of Interest
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          isDisabled={isLoading}
        />
        <FormErrorMessage fontSize="11px">{error}</FormErrorMessage>
      </FormControl>

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
        isLoading={isLoading}
        loadingText="Creating account..."
      >
        Create Account
      </Button>

      <Button variant="ghost" size="sm" fontSize="12px" onClick={handlePrev} isDisabled={isLoading}>
        Back
      </Button>
    </VStack>
  );
}

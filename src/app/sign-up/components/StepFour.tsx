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
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setUserData, setCurrentStep, setLoading, setError } from '@/store/authSlice';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Standard areas of interest
const AREAS_OF_INTEREST = [
  { value: 'computer_science', label: 'Computer Science & Programming' },
  { value: 'data_science', label: 'Data Science & Analytics' },
  { value: 'artificial_intelligence', label: 'Artificial Intelligence & Machine Learning' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'cloud_computing', label: 'Cloud Computing' },
  { value: 'software_engineering', label: 'Software Engineering' },
  { value: 'web_development', label: 'Web Development' },
  { value: 'mobile_development', label: 'Mobile App Development' },
  { value: 'devops', label: 'DevOps & Site Reliability' },
  { value: 'business_administration', label: 'Business Administration' },
  { value: 'marketing', label: 'Marketing & Digital Marketing' },
  { value: 'finance', label: 'Finance & Accounting' },
  { value: 'entrepreneurship', label: 'Entrepreneurship' },
  { value: 'product_management', label: 'Product Management' },
  { value: 'project_management', label: 'Project Management' },
  { value: 'graphic_design', label: 'Graphic Design' },
  { value: 'ui_ux_design', label: 'UI/UX Design' },
  { value: 'video_editing', label: 'Video Editing & Animation' },
  { value: 'digital_art', label: 'Digital Art & Illustration' },
  { value: 'electrical_engineering', label: 'Electrical Engineering' },
  { value: 'mechanical_engineering', label: 'Mechanical Engineering' },
  { value: 'civil_engineering', label: 'Civil Engineering' },
  { value: 'chemical_engineering', label: 'Chemical Engineering' },
  { value: 'robotics', label: 'Robotics & Automation' },
  { value: 'biotechnology', label: 'Biotechnology' },
  { value: 'medicine', label: 'Medicine & Healthcare' },
  { value: 'nursing', label: 'Nursing' },
  { value: 'pharmacy', label: 'Pharmacy' },
  { value: 'public_health', label: 'Public Health' },
  { value: 'psychology', label: 'Psychology' },
  { value: 'law', label: 'Law & Legal Studies' },
  { value: 'education', label: 'Education & Teaching' },
  { value: 'architecture', label: 'Architecture' },
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'environmental_science', label: 'Environmental Science' },
  { value: 'communications', label: 'Communications & Media' },
  { value: 'journalism', label: 'Journalism' },
  { value: 'languages', label: 'Languages & Linguistics' },
  { value: 'sociology', label: 'Sociology' },
  { value: 'economics', label: 'Economics' },
  { value: 'political_science', label: 'Political Science' },
  { value: 'history', label: 'History' },
  { value: 'philosophy', label: 'Philosophy' },
  { value: 'mathematics', label: 'Mathematics' },
  { value: 'physics', label: 'Physics' },
  { value: 'chemistry', label: 'Chemistry' },
  { value: 'biology', label: 'Biology' },
  { value: 'other', label: 'Other' },
];

export default function StepFour() {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { signupData, isLoading } = useAppSelector((state) => state.auth);

  const [institution, setInstitution] = useState(signupData.institution || '');
  const [interest, setInterest] = useState(signupData.interest || '');
  const [error, setLocalError] = useState('');

  const handleContinue = async () => {
    if (!interest.trim()) {
      setLocalError('Please select your area of interest');
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

      // 1. Register the user
      const registerResponse = await fetch(`${API_URL}/register`, {
        method: 'POST',
        body: formData,
      });

      const registerResult = await registerResponse.json();

      if (!registerResponse.ok) {
        throw new Error(registerResult.message || 'Registration failed');
      }

      // 2. Request OTP to be sent
      try {
        await fetch(`${API_URL}/otp/request`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: signupData.email }),
        });
      } catch (otpError) {
        // If OTP request fails, registration still succeeded
        console.log('OTP request failed, but user is registered');
      }

      toast({
        title: 'Account created!',
        description: 'Please check your email for the verification code.',
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

  // Get the display label for the selected interest
  const getSelectedInterestLabel = () => {
    const selected = AREAS_OF_INTEREST.find((item) => item.value === interest);
    return selected ? selected.label : '';
  };

  return (
    <VStack spacing={3} align="stretch">
      {/* Header */}
      <VStack spacing={1} align="flex-start">
        <Heading fontSize="18px" fontWeight="600" color="#111827">
          Finish setting up your account
        </Heading>
        <Text fontSize="11px" color="#6B7280">
          Provide a few more details to personalize your experience.
        </Text>
      </VStack>

      {/* Institution */}
      <FormControl>
        <FormLabel fontSize="12px" mb={1}>
          Institution (optional)
        </FormLabel>
        <Input
          h="38px"
          fontSize="13px"
          placeholder="Enter your institution"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          isDisabled={isLoading}
        />
      </FormControl>

      {/* Area of Interest - Dropdown */}
      <FormControl isInvalid={!!error}>
        <FormLabel fontSize="12px" mb={1}>
          Area of Interest{' '}
          <Text as="span" color="red.500">
            *
          </Text>
        </FormLabel>
        <Select
          h="38px"
          fontSize="13px"
          placeholder="Select your area of interest"
          value={interest}
          onChange={(e) => {
            setInterest(e.target.value);
            setLocalError('');
          }}
          isDisabled={isLoading}
          bg="white"
          _focus={{
            borderColor: '#2F4AA0',
            boxShadow: '0 0 0 1px #2F4AA0',
          }}
        >
          {AREAS_OF_INTEREST.map((area) => (
            <option key={area.value} value={area.value}>
              {area.label}
            </option>
          ))}
        </Select>
        <FormErrorMessage fontSize="11px">{error}</FormErrorMessage>
      </FormControl>

      {/* Show selected interest for confirmation */}
      {interest && (
        <Text fontSize="10px" color="gray.500" textAlign="center">
          Selected: {getSelectedInterestLabel()}
        </Text>
      )}

      {/* Continue Button */}
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

      {/* Back Button */}
      <Button variant="ghost" size="sm" fontSize="12px" onClick={handlePrev} isDisabled={isLoading}>
        Back
      </Button>
    </VStack>
  );
}

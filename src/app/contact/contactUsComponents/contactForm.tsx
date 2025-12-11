'use client';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Textarea,
  VStack,
  Text,
  Flex,
  Heading,
  Badge,
  HStack,
  Select,
  InputGroup,
  InputLeftAddon,
  Checkbox,
  FormErrorMessage,
} from '@chakra-ui/react';
import { MdBusiness } from 'react-icons/md';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+234',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const countryData: { [key: string]: { abbr: string; name: string } } = {
    '+1': { abbr: 'US', name: 'United States' },
    '+44': { abbr: 'UK', name: 'United Kingdom' },
    '+234': { abbr: 'NG', name: 'Nigeria' },
    '+91': { abbr: 'IN', name: 'India' },
    '+86': { abbr: 'CN', name: 'China' },
    '+81': { abbr: 'JP', name: 'Japan' },
    '+49': { abbr: 'DE', name: 'Germany' },
    '+33': { abbr: 'FR', name: 'France' },
    '+39': { abbr: 'IT', name: 'Italy' },
    '+61': { abbr: 'AU', name: 'Australia' },
    '+27': { abbr: 'ZA', name: 'South Africa' },
    '+254': { abbr: 'KE', name: 'Kenya' },
    '+233': { abbr: 'GH', name: 'Ghana' },
  };

  // Validation functions
  const validateEmail = (email: string): string => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validateRequired = (value: string, fieldName: string): string => {
    if (!value || value.trim() === '') return `${fieldName} is required`;
    return '';
  };

  const validatePhone = (phone: string): string => {
    if (!phone) return 'Phone number is required';
    const phoneRegex = /^[0-9\s-]+$/;
    if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
    if (phone.replace(/[\s-]/g, '').length < 7) return 'Phone number is too short';
    return '';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Validate on blur
    let error = '';
    switch (field) {
      case 'firstName':
        error = validateRequired(formData.firstName, 'First name');
        break;
      case 'lastName':
        error = validateRequired(formData.lastName, 'Last name');
        break;
      case 'email':
        error = validateEmail(formData.email);
        break;
      case 'phoneNumber':
        error = validatePhone(formData.phoneNumber);
        break;
      case 'message':
        error = validateRequired(formData.message, 'Message');
        break;
    }

    if (error) {
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    newErrors.firstName = validateRequired(formData.firstName, 'First name');
    newErrors.lastName = validateRequired(formData.lastName, 'Last name');
    newErrors.email = validateEmail(formData.email);
    newErrors.phoneNumber = validatePhone(formData.phoneNumber);
    newErrors.message = validateRequired(formData.message, 'Message');

    // Check privacy checkbox
    if (!privacyAccepted) {
      newErrors.privacy = 'You must accept the privacy policy';
    }

    // Filter out empty errors
    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, value]) => value !== '')
    );

    setErrors(filteredErrors);

    // If there are errors, don't submit
    if (Object.keys(filteredErrors).length > 0) {
      // Mark all fields as touched to show errors
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
        message: true,
        privacy: true,
      });
      return;
    }

    console.log('Form submitted:', formData);
    // Form submission logic will be added here

    // Reset form and close after submission
    setFormData({
      firstName: '',
      lastName: '',
      countryCode: '+234',
      phoneNumber: '',
      email: '',
      message: '',
    });
    setPrivacyAccepted(false);
    setErrors({});
    setTouched({});
  };

  return (
    <Box
      w="full"
      py={0}
      px={{ base: 0, md: 14 }}
      minH={'300px'}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} align="center" textAlign="center">
          {/* Head tag */}
          <Badge
            gap={1}
            display="flex"
            justifyContent={'center'}
            alignItems={'center'}
            bgColor={'white'}
            border={'2px'}
            px={3}
            py={2}
            borderColor={'brand.50'}
            borderRadius={'full'}
          >
            <Icon as={MdBusiness} color={'brand.500'} boxSize={5} />
            <Text color={'brand.500'}>Get in Touch</Text>
          </Badge>

          {/* Heading */}
          <Flex direction={'column'} gap={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size={{ base: 'lg', lg: 'xl' }}>Reach out and we will get back to you</Heading>
            <Text>
              Fill out the form below, and our team will get back to you as soon as possible.
            </Text>
          </Flex>
          {/* Body */}
          <Box mt={2} w="full" maxW="container.md">
            <Box as="form" onSubmit={handleSubmit} mt={8}>
              <VStack spacing={2} align="stretch">
                {/* First Name and Last Name */}
                <HStack spacing={4} align="flex-start">
                  <FormControl isRequired isInvalid={touched.firstName && !!errors.firstName}>
                    <FormLabel fontSize="xs" fontWeight="medium" mb={1.5} color="gray.700">
                      First Name
                    </FormLabel>
                    <Input
                      name="firstName"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('firstName')}
                      borderRadius="md"
                      border="1px solid"
                      borderColor="gray.200"
                      _placeholder={{ color: 'gray.200', fontSize: 'sm' }}
                      _focus={{
                        borderColor: 'blue.500',
                        bg: 'white',
                        boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
                      }}
                    />
                    <FormErrorMessage fontSize="xs">{errors.firstName}</FormErrorMessage>
                  </FormControl>

                  <FormControl isRequired isInvalid={touched.lastName && !!errors.lastName}>
                    <FormLabel fontSize="xs" fontWeight="medium" mb={1.5} color="gray.700">
                      Last Name
                    </FormLabel>
                    <Input
                      name="lastName"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('lastName')}
                      borderRadius="md"
                      border="1px solid"
                      borderColor="gray.200"
                      _placeholder={{ color: 'gray.200', fontSize: 'sm' }}
                      _focus={{
                        borderColor: 'blue.500',
                        bg: 'white',
                        boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
                      }}
                    />
                    <FormErrorMessage fontSize="xs">{errors.lastName}</FormErrorMessage>
                  </FormControl>
                </HStack>

                {/* Email */}
                <FormControl isRequired isInvalid={touched.email && !!errors.email}>
                  <FormLabel fontSize="xs" fontWeight="medium" mb={1.5} color="gray.700">
                    Email
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.200"
                    _placeholder={{ color: 'gray.200', fontSize: 'sm' }}
                    _focus={{
                      borderColor: 'blue.500',
                      bg: 'white',
                      boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
                    }}
                  />
                  <FormErrorMessage fontSize="xs">{errors.email}</FormErrorMessage>
                </FormControl>

                {/* Phone Number */}
                <FormControl isRequired isInvalid={touched.phoneNumber && !!errors.phoneNumber}>
                  <FormLabel fontSize="xs" fontWeight="medium" mb={1.5} color="gray.700">
                    Phone number
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon p={0} border="1px solid" borderColor="gray.200" bg="white">
                      <Select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        border="none"
                        bg="transparent"
                        fontSize="sm"
                        fontWeight="medium"
                        w="70px"
                        pl={0}
                        pr={0}
                        cursor="pointer"
                        _focus={{
                          boxShadow: 'none',
                        }}
                        sx={{
                          option: {
                            fontSize: 'sm',
                            padding: '8px 12px',
                          },
                        }}
                      >
                        {Object.keys(countryData).map((code) => (
                          <option key={code} value={code}>
                            {`${countryData[code].abbr} ${code}`}
                          </option>
                        ))}
                      </Select>
                    </InputLeftAddon>
                    <Input
                      name="phoneNumber"
                      type="tel"
                      placeholder="000 000 0000"
                      value={`${formData.countryCode} ${formData.phoneNumber}`}
                      onChange={(e) => {
                        const value = e.target.value;
                        const phoneOnly = value.replace(formData.countryCode, '').trim();
                        setFormData((prev) => ({
                          ...prev,
                          phoneNumber: phoneOnly,
                        }));
                      }}
                      borderRadius="md"
                      border="1px solid"
                      borderColor="gray.200"
                      pl={3}
                      _placeholder={{ color: 'gray.200', fontSize: 'sm' }}
                      _focus={{
                        borderColor: 'blue.500',
                        bg: 'white',
                        boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
                      }}
                      onBlur={() => handleBlur('phoneNumber')}
                    />
                  </InputGroup>
                  <FormErrorMessage fontSize="xs">{errors.phoneNumber}</FormErrorMessage>
                </FormControl>

                {/* Message */}
                <FormControl isRequired isInvalid={touched.message && !!errors.message}>
                  <FormLabel fontSize="xs" fontWeight="medium" mb={1.5} color="gray.700">
                    Message
                  </FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Leave us a message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.200"
                    _placeholder={{ color: 'gray.200', fontSize: 'sm' }}
                    _focus={{
                      borderColor: 'blue.500',
                      bg: 'white',
                      boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
                    }}
                    resize="none"
                    onBlur={() => handleBlur('message')}
                  />
                  <FormErrorMessage fontSize="xs">{errors.message}</FormErrorMessage>
                </FormControl>
              </VStack>
            </Box>
          </Box>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            alignItems={'flex-start'}
            gap={2}
            w="full"
            maxW="container.md"
          >
            <Checkbox
              isChecked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              colorScheme="blue"
              size="md"
              mt={0.5}
              fontSize={'sm'}
              color={'gray.500'}
            >
              We respect your privacy. Your information will only be used to respond to your
              inquiry.
            </Checkbox>
            {touched.privacy && errors.privacy && (
              <Text color="red.500" fontSize="xs" mt={1}>
                {errors.privacy}
              </Text>
            )}
          </Flex>
          {/* Submit Button */}
          <Box display="flex" justifyContent={{ base: 'center', lg: 'flex-end' }} pt={2}>
            <Button
              type="submit"
              bg="brand.500"
              color="white"
              size="lg"
              px={10}
              borderRadius="md"
              fontWeight="medium"
              _hover={{
                bg: 'brand.600',
              }}
              _active={{
                bg: 'brand.500',
              }}
            >
              Send Message
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

'use client';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  HStack,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function CTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic will be added here

    // Reset form and close after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
    setIsFormOpen(false);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const handleOpen = () => {
    setIsFormOpen(true);
  };

  return (
    <Box w="full" display="flex" justifyContent="center" py={8}>
      <Box
        maxW="container.xl"
        w="full"
        mx={0}
        px={{ base: 4, md: 14 }}
        py={8}
        minH={'300px'}
        bgImage="url('/Last CTA.svg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'brand.900',
          opacity: 0.4,
          zIndex: 0,
        }}
      >
        <Container maxW="container.xl" position="relative" zIndex={1} p={0}>
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems="center"
            justifyContent="center"
            gap={12}
            minH={isFormOpen ? 'auto' : '300px'}
          >
            {/* Left Side - Text Content */}
            <Box
              flex={isFormOpen ? 1 : 'auto'}
              color="white"
              textAlign={isFormOpen ? 'left' : 'center'}
              maxW={isFormOpen ? 'auto' : '800px'}
              display="flex"
              flexDirection="column"
              alignItems={isFormOpen ? 'flex-start' : 'center'}
              justifyContent="center"
            >
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                mb={4}
                lineHeight="1.2"
              >
                Let’s Build Bridges Together
              </Heading>
              <Text fontSize={{ base: 'md', md: 'sm' }} lineHeight="1.8" mb={0}>
                Have questions, partnership ideas, or want to bring EduPons to your school or
                company? We’d love to hear from you. Reach out and let’s create meaningful
                connections in learning and opportunity.
              </Text>

              {/* Show button only when form is closed */}
              {!isFormOpen && (
                <Button
                  onClick={handleOpen}
                  size="lg"
                  colorScheme="white"
                  variant="solid"
                  bg="white"
                  color="blue.600"
                  px={8}
                  py={6}
                  mt={6}
                  fontSize="md"
                  fontWeight="semibold"
                  _hover={{
                    bg: 'gray.100',
                    transform: 'translateY(-2px)',
                  }}
                  _active={{
                    bg: 'gray.200',
                  }}
                  transition="all 0.3s"
                >
                  Send Us a Message
                </Button>
              )}
            </Box>

            {/* Right Side - Contact Form */}
            {isFormOpen && (
              <Box flex={1} w="full">
                <Box
                  bg="white"
                  p={{ base: 6, md: 8 }}
                  borderRadius="2xl"
                  boxShadow="2xl"
                  position="relative"
                  maxW="548px"
                  maxH="434px"
                  mx={{ base: 'auto', lg: 0 }}
                  ml={{ lg: 'auto' }}
                >
                  {/* Close Button */}
                  <IconButton
                    aria-label="Close"
                    icon={<CloseIcon />}
                    position="absolute"
                    top={{ base: 6, md: 8 }}
                    right={{ base: 6, md: 8 }}
                    size="sm"
                    variant="ghost"
                    onClick={handleClose}
                    borderRadius="full"
                    border="2px solid"
                    borderColor="brand.500"
                    color="brand.500"
                    _hover={{
                      bg: 'blue.50',
                    }}
                  />

                  <Box as="form" onSubmit={handleSubmit} mt={8}>
                    <VStack spacing={2} align="stretch">
                      {/* First Name and Last Name */}
                      <HStack spacing={4} align="flex-start">
                        <FormControl isRequired>
                          <FormLabel fontSize="xs" fontWeight="medium" mb={1.5} color="gray.700">
                            First Name
                          </FormLabel>
                          <Input
                            name="firstName"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={handleChange}
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
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel fontSize="xs" fontWeight="medium" mb={1.5} color="gray.700">
                            Last Name
                          </FormLabel>
                          <Input
                            name="lastName"
                            placeholder="Enter last name"
                            value={formData.lastName}
                            onChange={handleChange}
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
                        </FormControl>
                      </HStack>

                      {/* Email */}
                      <FormControl isRequired>
                        <FormLabel fontSize="xs" fontWeight="medium" mb={1.5} color="gray.700">
                          Email
                        </FormLabel>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={handleChange}
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
                      </FormControl>

                      {/* Message */}
                      <FormControl isRequired>
                        <FormLabel fontSize="xs" fontWeight="medium" mb={1.5} color="gray.700">
                          Message
                        </FormLabel>
                        <Textarea
                          name="message"
                          placeholder="Enter Message"
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
                        />
                      </FormControl>

                      {/* Submit Button */}
                      <Box
                        display="flex"
                        justifyContent={{ base: 'center', lg: 'flex-end' }}
                        pt={2}
                      >
                        <Button
                          type="submit"
                          bg="disabled.500"
                          color="white"
                          size="lg"
                          px={10}
                          borderRadius="md"
                          fontWeight="medium"
                          _hover={{
                            bg: 'gray.400',
                          }}
                          _active={{
                            bg: 'gray.500',
                          }}
                        >
                          Send Message
                        </Button>
                      </Box>
                    </VStack>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

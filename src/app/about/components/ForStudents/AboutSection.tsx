'use client';

import { VStack, HStack, Stack, Box, Text, Image } from '@chakra-ui/react';
import BadgeComponent from '@/components/badge';

const AboutSection = () => {
  return (
    <Box mb={{ base: '2', md: '4' }} w="100%" mt={4}>
      <VStack w="100%">

        {/* Badge */}
        <BadgeComponent name="About" />

        {/* Title */}
        <Text color="#101828" fontSize={{ base: '24px', md: '40px' }} fontWeight="semibold" textAlign='center'>
          Why we exist For{' '}
          <Text as="span" color="#1E3A8A">
            Students
          </Text>
        </Text>

        <Text color="#344054">
          Our thought process at EduPons
        </Text>

        {/* Main content wrapper */}
        <Box w="100%" maxW="1240px" mt={8}>
          <Stack
            direction={{ base: 'column-reverse', xl: 'row' }}
            alignItems="center"
            spacing={{base:"8%", md:"2%"}}
          >
            {/* Image container */}
            <Box
              bg="#F3F5FD"
              w={{ base: '90%', md: '90%' }}
              minH="400px"
              rounded="8px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={{ base: 8, xl: 0 }}
              p={2}
            >
              <Image
                src="/aboutUs/Group 1000003568.svg"
                alt='Students placement'
                w="90%"
                maxW="304px"
                h="auto"
              />
            </Box>

            {/* Text content */}
            <Box
              w={{ base: '90%', md: '90%' }}
              textAlign='justify'
            >
              <Text color="#121212" fontSize={{ base: '16px', md: '18px' }}>
                <Text as="span" fontWeight="semibold">
                  EduPons
                </Text>{' '}
                was created to make your effort count beyond grades, beyond school walls.
              </Text>

              <Text color="#121212" fontSize={{ base: '16px', md: '18px' }} mt={2}>
                We believe students deserve to be seen for their skills, projects, and creativity not just their test scores.
              </Text>

              <Text mt={8} color="#121212" fontSize={{ base: '16px', md: '18px' }}>
                We saw how hard it is to stand out, build connections, and find real opportunities while still learning. So we built{' '}
                <Text as="span" fontWeight="semibold">
                  EduPons
                </Text>{' '}
                a space where you can showcase what you do best, join exciting challenges, and get noticed by educators and companies that value your potential.
              </Text>

              <Text mt={8} color="#121212" fontSize={{ base: '16px', md: '18px' }}>
                Because when your learning connects with real-world opportunity, your journey truly begins.
              </Text>
            </Box>
          </Stack>
        </Box>

      </VStack>
    </Box>
  );
};

export default AboutSection;

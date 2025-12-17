'use client';

import { VStack, HStack, Stack, Box, Text, Image } from '@chakra-ui/react';
import BadgeComponent from '@/components/badge';

const EducatorAboutSection = () => {
  return (
    <Box mb={{ base: '2', md: '4' }} w="100%" mt={4}>
      <VStack w="100%">

        {/* Badge */}
        <BadgeComponent name="About" />

        {/* Title */}
        <Text color="#101828" fontSize={{ base: '24px', md: '40px' }} fontWeight="semibold" textAlign='center'>
          Why we exist For{' '}
          <Text as="span" color="#1E3A8A">
            Educators
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
                src="/aboutUs/Group 1000003569.svg"
                alt='Educators placement'
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
                began with one goal to empower educators to teach, guide, and inspire with impact.
              </Text>

              <Text color="#121212" fontSize={{ base: '16px', md: '18px' }} mt={2}>
                We know how challenging it is to keep students engaged, track progress meaningfully,{' '}
                and connect classroom learning to real-world relevance.
              </Text>

              <Text mt={8} color="#121212" fontSize={{ base: '16px', md: '18px' }}>
                That’s why we built{' '}
                <Text as="span" fontWeight="semibold">
                  EduPons
                </Text>{' '}
                a collaborative platform where educators can design engaging experiences, monitor growth, and open new pathways for students.
              </Text>

              <Text mt={8} color="#121212" fontSize={{ base: '16px', md: '18px' }}>
                We exist to make teaching more interactive, measurable, and rewarding for both you and your learners.
              </Text>
            </Box>
          </Stack>
        </Box>

      </VStack>
    </Box>
  );
};

export default EducatorAboutSection;

'use client';

import { VStack, HStack, Stack, Box, Text, Image } from '@chakra-ui/react';
import BadgeComponent from '@/components/badge';

const WhatWeDo = () => {
  return (
    <Box mb={4} w="100%">
      <VStack w="100%">

        {/* Wrapper */}
        <Box
          w="100%"
          maxW="1240px"
          p={4}
          mt={8}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack w="100%">

            {/* Badge */}
            <BadgeComponent name="What We Do" />

            {/* Title */}
            <Text
              color="#101828"
              fontSize={{ base: '24px', md: '40px' }}
              fontWeight="semibold"
              textAlign="center"
            >
              What Companies Can Do on{' '}
              <Text as="span" color="#1E3A8A">
                Edupons
              </Text>
            </Text>

            {/* Row 1 */}
            <Stack
              mt={4}
              gap={8}
              direction={{ base: 'column', xl: 'row' }}
              alignItems="center"
              w="100%"
            >
              <Box
                w={{ base: '90%', xl: '90%' }}
                minH="136px"
                bg="#FFFFFF"
                border="1px solid #EBEBEB"
                borderRadius="20px"
                p="12px"
              >
                <HStack mt={4}>
                  <Image
                    src="/aboutUs/logo.svg"
                    w="48px"
                    h="48px"
                  />
                  <Text color="#1A1C1E" fontSize="20px">
                    Discover Emerging Talent
                  </Text>
                </HStack>

                <Text color="#1A1C1E" fontSize="16px" mt={2} ml={1}>
                  Access top-performing students across universities and learning communities.
                </Text>
              </Box>

              <Box
                w={{ base: '90%', xl: '90%' }}
                minH="136px"
                bg="#FFFFFF"
                border="1px solid #EBEBEB"
                borderRadius="20px"
                p="12px"
              >
                <HStack mt={4}>
                  <Image
                    src="/aboutUs/logo.svg"
                    w="48px"
                    h="48px"
                  />
                  <Text color="#1A1C1E" fontSize="20px">
                    Host or Sponsor Challenges
                  </Text>
                </HStack>

                <Text color="#1A1C1E" fontSize="16px" mt={2} ml={1}>
                  Create branded challenges that test real-world skills aligned with your industry.
                </Text>
              </Box>
            </Stack>

            {/* Row 2 */}
            <Stack
              mt={6}
              gap={8}
              direction={{ base: 'column', xl: 'row' }}
              alignItems="center"
              w="100%"
            >
              <Box
                w={{ base: '90%', xl: '90%' }}
                minH="136px"
                bg="#FFFFFF"
                border="1px solid #EBEBEB"
                borderRadius="20px"
                p="12px"
              >
                <HStack mt={4}>
                  <Image
                    src="/aboutUs/logo.svg"
                    w="48px"
                    h="48px"
                  />
                  <Text color="#1A1C1E" fontSize="20px">
                    Build Partnerships
                  </Text>
                </HStack>

                <Text color="#1A1C1E" fontSize="16px" mt={2} ml={1}>
                  Collaborate with educators to design learning experiences that align with company goals.
                </Text>
              </Box>

              <Box
                w={{ base: '90%', xl: '90%' }}
                minH="136px"
                bg="#FFFFFF"
                border="1px solid #EBEBEB"
                borderRadius="20px"
                p="12px"
              >
                <HStack mt={4}>
                  <Image
                    src="/aboutUs/logo.svg"
                    w="48px"
                    h="48px"
                  />
                  <Text color="#1A1C1E" fontSize="20px">
                    Enhance Your Employer Brand
                  </Text>
                </HStack>

                <Text color="#1A1C1E" fontSize="16px" mt={2} ml={1}>
                  Showcase your commitment to learning, mentorship, and social impact.
                </Text>
              </Box>
            </Stack>

          </VStack>
        </Box>

      </VStack>
    </Box>
  );
};

export default WhatWeDo;

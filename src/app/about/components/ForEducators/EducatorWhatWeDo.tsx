'use client';

import { VStack, HStack, Stack, Box, Text, Image } from '@chakra-ui/react';
import BadgeComponent from '@/components/badge';

const EducatorWhatWeDo = () => {
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
              What Educators Can Do on{' '}
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
                  <Image src="/aboutUs/logo.svg" alt="About us" w="48px" h="48px" />
                  <Text color="#1A1C1E" fontSize="20px">
                    Design Challenges
                  </Text>
                </HStack>

                <Text color="#1A1C1E" fontSize="16px" mt={2} ml={1}>
                  Create classroom or project-based challenges to test creativity and understanding.
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
                  <Image src="/aboutUs/logo.svg" alt="About us" w="48px" h="48px" />
                  <Text color="#1A1C1E" fontSize="20px">
                    Track Progress
                  </Text>
                </HStack>

                <Text color="#1A1C1E" fontSize="16px" mt={2} ml={1}>
                  View detailed analytics on student engagement, submissions, and outcomes.
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
                  <Image src="/aboutUs/logo.svg" alt="About us" w="48px" h="48px" />
                  <Text color="#1A1C1E" fontSize="20px">
                    Collaborate
                  </Text>
                </HStack>

                <Text color="#1A1C1E" fontSize="16px" mt={2} ml={1}>
                  Partner with other educators or invite companies to co-create experiences.
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
                  <Image src="/aboutUs/logo.svg" alt="About us" w="48px" h="48px" />
                  <Text color="#1A1C1E" fontSize="20px">
                    Motivate Students
                  </Text>
                </HStack>

                <Text color="#1A1C1E" fontSize="16px" mt={2} ml={1}>
                  Inspire participation with points, leaderboards, and recognition systems.
                </Text>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default EducatorWhatWeDo;

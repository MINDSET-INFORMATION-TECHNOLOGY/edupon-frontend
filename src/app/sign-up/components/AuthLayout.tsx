'use client';

import { Flex, Box, Image, Progress, HStack, Text, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';
import NextLink from 'next/link';

interface AuthLayoutProps {
  children: ReactNode;
  imageSrc: string;
  step?: number;
}

export default function AuthLayout({ children, imageSrc, step = 1 }: AuthLayoutProps) {
  const totalSteps = 6;
  const progressValue = (step / totalSteps) * 100;

  return (
    <Flex h="100vh" overflow="hidden">
      {/* LEFT HALF */}
      <Flex
        w={{ base: '100%', md: '50%' }}
        direction="column"
        bg="white"
        px={{ base: 6, md: 10 }}
        py={5}
      >
        {/* Header */}
        <HStack justify="space-between" mb={6}>
          <Image src="/eduponsLogo.svg" alt="EduPons" h="32px" />

          <Text fontSize="13px">
            Already on EduPons?{' '}
            <Link as={NextLink} href="/login" color="#2F4AA0" fontWeight="500">
              Log in
            </Link>
          </Text>
        </HStack>

        {/* Progress */}
        <Progress
          value={progressValue}
          size="xs"
          borderRadius="full"
          bg="#E5E7EB"
          mb={6}
          sx={{
            '& > div': {
              background: '#2F4AA0',
            },
          }}
        />

        {/* Centered Card */}
        <Flex flex="1" align="center" justify="center">
          <Box
            w="full"
            maxW="300px" // reduced from 400px
            bg="white"
            borderRadius="12px" // slightly smaller radius
            border="0px solid #E6E8EC"
            p={4} // reduced padding from 6
          >
            {children}
          </Box>
        </Flex>
      </Flex>

      {/* RIGHT HALF */}
      <Box w="50%" display={{ base: 'none', md: 'block' }} h="100vh">
        <Image src={imageSrc} alt="Auth" objectFit="cover" w="100%" h="100%" />
      </Box>
    </Flex>
  );
}

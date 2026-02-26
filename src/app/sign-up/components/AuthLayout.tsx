'use client';

import { Flex, Box, Image, Progress, HStack, Text, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';
import NextLink from 'next/link';

interface AuthLayoutProps {
  children: ReactNode;
  imageSrc: string;
  step?: number;
  totalSteps?: number;
  imagePosition?: 'left' | 'right';
  showProgress?: boolean;
  type?: 'signup' | 'login';
}

export default function AuthLayout({
  children,
  imageSrc,
  step = 1,
  totalSteps = 6,
  imagePosition = 'right',
  showProgress = true,
  type = 'signup',
}: AuthLayoutProps) {
  const progressValue = (step / totalSteps) * 100;

  const imageSection = (
    <Box w="50%" display={{ base: 'none', md: 'block' }} h="100vh">
      <Image src={imageSrc} alt="Auth" objectFit="cover" w="100%" h="100%" />
    </Box>
  );

  const formSection = (
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
          {type === 'signup' ? (
            <>
              Already on EduPons?{' '}
              <Link as={NextLink} href="/login" color="#2F4AA0" fontWeight="500">
                Log in
              </Link>
            </>
          ) : (
            <>
              New to EduPons?{' '}
              <Link as={NextLink} href="/sign-up" color="#2F4AA0" fontWeight="500">
                Sign up
              </Link>
            </>
          )}
        </Text>
      </HStack>

      {/* Progress */}
      {showProgress && (
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
      )}

      {/* Centered Card */}
      <Flex flex="1" align="center" justify="center">
        <Box w="full" maxW="300px" bg="white" borderRadius="12px" p={4}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );

  return (
    <Flex h="100vh" overflow="hidden">
      {imagePosition === 'left' && imageSection}
      {formSection}
      {imagePosition === 'right' && imageSection}
    </Flex>
  );
}

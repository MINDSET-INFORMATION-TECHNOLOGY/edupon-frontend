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
  const progressValue = (step / 4) * 100;

  return (
    <Flex minH="100vh">
      {/* LEFT HALF */}
      <Flex
        w={{ base: '100%', md: '50%' }}
        direction="column"
        bg="#F5F6F8"
        px={{ base: 6, md: 16 }}
        py={10}
      >
        {/* Top Header */}
        <HStack justify="space-between" mb={10}>
          <Image src="/logo.svg" alt="EduPons" h="40px" />

          <Text fontSize="14px">
            Already on EduPons?{' '}
            <Link as={NextLink} href="/login" color="#2F4AA0" fontWeight="500">
              Log in
            </Link>
          </Text>
        </HStack>

        {/* Progress Bar */}
        <Progress
          value={progressValue}
          size="sm"
          borderRadius="full"
          bg="#E5E7EB"
          sx={{
            '& > div': {
              background: '#2F4AA0',
            },
          }}
          mb={12}
        />

        {/* Centered Card */}
        <Flex flex="1" align="center" justify="center">
          <Box
            w="full"
            maxW="420px"
            bg="white"
            borderRadius="20px"
            border="1px solid #E6E8EC"
            p={{ base: 8, md: 12 }}
          >
            {children}
          </Box>
        </Flex>
      </Flex>

      {/* RIGHT HALF - IMAGE */}
      <Box w="50%" display={{ base: 'none', md: 'block' }} position="relative" minH="100vh">
        <Image src={imageSrc} alt="Auth" objectFit="cover" w="100%" h="100%" />
      </Box>
    </Flex>
  );
}

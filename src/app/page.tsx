'use client';

import { Box, Container, Heading, Text, Button, VStack, HStack, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Home() {
    return (
        <Box minH="100vh" bg="gray.50">
            <Container maxW="container.xl" py={20}>
                <VStack spacing={8} align="center" textAlign="center">
                    <Icon as={CheckCircleIcon} w={16} h={16} color="brand.500" />

                    <Heading as="h1" size="2xl" color="gray.800">
                        Welcome to EduPons
                    </Heading>

                    <Text fontSize="xl" color="gray.600" maxW="2xl">
                        Bridge to Your Next Stride
                    </Text>

                    <Text fontSize="lg" color="gray.600" maxW="3xl">
                        A role-based platform designed to unify students, educators, and companies into a
                        single ecosystem that promotes visibility, engagement, and career readiness.
                    </Text>

                    <HStack spacing={4} pt={4}>
                        <Button size="lg" colorScheme="brand">
                            Get Started
                        </Button>
                        <Button size="lg" variant="outline" colorScheme="brand">
                            Learn More
                        </Button>
                    </HStack>

                    <Box pt={12}>
                        <VStack spacing={4} align="start">
                            <Text fontSize="sm" fontWeight="semibold" color="gray.500" textTransform="uppercase">
                                Infrastructure Setup Complete ✅
                            </Text>
                            <VStack align="start" spacing={2}>
                                <HStack>
                                    <Icon as={CheckCircleIcon} color="green.500" />
                                    <Text>Next.js 15 with TypeScript</Text>
                                </HStack>
                                <HStack>
                                    <Icon as={CheckCircleIcon} color="green.500" />
                                    <Text>Chakra UI v2 with custom theme</Text>
                                </HStack>
                                <HStack>
                                    <Icon as={CheckCircleIcon} color="green.500" />
                                    <Text>ESLint & Prettier configured</Text>
                                </HStack>
                                <HStack>
                                    <Icon as={CheckCircleIcon} color="green.500" />
                                    <Text>Environment variables validated</Text>
                                </HStack>
                                <HStack>
                                    <Icon as={CheckCircleIcon} color="green.500" />
                                    <Text>Production-ready configuration</Text>
                                </HStack>
                            </VStack>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
}

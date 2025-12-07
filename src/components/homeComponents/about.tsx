'use client';
import {
  Box,
  Container,
  Icon,
  VStack,
  Text,
  Flex,
  Heading,
  Badge,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { MdBusiness } from 'react-icons/md';
import { GiOilySpiral } from 'react-icons/gi';

const cards = [
  {
    title: 'For Students – Show What You Can Do',
    description:
      'Build your portfolio, join real projects, and earn badges that prove your skills. Get noticed by educators and companies looking for talent like you.',
    icon: GiOilySpiral,
  },
  {
    title: 'For Educators – Motivate Beyond the Classroom',
    description:
      'Build your portfolio, join real projects, and earn badges that prove your skills. Get noticed by educators and companies looking for talent like you.',
    icon: GiOilySpiral,
  },
  {
    title: "For Companies – Discover Tomorrow's Talent",
    description:
      'Build your portfolio, join real projects, and earn badges that prove your skills. Get noticed by educators and companies looking for talent like you.',
    icon: GiOilySpiral,
  },
];

export default function About() {
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
            <Text color={'brand.500'}>About us</Text>
          </Badge>

          {/* Heading */}
          <Flex direction={'column'} gap={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size={{ base: 'lg', lg: 'xl' }}>What is EduPons?</Heading>
            <Text>
              EduPons connects academia and industry in one ecosystem. Students learn and gain
              visibility. Educators motivate and measure impact. Companies engage with the next
              generation of talent.
            </Text>
          </Flex>
          {/* Body */}
          <Box mt={2} w="full" maxW="container.xl">
            <Flex direction={'column'} gap={8}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} justifyContent={'space-between'}>
                {cards.slice(0, 2).map((card, index) => (
                  <VStack key={index} spacing={0} align="stretch">
                    {/* Icon */}
                    <Flex justifyContent="center" mb={0}>
                      <Box bg="brand.50" p={4} borderTopRadius="xl">
                        <Icon as={card.icon} boxSize={8} color="blue.600" />
                      </Box>
                    </Flex>

                    <Box
                      bg="white"
                      px={0}
                      pb={8}
                      borderRadius="2xl"
                      boxShadow="sm"
                      border="1px solid"
                      borderColor="gray.200"
                      _hover={{
                        boxShadow: 'md',
                        transform: 'translateY(-4px)',
                        transition: 'all 0.3s',
                      }}
                    >
                      <VStack spacing={4} pt={0} align="stretch">
                        <Heading
                          bg={'gray.100'}
                          borderTopRadius="xl"
                          py={6}
                          px={2}
                          as="h3"
                          fontSize={{ base: 'sm', md: 'md' }}
                          fontWeight="normal"
                          textAlign="center"
                          color="black"
                        >
                          {card.title}
                        </Heading>

                        <Text
                          px={8}
                          fontSize={{ base: 'sm', md: 'md' }}
                          color="gray.600"
                          textAlign="center"
                          lineHeight="1.7"
                        >
                          {card.description}
                        </Text>

                        <Button
                          variant="link"
                          colorScheme="blue"
                          alignSelf="center"
                          fontWeight="medium"
                          textDecoration="underline"
                          _hover={{
                            color: 'brand.500',
                          }}
                        >
                          Read More
                        </Button>
                      </VStack>
                    </Box>
                  </VStack>
                ))}
              </SimpleGrid>

              {/* Third Card - Centered */}
              <Flex justifyContent="center">
                <VStack
                  spacing={0}
                  align="stretch"
                  w="full"
                  maxW={{ base: 'full', md: 'calc(50% - 16px)' }}
                >
                  {/* Icon */}
                  <Flex justifyContent="center" mb={0}>
                    <Box bg="brand.50" p={4} borderTopRadius="xl">
                      <Icon as={cards[2].icon} boxSize={8} color="blue.600" />
                    </Box>
                  </Flex>

                  <Box
                    bg="white"
                    px={0}
                    pb={8}
                    borderRadius="2xl"
                    boxShadow="sm"
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{
                      boxShadow: 'md',
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s',
                    }}
                  >
                    <VStack spacing={4} pt={0} align="stretch">
                      <Heading
                        bg={'gray.100'}
                        borderTopRadius="xl"
                        py={6}
                        px={2}
                        as="h3"
                        fontSize={{ base: 'sm', md: 'md' }}
                        fontWeight="normal"
                        textAlign="center"
                        color="black"
                      >
                        {cards[2].title}
                      </Heading>

                      <Text
                        px={8}
                        fontSize={{ base: 'sm', md: 'md' }}
                        color="gray.600"
                        textAlign="center"
                        lineHeight="1.7"
                      >
                        {cards[2].description}
                      </Text>

                      <Button
                        variant="link"
                        colorScheme="blue"
                        alignSelf="center"
                        fontWeight="medium"
                        textDecoration="underline"
                        _hover={{
                          color: 'brand.500',
                        }}
                      >
                        Read More
                      </Button>
                    </VStack>
                  </Box>
                </VStack>
              </Flex>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

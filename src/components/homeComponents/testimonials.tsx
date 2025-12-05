'use client';
import {
  Box,
  Container,
  Icon,
  VStack,
  HStack,
  Avatar,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Badge,
} from '@chakra-ui/react';
import { FiMic } from 'react-icons/fi';
import { MdBusiness } from 'react-icons/md';

const testimonials = [
  {
    quote:
      "EduPons helped me turn my class project into a real internship opportunity. I've never felt more motivated to learn.",
    name: 'Zara E.',
    role: 'Computer Science Student',
    avatar: '/avatars/zara.jpg', // Replace with actual image path
  },
  {
    quote:
      "It's the first platform where I can see my students' growth beyond grades. EduPons makes learning measurable and meaningful.",
    name: 'Dr. Adewale B.',
    role: 'Lecturer, University of Lagos',
    avatar: '/avatars/adewale.jpg', // Replace with actual image path
  },
  {
    quote:
      "We discovered brilliant young talent through EduPons challenges. It's a smarter way to recruit and support education at the same time.",
    name: 'Amaka O.',
    role: 'HR Lead, InnovateX Technologies',
    avatar: '/avatars/amaka.jpg', // Replace with actual image path
  },
];

export default function Testimonials() {
  return (
    <Box
      w="full"
      py={0}
      px={{ base: 0, md: 0 }}
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
            <Text color={'brand.500'}>Testimonials</Text>
          </Badge>

          {/* Heading */}
          <Flex direction={'column'} gap={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size={{ base: 'lg', lg: 'xl' }}>What Users say about EduPons</Heading>
          </Flex>

          {/* Body */}
          <Box mt={6} w="full" maxW="container.xl">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {testimonials.map((testimonial, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={6}
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
                  <Flex direction="column" height="full" gap={2} align="stretch">
                    {/* Microphone Icon */}
                    <Box
                      w="50px"
                      h="50px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={FiMic} boxSize={7} color="brand.500" />
                    </Box>

                    {/* Quote */}
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color="gray.700"
                      lineHeight="1.8"
                      fontStyle="italic"
                      align={'left'}
                      mb={4}
                    >
                      &quot;{testimonial.quote}&quot;
                    </Text>

                    {/* User Info */}
                    <HStack
                      spacing={4}
                      pt={4}
                      mt="auto"
                      borderTopWidth="2px"
                      borderTopStyle="dotted"
                      borderTopColor="gray.200"
                    >
                      <Avatar name={''} src={testimonial.avatar} size="md" bg="blue.500" />
                      <VStack align="flex-start" spacing={0}>
                        <Text fontWeight="semibold" color="gray.800" fontSize="md">
                          {testimonial.name}
                        </Text>
                        <Text align={'left'} fontSize="sm" color="gray.600">
                          {testimonial.role}
                        </Text>
                      </VStack>
                    </HStack>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

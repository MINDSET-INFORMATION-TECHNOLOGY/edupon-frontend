'use client';
import {
  Box,
  Container,
  Icon,
  VStack,
  Button,
  Text,
  Flex,
  Heading,
  Badge,
  List,
  HStack,
  ListItem,
} from '@chakra-ui/react';
import { MdBusiness } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

const slides = [
  {
    title: 'For Students',
    description:
      "Every project you complete can open doors. EduPons helps you showcase your skills, earn recognition, and attract real sponsors and employers—all while learning. Don't just study. Get discovered.",
    features: [
      'Build a public portfolio that stands out',
      'Earn badges and climb leaderboards',
      'Connect directly with mentors and recruiters',
      'Access internships and sponsored challenges',
    ],
    buttonText: 'Join as a Student',
    flowSteps: [
      'Create Your Profile',
      'Join Challenges',
      'Earn Recognition',
      'Access Opportunities',
    ],
  },
  {
    title: 'For Educators',
    description:
      'Every lesson you teach can make an impact. EduPons helps you track student progress, create engaging challenges, and connect with industry partners—all while teaching. Make learning measurable.',
    features: [
      'Design engaging challenges and projects',
      'Track student progress in real-time',
      'Collaborate with industry experts',
      'Showcase student achievements',
    ],
    buttonText: 'Join as an Educator',
    flowSteps: [
      'Create Your Profile',
      'Design Challenges',
      'Track Progress',
      'Connect with Industry',
    ],
  },
  {
    title: 'For Companies',
    description:
      'Every hire you make shapes your future. EduPons helps you discover talented students, sponsor meaningful challenges, and build your employer brand—all in one platform.',
    features: [
      'Discover pre-vetted talent',
      'Sponsor challenges and projects',
      'Build your employer brand',
      'Connect with future employees early',
    ],
    buttonText: 'Join as a Company',
    flowSteps: [
      'Create Company Profile',
      'Post Challenges',
      'Review Submissions',
      'Hire Top Talent',
    ],
  },
];

export default function HowItWorks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Track scroll position to update active slide
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.scrollWidth / slides.length;
      const newActiveSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(newActiveSlide);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dot click to scroll to specific slide
  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const slideWidth = container.scrollWidth / slides.length;
    container.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    });
  };

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
            <Text color={'brand.500'}>How It Works</Text>
          </Badge>

          {/* Heading */}
          <Flex direction={'column'} gap={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size={{ base: 'lg', lg: 'xl' }}>How to use EduPons</Heading>
          </Flex>

          {/* Scrollable Carousel Container */}
          <Box
            ref={scrollContainerRef}
            w="full"
            maxW="container.xl"
            overflowX="auto"
            css={{
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#555',
              },
            }}
            sx={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
            }}
          >
            <Flex gap={4}>
              {slides.map((slide, slideIndex) => (
                <Box
                  key={slideIndex}
                  bgColor={'white'}
                  minW="calc(100% - 80px)"
                  maxW="calc(100% - 80px)"
                  p={{ base: 6, lg: 12 }}
                  borderRadius={'3xl'}
                  flexShrink={0}
                  scrollSnapAlign="start"
                >
                  <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    gap={12}
                    align="center"
                    justify="space-between"
                  >
                    {/* Left Side - Text Content */}
                    <Box flex={1} textAlign="left">
                      <Heading
                        as="h3"
                        fontSize={{ base: '2xl', md: '3xl' }}
                        fontWeight="bold"
                        mb={6}
                        color="gray.900"
                      >
                        {slide.title}
                      </Heading>

                      <Text
                        fontSize={{ base: 'md', md: 'lg' }}
                        color="gray.600"
                        mb={6}
                        lineHeight="1.8"
                      >
                        {slide.description}
                      </Text>

                      <List spacing={3} mb={8}>
                        {slide.features.map((feature, index) => (
                          <ListItem key={index} display="flex" alignItems="flex-start" gap={2}>
                            <Text>-</Text>
                            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700">
                              {feature}
                            </Text>
                          </ListItem>
                        ))}
                      </List>

                      <Button
                        colorScheme="blue"
                        size="lg"
                        px={8}
                        py={6}
                        fontSize="md"
                        fontWeight="semibold"
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                        }}
                        transition="all 0.3s"
                      >
                        {slide.buttonText}
                      </Button>
                    </Box>

                    {/* Right Side - Flow Diagram */}
                    <Box flex={1} maxW={{ base: '100%', lg: '550px' }}>
                      <Box
                        bg="secondary.100"
                        p={{ base: 6, lg: 8 }}
                        borderRadius="3xl"
                        position="relative"
                      >
                        <Box
                          bg={'white'}
                          borderRadius="3xl"
                          p={{ base: 6, lg: 8 }}
                          position="relative"
                        >
                          {/* Step 1 - Top Left */}
                          <Flex justify="flex-start" align="center" gap={4} position="relative">
                            <Box
                              bg="secondary.100"
                              w="50px"
                              h="50px"
                              borderRadius="xl"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexShrink={0}
                            >
                              <VStack spacing={0}>
                                <Icon as={FaGraduationCap} boxSize={5} color="brand.500" />
                                <Text fontSize="9px" color="gray.600" fontWeight="medium">
                                  Step 1
                                </Text>
                              </VStack>
                            </Box>
                            <Box
                              bg="white"
                              px={4}
                              py={2}
                              borderRadius="lg"
                              boxShadow="sm"
                              border="1px solid"
                              borderColor="gray.200"
                            >
                              <Text fontWeight="medium" color="gray.800" fontSize="sm">
                                {slide.flowSteps[0]}
                              </Text>
                            </Box>
                          </Flex>

                          {/* Arrow 1 to 2 */}
                          <Box position="relative" h="60px">
                            <Box
                              position="absolute"
                              left="50%"
                              top="0"
                              transform="translateX(-50%)"
                            >
                              <VStack spacing={0}>
                                <Box
                                  w="1px"
                                  h="30px"
                                  borderLeft="2px dotted"
                                  borderColor="gray.400"
                                />
                                <HStack spacing={0} position="relative">
                                  <Box
                                    w="150px"
                                    h="1px"
                                    borderTop="2px dotted"
                                    borderColor="gray.400"
                                  />
                                  <Box
                                    position="absolute"
                                    right="-8px"
                                    top="50%"
                                    transform="translateY(-50%)"
                                    width={0}
                                    height={0}
                                    borderTop="5px solid transparent"
                                    borderBottom="5px solid transparent"
                                    borderLeft="8px solid"
                                    borderColor="gray.400"
                                  />
                                </HStack>
                              </VStack>
                            </Box>
                          </Box>

                          {/* Step 2 - Right */}
                          <Flex justify="flex-end" align="center" gap={4} position="relative">
                            <Box
                              bg="white"
                              px={4}
                              py={2}
                              borderRadius="lg"
                              boxShadow="sm"
                              border="1px solid"
                              borderColor="gray.200"
                            >
                              <Text fontWeight="medium" color="gray.800" fontSize="sm">
                                {slide.flowSteps[1]}
                              </Text>
                            </Box>
                            <Box
                              bg="secondary.100"
                              w="50px"
                              h="50px"
                              borderRadius="xl"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexShrink={0}
                            >
                              <VStack spacing={0}>
                                <Icon as={FaGraduationCap} boxSize={5} color="brand.500" />
                                <Text fontSize="9px" color="gray.600" fontWeight="medium">
                                  Step 2
                                </Text>
                              </VStack>
                            </Box>
                          </Flex>

                          {/* Arrow 2 to 3 */}
                          <Box position="relative" h="60px">
                            <Box
                              position="absolute"
                              left="50%"
                              top="0"
                              transform="translateX(-50%)"
                            >
                              <VStack spacing={0}>
                                <Box
                                  w="1px"
                                  h="30px"
                                  borderLeft="2px dotted"
                                  borderColor="gray.400"
                                />
                                <HStack spacing={0} position="relative">
                                  <Box
                                    position="absolute"
                                    left="-8px"
                                    top="50%"
                                    transform="translateY(-50%)"
                                    width={0}
                                    height={0}
                                    borderTop="5px solid transparent"
                                    borderBottom="5px solid transparent"
                                    borderRight="8px solid"
                                    borderColor="gray.400"
                                  />
                                  <Box
                                    w="150px"
                                    h="1px"
                                    borderTop="2px dotted"
                                    borderColor="gray.400"
                                  />
                                </HStack>
                              </VStack>
                            </Box>
                          </Box>

                          {/* Step 3 - Left */}
                          <Flex justify="flex-start" align="center" gap={4} position="relative">
                            <Box
                              bg="secondary.100"
                              w="50px"
                              h="50px"
                              borderRadius="xl"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexShrink={0}
                            >
                              <VStack spacing={0}>
                                <Icon as={FaGraduationCap} boxSize={5} color="brand.500" />
                                <Text fontSize="9px" color="gray.600" fontWeight="medium">
                                  Step 3
                                </Text>
                              </VStack>
                            </Box>
                            <Box
                              bg="white"
                              px={4}
                              py={2}
                              borderRadius="lg"
                              boxShadow="sm"
                              border="1px solid"
                              borderColor="gray.200"
                            >
                              <Text fontWeight="medium" color="gray.800" fontSize="sm">
                                {slide.flowSteps[2]}
                              </Text>
                            </Box>
                          </Flex>

                          {/* Arrow 3 to 4 */}
                          <Box position="relative" h="60px">
                            <Box
                              position="absolute"
                              left="50%"
                              top="0"
                              transform="translateX(-50%)"
                            >
                              <VStack spacing={0}>
                                <Box
                                  w="1px"
                                  h="30px"
                                  borderLeft="2px dotted"
                                  borderColor="gray.400"
                                />
                                <HStack spacing={0} position="relative">
                                  <Box
                                    w="150px"
                                    h="1px"
                                    borderTop="2px dotted"
                                    borderColor="gray.400"
                                  />
                                  <Box
                                    position="absolute"
                                    right="-8px"
                                    top="50%"
                                    transform="translateY(-50%)"
                                    width={0}
                                    height={0}
                                    borderTop="5px solid transparent"
                                    borderBottom="5px solid transparent"
                                    borderLeft="8px solid"
                                    borderColor="gray.400"
                                  />
                                </HStack>
                              </VStack>
                            </Box>
                          </Box>

                          {/* Step 4 - Right */}
                          <Flex justify="flex-end" align="center" gap={4}>
                            <Box
                              bg="white"
                              px={4}
                              py={2}
                              borderRadius="lg"
                              boxShadow="sm"
                              border="1px solid"
                              borderColor="gray.200"
                            >
                              <Text fontWeight="medium" color="gray.800" fontSize="sm">
                                {slide.flowSteps[3]}
                              </Text>
                            </Box>
                            <Box
                              bg="secondary.100"
                              w="50px"
                              h="50px"
                              borderRadius="xl"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexShrink={0}
                            >
                              <VStack spacing={0}>
                                <Icon as={FaGraduationCap} boxSize={5} color="brand.500" />
                                <Text fontSize="9px" color="gray.600" fontWeight="medium">
                                  Step 4
                                </Text>
                              </VStack>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Box>

          {/* Pagination Dots */}
          <Flex justifyContent="center" mt={8} gap={3}>
            {slides.map((_, index) => (
              <Box
                key={index}
                w={3}
                h={3}
                borderRadius="full"
                bg={activeSlide === index ? 'brand.500' : 'gray.300'}
                cursor="pointer"
                onClick={() => scrollToSlide(index)}
                transition="all 0.3s"
                _hover={{
                  bg: activeSlide === index ? 'brand.600' : 'gray.400',
                }}
              />
            ))}
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}

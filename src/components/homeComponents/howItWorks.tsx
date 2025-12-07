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
import { FaGraduationCap, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';
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
    bgColor: 'brand.50',
    iconColor: 'brand.500',
    arrowColor: 'brand.500',
    icon: FaGraduationCap,
  },
  {
    title: 'For Educators',
    description:
      "Every project you complete can open doors. EduPons helps you showcase your skills, earn recognition, and attract real sponsors and employers—all while learning. Don't just study. Get discovered.",
    features: [
      'Design gamified learning experiences',
      'Track student participation and results',
      'Collaborate with sponsoring companies',
      "Showcase your institution's impact",
    ],
    buttonText: 'Join as an Educator',
    flowSteps: [
      'Create a Challenge',
      'Track Engagement',
      'Collaborate with Companies',
      'Show Impact',
    ],
    bgColor: 'green.50',
    iconColor: 'green.600',
    arrowColor: 'green.600',
    icon: FaChalkboardTeacher,
  },
  {
    title: 'For Companies',
    description:
      "Why wait for resumes when you can see talent in action? EduPons lets you engage early, sponsor challenges, and connect with skilled students who match your needs. Invest in tomorrow's workforce today.",
    features: [
      'Host or sponsor branded challenges',
      'Identify high-performing students easily',
      'Build a pipeline of future interns or hires',
      'Strengthen your brand in education',
    ],
    buttonText: 'Join as a Company',
    flowSteps: [
      'Create or Sponsor Challenges',
      'Discover Talent Early',
      'Offer Real Opportunities',
      'Build Brand Presence',
    ],
    bgColor: 'purple.50',
    iconColor: 'purple.600',
    arrowColor: 'purple.600',
    icon: FaBuilding,
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

          {/* Scrollable Carousel Container - Desktop/Tablet */}
          <Box
            ref={scrollContainerRef}
            w="full"
            maxW="container.xl"
            overflowX={{ base: 'visible', md: 'auto' }}
            display={{ base: 'none', md: 'block' }}
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
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
                  minW={{ base: '100%', md: 'calc(100% - 80px)' }}
                  maxW={{ base: '100%', md: 'calc(100% - 80px)' }}
                  p={{ base: 4, md: 8, lg: 12 }}
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
                        mb={4}
                        color="gray.900"
                      >
                        {slide.title}
                      </Heading>

                      <Text
                        fontSize={{ base: 'sm', md: 'lg' }}
                        color="gray.600"
                        mb={4}
                        lineHeight="1.8"
                      >
                        {slide.description}
                      </Text>

                      <List spacing={2} mb={6}>
                        {slide.features.map((feature, index) => (
                          <ListItem key={index} display="flex" alignItems="flex-start" gap={1}>
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
                    <Box
                      flex={1}
                      w={{ base: '100%', md: '100%', lg: 'auto' }}
                      maxW={{ base: '100%', md: '100%', lg: '550px' }}
                    >
                      <Box
                        bg={slide.bgColor}
                        p={{ base: 4, md: 8 }}
                        borderRadius="3xl"
                        position="relative"
                      >
                        <Box
                          bg={'white'}
                          borderRadius="2xl"
                          p={{ base: 4, md: 12, lg: 8 }}
                          position="relative"
                        >
                          {/* Step 1 - Top Left */}
                          <Flex
                            justify="flex-start"
                            align="center"
                            gap={{ base: 2, md: 4 }}
                            position="relative"
                          >
                            <Box
                              bg={'white'}
                              py={2}
                              px={3}
                              borderRadius="xl"
                              shadow={'lg'}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexShrink={0}
                            >
                              <VStack spacing={0}>
                                <Icon
                                  as={slide.icon}
                                  boxSize={{ base: 4, md: 5 }}
                                  color={slide.iconColor}
                                />
                                <Text
                                  fontSize={{ base: '8px', md: '9px' }}
                                  color="gray.600"
                                  fontWeight="medium"
                                >
                                  Step 1
                                </Text>
                              </VStack>
                            </Box>
                            <Box
                              bg="white"
                              px={4}
                              py={3}
                              borderRadius="xl"
                              boxShadow="lg"
                              borderColor="gray.200"
                            >
                              <Text
                                fontWeight="medium"
                                color="gray.800"
                                fontSize={{ base: 'xs', md: 'sm' }}
                              >
                                {slide.flowSteps[0]}
                              </Text>
                            </Box>
                          </Flex>

                          {/* Arrow 1 to 2 */}
                          <Box position="relative" h="60px">
                            <Box
                              position="absolute"
                              left={{ base: '50%', md: '35%', lg: '25%' }}
                              top="0"
                            >
                              <HStack spacing={0} align="flex-start">
                                <Box
                                  w="2px"
                                  h="87px"
                                  borderLeft="2px dotted"
                                  borderColor={slide.arrowColor}
                                />
                                <Box position="relative">
                                  <Box
                                    w={{ base: '0px', md: '80px' }}
                                    h="2px"
                                    borderTop="2px dotted"
                                    borderColor={slide.arrowColor}
                                    mt="85px"
                                  />
                                  {/* <Box
                                    position="absolute"
                                    right="0"
                                    top="86px"
                                    transform="translateY(-50%)"
                                    width={0}
                                    height={0}
                                    borderTop="6px solid transparent"
                                    borderBottom="6px solid transparent"
                                    borderLeft="10px solid"
                                    borderLeftColor="brand.500"
                                  /> */}
                                </Box>
                              </HStack>
                            </Box>
                          </Box>

                          {/* Step 2 - Right */}
                          <Flex
                            justify="flex-end"
                            align="center"
                            gap={{ base: 2, md: 4 }}
                            position="relative"
                          >
                            <Box
                              bg="white"
                              px={4}
                              py={3}
                              borderRadius="xl"
                              boxShadow="lg"
                              borderColor="gray.200"
                            >
                              <Text
                                fontWeight="medium"
                                color="gray.800"
                                fontSize={{ base: 'xs', md: 'sm' }}
                              >
                                {slide.flowSteps[1]}
                              </Text>
                            </Box>
                            <Box
                              bg={'white'}
                              py={2}
                              px={3}
                              shadow={'lg'}
                              borderRadius="xl"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexShrink={0}
                            >
                              <VStack spacing={0}>
                                <Icon
                                  as={slide.icon}
                                  boxSize={{ base: 4, md: 5 }}
                                  color={slide.iconColor}
                                />
                                <Text
                                  fontSize={{ base: '8px', md: '9px' }}
                                  color="gray.600"
                                  fontWeight="medium"
                                >
                                  Step 2
                                </Text>
                              </VStack>
                            </Box>
                          </Flex>

                          {/* Arrow 2 to 3 */}
                          <Box position="relative" h="60px">
                            <Box
                              position="absolute"
                              right={{ base: '50%', md: '35%', lg: '25%' }}
                              top="0"
                            >
                              <HStack spacing={0} align="flex-start">
                                <Box position="relative">
                                  <Box
                                    w={{ base: '0px', md: '80px' }}
                                    h="2px"
                                    borderTop="2px dotted"
                                    borderColor={slide.arrowColor}
                                    mt="87px"
                                  />
                                  {/* <Box
                                    position="absolute"
                                    left="0"
                                    top="87px"
                                    transform="translateY(-50%)"
                                    width={0}
                                    height={0}
                                    borderTop="6px solid transparent"
                                    borderBottom="6px solid transparent"
                                    borderRight="10px solid"
                                    borderRightColor="brand.500"
                                  /> */}
                                </Box>
                                <Box
                                  w="2px"
                                  h="89px"
                                  borderLeft="2px dotted"
                                  borderColor={slide.arrowColor}
                                />
                              </HStack>
                            </Box>
                          </Box>

                          {/* Step 3 - Left */}
                          <Flex
                            justify="flex-start"
                            align="center"
                            gap={{ base: 2, md: 4 }}
                            position="relative"
                          >
                            <Box
                              bg={'white'}
                              py={2}
                              px={3}
                              borderRadius="xl"
                              shadow={'lg'}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexShrink={0}
                            >
                              <VStack spacing={0}>
                                <Icon
                                  as={slide.icon}
                                  boxSize={{ base: 4, md: 5 }}
                                  color={slide.iconColor}
                                />
                                <Text
                                  fontSize={{ base: '8px', md: '9px' }}
                                  color="gray.600"
                                  fontWeight="medium"
                                >
                                  Step 3
                                </Text>
                              </VStack>
                            </Box>
                            <Box
                              bg="white"
                              px={4}
                              py={3}
                              borderRadius="xl"
                              boxShadow="lg"
                              borderColor="gray.200"
                            >
                              <Text
                                fontWeight="medium"
                                color="gray.800"
                                fontSize={{ base: 'xs', md: 'sm' }}
                              >
                                {slide.flowSteps[2]}
                              </Text>
                            </Box>
                          </Flex>

                          {/* Arrow 3 to 4 */}
                          <Box position="relative" h="60px">
                            <Box
                              position="absolute"
                              left={{ base: '50%', md: '30%', lg: '25%' }}
                              top="0"
                            >
                              <HStack spacing={0} align="flex-start">
                                <Box
                                  w="2px"
                                  h="87px"
                                  borderLeft="2px dotted"
                                  borderColor={slide.arrowColor}
                                />
                                <Box position="relative">
                                  <Box
                                    w={{ base: '0px', md: '90px' }}
                                    h="2px"
                                    borderTop="2px dotted"
                                    borderColor={slide.arrowColor}
                                    mt="85px"
                                  />
                                  {/* <Box
                                    position="absolute"
                                    right="0"
                                    top="86px"
                                    transform="translateY(-50%)"
                                    width={0}
                                    height={0}
                                    borderTop="6px solid transparent"
                                    borderBottom="6px solid transparent"
                                    borderLeft="10px solid"
                                    borderLeftColor="gray.400"
                                  /> */}
                                </Box>
                              </HStack>
                            </Box>
                          </Box>

                          {/* Step 4 - Right */}
                          <Flex
                            justify="flex-end"
                            align="center"
                            gap={{ base: 2, md: 4 }}
                            position="relative"
                          >
                            <Box
                              bg="white"
                              px={4}
                              py={3}
                              borderRadius="xl"
                              boxShadow="lg"
                              borderColor="gray.200"
                            >
                              <Text
                                fontWeight="medium"
                                color="gray.800"
                                fontSize={{ base: 'xs', md: 'sm' }}
                              >
                                {slide.flowSteps[3]}
                              </Text>
                            </Box>
                            <Box
                              bg={'white'}
                              py={2}
                              px={3}
                              borderRadius="xl"
                              shadow={'lg'}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexShrink={0}
                            >
                              <VStack spacing={0}>
                                <Icon
                                  as={slide.icon}
                                  boxSize={{ base: 4, md: 5 }}
                                  color={slide.iconColor}
                                />
                                <Text
                                  fontSize={{ base: '8px', md: '9px' }}
                                  color="gray.600"
                                  fontWeight="medium"
                                >
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

          {/* Mobile Stacked Version */}
          <VStack spacing={8} w="full" display={{ base: 'flex', md: 'none' }}>
            {slides.map((slide, slideIndex) => (
              <Box key={slideIndex} bgColor={'white'} w="full" p={4} borderRadius={'3xl'}>
                <Flex direction={'column'} gap={12} align="center" justify="space-between">
                  {/* Left Side - Text Content */}
                  <Box flex={1} textAlign="left" w="full">
                    <Heading as="h3" fontSize={'2xl'} fontWeight="bold" mb={4} color="gray.900">
                      {slide.title}
                    </Heading>

                    <Text fontSize={'sm'} color="gray.600" mb={4} lineHeight="1.8">
                      {slide.description}
                    </Text>

                    <List spacing={2} mb={6}>
                      {slide.features.map((feature, index) => (
                        <ListItem key={index} display="flex" alignItems="flex-start" gap={1}>
                          <Text>-</Text>
                          <Text fontSize={'sm'} color="gray.700">
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
                  <Box flex={1} w="full">
                    <Box bg={slide.bgColor} p={4} borderRadius="3xl" position="relative">
                      <Box bg={'white'} borderRadius="2xl" p={4} position="relative">
                        {/* Step 1 - Top Left */}
                        <Flex justify="flex-start" align="center" gap={2} position="relative">
                          <Box
                            bg={slide.bgColor}
                            w={'40px'}
                            h={'40px'}
                            borderRadius="xl"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink={0}
                          >
                            <VStack spacing={0}>
                              <Icon as={slide.icon} boxSize={4} color={slide.iconColor} />
                              <Text fontSize={'8px'} color="gray.600" fontWeight="medium">
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
                            <Text fontWeight="medium" color="gray.800" fontSize={'xs'}>
                              {slide.flowSteps[0]}
                            </Text>
                          </Box>
                        </Flex>

                        {/* Arrow 1 to 2 */}
                        <Box position="relative" h="60px">
                          <Box position="absolute" left={'50%'} top="0">
                            <HStack spacing={0} align="flex-start">
                              <Box
                                w="2px"
                                h="87px"
                                borderLeft="2px dotted"
                                borderColor={slide.arrowColor}
                              />
                              <Box position="relative">
                                <Box
                                  w={'0px'}
                                  h="2px"
                                  borderTop="2px dotted"
                                  borderColor={slide.arrowColor}
                                  mt="85px"
                                />
                              </Box>
                            </HStack>
                          </Box>
                        </Box>

                        {/* Step 2 - Right */}
                        <Flex justify="flex-end" align="center" gap={2} position="relative">
                          <Box
                            bg="white"
                            px={4}
                            py={2}
                            borderRadius="lg"
                            boxShadow="sm"
                            border="1px solid"
                            borderColor="gray.200"
                          >
                            <Text fontWeight="medium" color="gray.800" fontSize={'xs'}>
                              {slide.flowSteps[1]}
                            </Text>
                          </Box>
                          <Box
                            bg={slide.bgColor}
                            w={'40px'}
                            h={'40px'}
                            borderRadius="xl"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink={0}
                          >
                            <VStack spacing={0}>
                              <Icon as={slide.icon} boxSize={4} color={slide.iconColor} />
                              <Text fontSize={'8px'} color="gray.600" fontWeight="medium">
                                Step 2
                              </Text>
                            </VStack>
                          </Box>
                        </Flex>

                        {/* Arrow 2 to 3 */}
                        <Box position="relative" h="60px">
                          <Box position="absolute" right={'50%'} top="0">
                            <HStack spacing={0} align="flex-start">
                              <Box position="relative">
                                <Box
                                  w={'0px'}
                                  h="2px"
                                  borderTop="2px dotted"
                                  borderColor={slide.arrowColor}
                                  mt="87px"
                                />
                              </Box>
                              <Box
                                w="2px"
                                h="89px"
                                borderLeft="2px dotted"
                                borderColor={slide.arrowColor}
                              />
                            </HStack>
                          </Box>
                        </Box>

                        {/* Step 3 - Left */}
                        <Flex justify="flex-start" align="center" gap={2} position="relative">
                          <Box
                            bg={slide.bgColor}
                            w={'40px'}
                            h={'40px'}
                            borderRadius="xl"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink={0}
                          >
                            <VStack spacing={0}>
                              <Icon as={slide.icon} boxSize={4} color={slide.iconColor} />
                              <Text fontSize={'8px'} color="gray.600" fontWeight="medium">
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
                            <Text fontWeight="medium" color="gray.800" fontSize={'xs'}>
                              {slide.flowSteps[2]}
                            </Text>
                          </Box>
                        </Flex>

                        {/* Arrow 3 to 4 */}
                        <Box position="relative" h="60px">
                          <Box position="absolute" left={'50%'} top="0">
                            <HStack spacing={0} align="flex-start">
                              <Box
                                w="2px"
                                h="87px"
                                borderLeft="2px dotted"
                                borderColor={slide.arrowColor}
                              />
                              <Box position="relative">
                                <Box
                                  w={'0px'}
                                  h="2px"
                                  borderTop="2px dotted"
                                  borderColor={slide.arrowColor}
                                  mt="85px"
                                />
                              </Box>
                            </HStack>
                          </Box>
                        </Box>

                        {/* Step 4 - Right */}
                        <Flex justify="flex-end" align="center" gap={2} position="relative">
                          <Box
                            bg="white"
                            px={4}
                            py={2}
                            borderRadius="lg"
                            boxShadow="sm"
                            border="1px solid"
                            borderColor="gray.200"
                          >
                            <Text fontWeight="medium" color="gray.800" fontSize={'xs'}>
                              {slide.flowSteps[3]}
                            </Text>
                          </Box>
                          <Box
                            bg={slide.bgColor}
                            w={'40px'}
                            h={'40px'}
                            borderRadius="xl"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink={0}
                          >
                            <VStack spacing={0}>
                              <Icon as={slide.icon} boxSize={4} color={slide.iconColor} />
                              <Text fontSize={'8px'} color="gray.600" fontWeight="medium">
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
          </VStack>

          {/* Pagination Dots - Desktop/Tablet only */}
          <Flex justifyContent="center" mt={8} gap={3} display={{ base: 'none', md: 'flex' }}>
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

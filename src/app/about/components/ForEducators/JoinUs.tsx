'use client';

import { VStack, HStack, Box, Text, Image, Container, Heading, Button } from '@chakra-ui/react';

const JoinUs = () => {
  return (
    <Box w="full" display="flex" justifyContent="center" py={8}>
      <Box
        maxW="container.xl"
        w="1240px"
        mx={0}
        px={{ base: 4, md: 14 }}
        py={8}
        minH={'300px'}
        bgImage="url('/Last CTA.svg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'brand.900',
          opacity: 0.4,
          zIndex: 0,
        }}
      >
        <Container maxW="container.xl" position="relative" zIndex={1} p={0}>
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems="center"
            justifyContent="center"
            gap={12}
            minH='300px'
          >

            <Box
              flex='auto'
              color="white"
              textAlign='center'
              maxW='800px'
              display="flex"
              flexDirection="column"
              alignItems='center'
              justifyContent="center"
            >
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                mb={4}
                lineHeight="1.2"
              >
                Our Vision for Educators
              </Heading>
              <Text fontSize={{ base: 'md', md: 'sm' }} lineHeight="1.8" mb={0}>
                We see classrooms that go beyond textbooks, spaces where curiosity, creativity, and collaboration thrive.{' '} 
                EduPons exists to help you bring that vision to life.
              </Text>

              <Button
                size="lg"
                colorScheme="white"
                variant="solid"
                bg="white"
                color="blue.600"
                px={8}
                py={6}
                mt={6}
                fontSize="md"
                fontWeight="semibold"
                _hover={{
                  bg: 'gray.100',
                  transform: 'translateY(-2px)',
                }}
                _active={{
                  bg: 'gray.200',
                }}
                transition="all 0.3s"
              >
                Join EduPons as an Educator →
              </Button>
            </Box>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default JoinUs;

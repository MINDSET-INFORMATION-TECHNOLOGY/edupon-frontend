import { Container, VStack, Heading, Text, Button, Flex, Box, Image } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box bgGradient="linear(to-b, white, brand.50)" pt={{ base: '90px', md: '90px' }}>
      <Container maxW="container.xl" pt={{ base: 10, md: 20 }}>
        <VStack spacing={8} align="center" textAlign="center">
          <Flex direction={'column'} gap={8} align="center" textAlign="center">
            <Heading as="h1" size="2xl" maxW="2xl" color="gray.600">
              Building Bridges Between Classrooms and Careers
            </Heading>

            <Text fontSize="lg" color="gray.600" maxW="4xl">
              EduPons connects students, educators, and companies in one dynamic ecosystem turning
              learning into real opportunities through challenges, recognition, and collaboration.
            </Text>

            <Button size="md" colorScheme="brand" width="auto">
              Join EduPons
            </Button>
          </Flex>
          <Flex
            direction={'column'}
            gap={0}
            align="center"
            justifyContent={'space-between'}
            width={'full'}
          >
            {/* Mobile: Icon groups on top with space-between */}
            <Flex
              direction={'row'}
              width={'full'}
              justifyContent={'space-between'}
              display={{ base: 'flex', lg: 'none' }}
            >
              <Image
                src={'/home/iconGroupMobile.svg'}
                alt={'EduPons'}
                width={150}
                height={20}
                w={{ base: '80px', md: '160px' }}
                h={'auto'}
                transform="scaleX(-1)"
              />
              <Image
                src={'/home/iconGroupMobile.svg'}
                alt={'EduPons'}
                width={150}
                height={20}
                w={{ base: '80px', md: '160px' }}
                h={'auto'}
              />
            </Flex>

            {/* Desktop: Icon groups on sides of dashboard image */}
            <Flex
              direction={'row'}
              gap={0}
              align="center"
              justifyContent={'center'}
              width={'full'}
              display={{ base: 'none', lg: 'flex' }}
            >
              <Image
                src={'/home/iconGroup.svg'}
                alt={'EduPons'}
                width={300}
                height={20}
                w={'180px'}
                h={'auto'}
                transform="scaleX(-1)"
              />
              <Image
                src={'/home/Homepage Dashboard Overview B.svg'}
                alt={'EduPons'}
                width={500}
                height={400}
                w={'auto'}
                h={'auto'}
              />
              <Image
                src={'/home/iconGroup.svg'}
                alt={'EduPons'}
                width={300}
                height={20}
                w={'180px'}
                h={'auto'}
              />
            </Flex>

            {/* Mobile: Dashboard image below */}
            <Image
              src={'/home/Homepage Dashboard Overview B.svg'}
              alt={'EduPons'}
              width={400}
              height={300}
              w={'auto'}
              h={'auto'}
              display={{ base: 'block', lg: 'none' }}
            />
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}

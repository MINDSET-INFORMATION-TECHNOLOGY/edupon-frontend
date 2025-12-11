import { Container, VStack, Heading, Text, Flex, Box, Image } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box bgGradient="linear(to-b, white, brand.50)" pt={{ base: '90px', md: '90px' }}>
      <Container maxW="container.xl" pt={{ base: 10, lg: 20 }}>
        <VStack spacing={8} align="center" textAlign="center">
          <Flex direction={'column'} gap={8} align="center" textAlign="center">
            <Heading as="h1" size="2xl" maxW="2xl" color="gray.600">
              We are here to help you out
            </Heading>

            <Text fontSize="lg" color="gray.600" maxW="4xl">
              If you have any questions, just reach out to us and we will respond as soon as we can.
            </Text>
          </Flex>
          <Flex
            direction={'column'}
            gap={0}
            align="center"
            justifyContent={'space-between'}
            width={'full'}
          >
            <Image
              src={'/contactUs/contactUs.svg'}
              alt={'EduPons'}
              width={500}
              height={400}
              w={'auto'}
              h={'auto'}
            />
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}

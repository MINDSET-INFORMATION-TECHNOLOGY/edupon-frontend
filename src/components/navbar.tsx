'use client';

import { Image } from '@chakra-ui/next-js';
import { Box, Container, Flex, Stack, Button, Link, Collapse } from '@chakra-ui/react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box borderBottom="1px" borderBottomColor="gray.300" position="relative">
      <Container maxW="container.xl" p={0}>
        <Flex
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'full'}
        >
          <Link href="/" py={4}>
            <Image
              src={'/eduponsLogo.svg'}
              alt={'EduPons'}
              width={200}
              height={20}
              w={'137px'}
              h={'auto'}
            />
          </Link>

          <Stack
            display={{
              base: 'none',
              lg: 'block',
            }}
          >
            <Flex
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'full'}
              gap={2}
            >
              <Link
                href="/about"
                px={4}
                py={3}
                color={'black'}
                _hover={{ bg: 'brand.500', color: 'white', borderRadius: 'full' }}
                _active={{ bg: 'brand.500', color: 'white', borderRadius: 'full' }}
              >
                About Us
              </Link>
              <Link
                href="/blogs"
                px={4}
                py={3}
                color={'black'}
                _active={{ bg: 'brand.500', color: 'white', borderRadius: 'full' }}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                px={4}
                py={3}
                color={'black'}
                _hover={{ bg: 'brand.500', color: 'white', borderRadius: 'full' }}
                _active={{ bg: 'brand.500', color: 'white', borderRadius: 'full' }}
              >
                Contact Us
              </Link>
            </Flex>
          </Stack>

          <Stack
            display={{
              base: 'none',
              lg: 'block',
            }}
          >
            <Flex
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'full'}
              gap={4}
            >
              <Button size="lg" variant="outline" colorScheme="brand">
                Log in
              </Button>
              <Button size="lg" colorScheme="brand">
                Register
              </Button>
            </Flex>
          </Stack>

          <Stack
            display={{
              base: 'block',
              lg: 'none',
            }}
            width="auto"
            height="auto"
            p={4}
            cursor="pointer"
            onClick={toggleMenu}
          >
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              w={6}
              h={5}
              position="relative"
            >
              <Box
                w={6}
                h={0.5}
                bg={'black'}
                borderRadius={'full'}
                transition={'all 0.3s'}
                position="absolute"
                transform={isOpen ? 'rotate(45deg)' : 'translateY(-8px)'}
              ></Box>
              <Box
                w={6}
                h={0.5}
                bg={'black'}
                borderRadius={'full'}
                transition={'all 0.3s'}
                opacity={isOpen ? 0 : 1}
              ></Box>
              <Box
                w={6}
                h={0.5}
                bg={'black'}
                borderRadius={'full'}
                transition={'all 0.3s'}
                position="absolute"
                transform={isOpen ? 'rotate(-45deg)' : 'translateY(8px)'}
              ></Box>
            </Flex>
          </Stack>
        </Flex>

        {/* Mobile Menu Dropdown */}
        <Collapse in={isOpen} animateOpacity>
          <Box
            display={{
              base: 'block',
              lg: 'none',
            }}
            position="absolute"
            top="100%"
            left={0}
            right={0}
            bg="white"
            textAlign="center"
            borderRadius={'lg'}
            borderBottom="1px"
            borderBottomColor="gray.300"
            boxShadow="md"
            zIndex={10}
            pb={4}
            px={4}
          >
            <Stack spacing={4}>
              <Link
                href="/about"
                py={2}
                color={'black'}
                _hover={{ color: 'brand.500' }}
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/blogs"
                py={2}
                color={'black'}
                _hover={{ color: 'brand.500' }}
                onClick={toggleMenu}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                py={2}
                color={'black'}
                _hover={{ color: 'brand.500' }}
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <Box pt={2}>
                <Stack spacing={3}>
                  <Button size="md" variant="outline" colorScheme="brand" width="full">
                    Log in
                  </Button>
                  <Button size="md" colorScheme="brand" width="full">
                    Register
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}

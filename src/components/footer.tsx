'use client';
import { Image } from '@chakra-ui/next-js';
import { Box, Container, Flex, HStack, Link, Text } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { MdLocationOn } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box m={4} pt={10} pb={6} bg={'brand.500'} borderRadius={'lg'}>
      <Container maxW="container.xl" py={0} px={6}>
        <Flex
          direction={{
            base: 'column',
            md: 'row',
          }}
          justifyContent={'space-between'}
          width={'full'}
          gap={{
            base: 12,
            md: 6,
            lg: 12,
          }}
        >
          {/* Left section - Logo and tagline */}
          <Flex
            direction={'column'}
            justifyContent={'flex-start'}
            width={{ base: 'full', md: '28%', lg: '35%' }}
            gap={4}
            flexShrink={{ md: 0 }}
          >
            <Box>
              <Image
                src={'/eduponsLogo.svg'}
                alt={'EduPons'}
                width={200}
                height={20}
                filter={'brightness(0) invert(1)'}
                w={'137px'}
                h={'auto'}
              />
            </Box>
            <Text
              color={'white'}
              fontSize={'sm'}
              lineHeight={{ base: '1.6', md: '1.8' }}
              maxW={{ md: '300px' }}
            >
              Connecting Students. Empowering Educators. Engaging Companies. A smarter bridge
              between learning and opportunity
            </Text>
          </Flex>

          {/* Middle section - Navigation links */}
          <Flex
            direction={'row'}
            justifyContent={{ base: 'space-between', md: 'flex-start', lg: 'space-between' }}
            width={{ base: 'full', md: 'auto', lg: 'auto' }}
            gap={{ base: 12, md: 8, lg: 20 }}
            flexShrink={{ md: 0 }}
          >
            {/* Column 1 */}
            <Flex direction={'column'} gap={3} minW={{ md: 'max-content' }}>
              <Link
                href="/"
                color={'white'}
                _hover={{ textDecoration: 'underline' }}
                fontSize={'sm'}
              >
                Home
              </Link>
              <Link
                href="/about"
                color={'white'}
                _hover={{ textDecoration: 'underline' }}
                fontSize={'sm'}
              >
                About us
              </Link>
              <Link
                href="/blogs"
                color={'white'}
                _hover={{ textDecoration: 'underline' }}
                fontSize={'sm'}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                color={'white'}
                _hover={{ textDecoration: 'underline' }}
                fontSize={'sm'}
              >
                Contact us
              </Link>
            </Flex>

            {/* Column 2 */}
            <Flex direction={'column'} gap={3} minW={{ md: 'max-content' }}>
              <Link
                href="/policies"
                color={'white'}
                _hover={{ textDecoration: 'underline' }}
                fontSize={'sm'}
              >
                Terms of Use
              </Link>
              <Link
                href="/"
                color={'white'}
                _hover={{ textDecoration: 'underline' }}
                fontSize={'sm'}
              >
                Privacy Policy
              </Link>
              <Link
                href="/resources"
                color={'white'}
                _hover={{ textDecoration: 'underline' }}
                fontSize={'sm'}
              >
                Resources
              </Link>
              <Link
                href="/our-team"
                color={'white'}
                _hover={{ textDecoration: 'underline' }}
                fontSize={'sm'}
              >
                Our Team
              </Link>
            </Flex>
          </Flex>
          {/* Column 3 - Contact Info */}
          <Flex
            direction={'column'}
            gap={3}
            width={{ base: 'full', md: 'auto' }}
            maxW={{ md: '220px', lg: 'none' }}
          >
            <Flex alignItems={'flex-start'} gap={2}>
              <PhoneIcon color={'white'} mt={1} boxSize={5} flexShrink={0} />
              <Text color={'white'} fontSize={'sm'}>
                +234 806 769 7068
              </Text>
            </Flex>

            <Flex alignItems={'flex-start'} gap={2}>
              <EmailIcon color={'white'} mt={1} boxSize={5} flexShrink={0} />
              <Text color={'white'} fontSize={'sm'}>
                hello@edupons.com
              </Text>
            </Flex>

            <Flex alignItems={'flex-start'} gap={2}>
              <Box as={MdLocationOn} color={'white'} mt={1} boxSize={5} flexShrink={0} />
              <Text color={'white'} fontSize={'sm'} whiteSpace={{ lg: 'nowrap' }}>
                No. 24, Behind Airport Road, Ikeja. Lagos.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Bottom section - Copyright */}
        <Box mt={8} py={4} bg={'whiteAlpha.200'} borderRadius={{ base: 'xl', lg: 'full' }}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'full'}
            px={4}
            gap={{ base: 4, md: 0 }}
          >
            <Text color={'white'} fontSize={'xs'}>
              © {new Date().getFullYear()} EduPons. All rights reserved.
            </Text>
            <HStack direction={'row'} gap={3}>
              <Flex
                alignItems={'center'}
                justifyContent={'center'}
                w={10}
                h={10}
                bg={'whiteAlpha.300'}
                borderRadius={'full'}
                cursor={'pointer'}
                _hover={{ bg: 'whiteAlpha.400' }}
              >
                <Box as={FaFacebookF} color={'white'} boxSize={4} />
              </Flex>
              <Flex
                alignItems={'center'}
                justifyContent={'center'}
                w={10}
                h={10}
                bg={'whiteAlpha.300'}
                borderRadius={'full'}
                cursor={'pointer'}
                _hover={{ bg: 'whiteAlpha.400' }}
              >
                <Box as={FaTwitter} color={'white'} boxSize={4} />
              </Flex>
              <Flex
                alignItems={'center'}
                justifyContent={'center'}
                w={10}
                h={10}
                bg={'whiteAlpha.300'}
                borderRadius={'full'}
                cursor={'pointer'}
                _hover={{ bg: 'whiteAlpha.400' }}
              >
                <Box as={FaYoutube} color={'white'} boxSize={4} />
              </Flex>
              <Flex
                alignItems={'center'}
                justifyContent={'center'}
                w={10}
                h={10}
                bg={'whiteAlpha.300'}
                borderRadius={'full'}
                cursor={'pointer'}
                _hover={{ bg: 'whiteAlpha.400' }}
              >
                <Box as={FaInstagram} color={'white'} boxSize={4} />
              </Flex>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

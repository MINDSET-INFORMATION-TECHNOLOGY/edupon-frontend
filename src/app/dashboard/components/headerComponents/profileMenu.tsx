'use client';

import { Avatar, Box, HStack, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function ProfileMenu() {
  const { isOpen, onToggle } = useDisclosure();

  const profile = {
    name: 'John Sarah',
    role: 'Product Designer',
    email: 'johnsarah@example.com',
    image: '/profile-image.jpg',
  };

  return (
    <Box position="relative">
      <HStack
        spacing={1}
        h="52px"
        px={{ base: 2, md: 3 }}
        borderWidth="1px"
        borderStyle="solid"
        borderColor="gray.200"
        borderRadius="10px"
        bg="white"
      >
        <Avatar size="sm" name={profile.name} src={profile.image} />

        <Text
          display={{ base: 'none', md: 'block' }}
          fontSize="sm"
          fontWeight="medium"
          color="gray.700"
          whiteSpace="nowrap"
        >
          {profile.name}
        </Text>

        <IconButton
          aria-label="Toggle profile menu"
          icon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
          variant="ghost"
          size="sm"
          minW="unset"
          h="28px"
          w="28px"
          color="gray.500"
          _hover={{ bg: 'transparent' }}
          onClick={onToggle}
        />
      </HStack>

      {isOpen && (
        <Box
          position="absolute"
          top="calc(100% + 10px)"
          right="0"
          w={{ base: '230px', md: '260px' }}
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="12px"
          boxShadow="sm"
          p={4}
          zIndex={20}
        >
          <HStack align="start" spacing={3}>
            <Avatar size="md" name={profile.name} src={profile.image} />
            <Box minW="0">
              <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                {profile.name}
              </Text>
              <Text fontSize="xs" color="gray.500" mt={1}>
                {profile.role}
              </Text>
              <Text fontSize="xs" color="gray.500" mt={2} noOfLines={1}>
                {profile.email}
              </Text>
            </Box>
          </HStack>
        </Box>
      )}
    </Box>
  );
}

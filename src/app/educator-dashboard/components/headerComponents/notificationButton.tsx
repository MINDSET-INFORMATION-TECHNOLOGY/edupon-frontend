'use client';

import { Box, IconButton } from '@chakra-ui/react';
import { FiBell } from 'react-icons/fi';

export default function NotificationButton() {
  return (
    <Box position="relative">
      <IconButton
        aria-label="Notifications"
        icon={<FiBell />}
        variant="ghost"
        h="52px"
        w="52px"
        minW="52px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="gray.200"
        borderRadius="10px"
        bg="white"
        color="gray.500"
        _hover={{ bg: 'gray.50' }}
      />
      <Box
        position="absolute"
        top="12px"
        right="13px"
        w="10px"
        h="10px"
        bg="red.500"
        borderRadius="full"
        border="2px solid white"
      />
    </Box>
  );
}

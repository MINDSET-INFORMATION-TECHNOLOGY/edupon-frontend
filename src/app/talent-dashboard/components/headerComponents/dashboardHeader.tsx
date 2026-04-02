'use client';

import { Box, Flex, HStack } from '@chakra-ui/react';
import HeaderSearch from './headerSearch';
import NotificationButton from './notificationButton';
import ProfileMenu from './profileMenu';

export default function DashboardHeader() {
  return (
    <Box
      bg="white"
      px={{ base: 4, md: 6 }}
      py={5}
      borderBottom="1px solid"
      borderColor="gray.200"
      position="relative"
    >
      <Flex align="center" justify="space-between" gap={3}>
        <HeaderSearch />

        <HStack spacing={2} flexShrink={0}>
          <NotificationButton />
          <ProfileMenu />
        </HStack>
      </Flex>
    </Box>
  );
}

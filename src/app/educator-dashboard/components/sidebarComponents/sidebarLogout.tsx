'use client';

import { Box, Button } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';

type SidebarLogoutProps = {
  collapsed: boolean;
  onOpenLogout: () => void;
};

export default function SidebarLogout({ collapsed, onOpenLogout }: SidebarLogoutProps) {
  return (
    <Box mt={6} mb={6} borderTop="1px" borderTopColor="gray.100">
      <Button
        flexShrink={0}
        colorScheme="red"
        color="red.500"
        fontWeight="light"
        _hover={{ color: 'white', bg: 'red.500' }}
        variant="ghost"
        justifyContent={collapsed ? 'center' : 'flex-start'}
        leftIcon={!collapsed ? <FiLogOut /> : undefined}
        onClick={onOpenLogout}
      >
        {collapsed ? <FiLogOut /> : 'Logout'}
      </Button>
    </Box>
  );
}

'use client';

import { HStack, IconButton, Image } from '@chakra-ui/react';
import { FiSidebar, FiX } from 'react-icons/fi';

type SidebarHeaderProps = {
  collapsed: boolean;
  isMobileDrawer?: boolean;
  onCloseMobile: () => void;
  onToggleCollapse: () => void;
};

export default function SidebarHeader({
  collapsed,
  isMobileDrawer = false,
  onCloseMobile,
  onToggleCollapse,
}: SidebarHeaderProps) {
  return (
    <HStack
      justify="space-between"
      align="center"
      p={4}
      mb={6}
      flexShrink={0}
      borderBottom="1px"
      borderBottomColor="gray.100"
    >
      {!collapsed && (
        <Image src="/eduponsLogo.svg" alt="EduPons" width={200} height={20} w="137px" h="auto" />
      )}

      {isMobileDrawer ? (
        <IconButton
          aria-label="Close sidebar"
          icon={<FiX />}
          variant="ghost"
          onClick={onCloseMobile}
        />
      ) : (
        <IconButton
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          icon={<FiSidebar />}
          size="sm"
          variant="ghost"
          display={{ base: 'none', md: 'inline-flex' }}
          onClick={onToggleCollapse}
        />
      )}
    </HStack>
  );
}

'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import Sidebar from './components/sidebarComponents/sideBar';
import DashboardHeader from './components/headerComponents/dashboardHeader';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const desktopSidebarWidth = collapsed ? '72px' : '260px';

  return (
    <Flex minH="100vh" bg="gray.50" direction={{ base: 'column', md: 'row' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <Box
        flex="1"
        backgroundColor={'white'}
        ml={{ base: 0, md: desktopSidebarWidth }}
        transition="margin-left 0.2s ease"
        minW={0}
      >
        <DashboardHeader />

        <Box p={{ base: 4, md: 10 }}>{children}</Box>
      </Box>
    </Flex>
  );
}

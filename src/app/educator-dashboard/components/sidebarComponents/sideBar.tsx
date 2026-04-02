'use client';

import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import SidebarHeader from './sidebarHeader';
import SidebarLogout from './sidebarLogout';
import SidebarLogoutDialog from './logoutDialog';
import SidebarNav from './sidebarNav';

type DashboardSidebarProps = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ collapsed, setCollapsed }: DashboardSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const mobileDrawer = useDisclosure();
  const logoutDialog = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const desktopWidth = collapsed ? '72px' : '260px';

  const handleNavigate = (href: string) => {
    router.push(href);
    mobileDrawer.onClose();
  };

  const renderSidebarContent = (isMobileDrawer = false) => (
    <Flex direction="column" h="100%" bg="white">
      <SidebarHeader
        collapsed={collapsed}
        isMobileDrawer={isMobileDrawer}
        onCloseMobile={mobileDrawer.onClose}
        onToggleCollapse={() => setCollapsed((prev) => !prev)}
      />

      <SidebarNav collapsed={collapsed} pathname={pathname} onNavigate={handleNavigate} />

      <SidebarLogout collapsed={collapsed} onOpenLogout={logoutDialog.onOpen} />
    </Flex>
  );

  return (
    <>
      <Flex
        display={{ base: 'flex', md: 'none' }}
        align="center"
        justify="space-between"
        px={4}
        py={3}
        bg="white"
        borderBottomWidth="1px"
        position="sticky"
        top="0"
        zIndex="1000"
      >
        <Image src="/eduponsLogo.svg" alt="EduPons" width={200} height={20} w="137px" h="auto" />
        <IconButton
          aria-label="Open sidebar"
          icon={<FiMenu />}
          variant="ghost"
          onClick={mobileDrawer.onOpen}
        />
      </Flex>

      <Box
        display={{ base: 'none', md: 'block' }}
        position="fixed"
        top="0"
        left="0"
        h="100vh"
        w={desktopWidth}
        borderRightWidth="1px"
        bg="white"
        transition="width 0.2s ease"
        overflow="hidden"
      >
        {renderSidebarContent(false)}
      </Box>

      <Drawer isOpen={mobileDrawer.isOpen} placement="left" onClose={mobileDrawer.onClose}>
        <DrawerOverlay bg="blackAlpha.600" />
        <DrawerContent maxW="260px">{renderSidebarContent(true)}</DrawerContent>
      </Drawer>

      <SidebarLogoutDialog
        isOpen={logoutDialog.isOpen}
        cancelRef={cancelRef}
        onClose={logoutDialog.onClose}
        onConfirm={() => {
          logoutDialog.onClose();
          mobileDrawer.onClose();
          router.push('/login');
        }}
      />
    </>
  );
}

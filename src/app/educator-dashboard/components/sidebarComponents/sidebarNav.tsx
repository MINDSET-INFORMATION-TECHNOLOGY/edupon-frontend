'use client';

import { Box, VStack } from '@chakra-ui/react';
import { navItems } from './navItems';
import SidebarAccordionItem from './sidebarAccordionItems';
import SidebarNavItem from './sidebarNavItems';

type SidebarNavProps = {
  collapsed: boolean;
  pathname: string;
  onNavigate: (href: string) => void;
};

export default function SidebarNav({ collapsed, pathname, onNavigate }: SidebarNavProps) {
  const isItemActive = (href?: string) => {
    if (!href) return false;
    return pathname === href;
  };

  const isChildActive = (children?: { label: string; href: string }[]) => {
    if (!children) return false;
    return children.some((child) => pathname === child.href);
  };

  return (
    <Box flex="1" minH={0} overflowY="auto" pr={0.5}>
      <VStack align="stretch" spacing={2}>
        {navItems.map((item) =>
          item.children ? (
            <SidebarAccordionItem
              key={item.label}
              item={item}
              collapsed={collapsed}
              isParentActive={isChildActive(item.children)}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          ) : (
            <SidebarNavItem
              key={item.label}
              item={item}
              collapsed={collapsed}
              isActive={isItemActive(item.href)}
              onNavigate={onNavigate}
            />
          )
        )}
      </VStack>
    </Box>
  );
}

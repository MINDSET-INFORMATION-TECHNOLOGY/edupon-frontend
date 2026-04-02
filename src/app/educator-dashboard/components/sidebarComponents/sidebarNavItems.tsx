'use client';

import { Button } from '@chakra-ui/react';
import { NavItemType } from './types';

type SidebarNavItemProps = {
  item: NavItemType;
  collapsed: boolean;
  isActive: boolean;
  onNavigate: (href: string) => void;
};

export default function SidebarNavItem({
  item,
  collapsed,
  isActive,
  onNavigate,
}: SidebarNavItemProps) {
  const Icon = item.icon;

  if (!item.href) return null;

  return (
    <Button
      color={isActive ? 'blue.600' : 'gray.400'}
      fontWeight="light"
      bg={isActive ? 'brand.50' : 'transparent'}
      _hover={{ color: 'blue.600', bg: 'brand.50' }}
      variant="ghost"
      justifyContent={collapsed ? 'center' : 'flex-start'}
      leftIcon={!collapsed ? <Icon /> : undefined}
      onClick={() => onNavigate(item.href!)}
    >
      {collapsed ? <Icon /> : item.label}
    </Button>
  );
}

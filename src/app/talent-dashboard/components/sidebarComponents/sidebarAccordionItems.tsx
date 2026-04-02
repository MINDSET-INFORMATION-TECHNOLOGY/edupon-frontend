'use client';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NavItemType } from './types';

type SidebarAccordionItemProps = {
  item: NavItemType;
  collapsed: boolean;
  isParentActive: boolean;
  pathname: string;
  onNavigate: (href: string) => void;
};

export default function SidebarAccordionItem({
  item,
  collapsed,
  isParentActive,
  pathname,
  onNavigate,
}: SidebarAccordionItemProps) {
  const Icon = item.icon;

  if (!item.children) return null;

  return (
    <Accordion allowToggle defaultIndex={isParentActive ? 0 : undefined}>
      <AccordionItem border="none">
        <AccordionButton
          px={!collapsed ? 4 : 7}
          py={2}
          borderRadius="md"
          _hover={{ color: 'blue.600', bg: 'brand.50' }}
          color={isParentActive ? 'blue.600' : 'gray.400'}
          bg={isParentActive ? 'brand.50' : 'transparent'}
          fontWeight="light"
        >
          <HStack flex="1" spacing={2}>
            <Box as={Icon} />
            {!collapsed && <Text>{item.label}</Text>}
          </HStack>
          {!collapsed && <AccordionIcon />}
        </AccordionButton>

        {!collapsed && (
          <AccordionPanel pt={1} pl={8}>
            <VStack align="stretch" spacing={1} borderLeft="1px" borderLeftColor="gray.300">
              {item.children.map((child) => (
                <Button
                  key={child.href}
                  variant="ghost"
                  color={pathname === child.href ? 'blue.600' : 'gray.400'}
                  bg={pathname === child.href ? 'brand.50' : 'transparent'}
                  fontWeight="light"
                  _hover={{ color: 'blue.600', bg: 'brand.50' }}
                  justifyContent="flex-start"
                  onClick={() => onNavigate(child.href)}
                >
                  {child.label}
                </Button>
              ))}
            </VStack>
          </AccordionPanel>
        )}
      </AccordionItem>
    </Accordion>
  );
}

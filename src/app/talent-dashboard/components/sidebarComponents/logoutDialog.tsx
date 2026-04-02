'use client';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { RefObject } from 'react';

type SidebarLogoutDialogProps = {
  isOpen: boolean;
  cancelRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onConfirm: () => void;
};

export default function SidebarLogoutDialog({
  isOpen,
  cancelRef,
  onClose,
  onConfirm,
}: SidebarLogoutDialogProps) {
  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Confirm Logout</AlertDialogHeader>

          <AlertDialogBody>Are you sure you want to logout?</AlertDialogBody>

          <AlertDialogFooter>
            <Button
              variant="secondary"
              border="1px"
              _hover={{ color: 'white', bg: 'brand.600' }}
              ref={cancelRef}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              colorScheme="red"
              color="white"
              backgroundColor="red.500"
              fontWeight="light"
              _hover={{ color: 'white', bg: 'red.600' }}
              ml={3}
              onClick={onConfirm}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

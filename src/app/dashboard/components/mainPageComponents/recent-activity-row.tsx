'use client';

import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { FiClock } from 'react-icons/fi';
import { IconType } from 'react-icons';

type RecentActivityRowProps = {
  title: string;
  time: string;
  icon: IconType;
  isLast?: boolean;
};

export default function RecentActivityRow({
  title,
  time,
  icon,
  isLast = false,
}: RecentActivityRowProps) {
  return (
    <Flex
      align="center"
      gap={4}
      px={{ base: 4, md: 6 }}
      py={5}
      bg="white"
      borderBottom={isLast ? 'none' : '1px solid'}
      borderColor="gray.200"
    >
      <Flex
        w="44px"
        h="44px"
        borderRadius="full"
        bg="gray.200"
        align="center"
        justify="center"
        flexShrink={0}
      >
        <Icon as={icon} boxSize={5} color="brand.500" />
      </Flex>

      <Box>
        <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="600" color="gray.800" mb={1}>
          {title}
        </Text>

        <HStack spacing={2}>
          <Icon as={FiClock} boxSize={4} color="gray.500" />
          <Text fontSize="md" color="gray.500">
            {time}
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
}

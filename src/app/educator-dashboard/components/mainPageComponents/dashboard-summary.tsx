'use client';

import { Box, Flex, HStack, Icon, Progress, Text } from '@chakra-ui/react';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { IconType } from 'react-icons';

type DashboardSummaryCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  actionLabel?: string;
  icon: IconType;
  iconColor: string;
  progressValue?: number;
  type?: 'stat' | 'progress';
};

export default function DashboardSummaryCard({
  title,
  value,
  subtitle,
  actionLabel,
  icon,
  iconColor,
  progressValue,
  type = 'stat',
}: DashboardSummaryCardProps) {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="12px"
      minH="146px"
      px={5}
      py={5}
    >
      <Flex justify="space-between" align="flex-start" mb={6}>
        <HStack spacing={3}>
          <Icon as={icon} boxSize={5} color={iconColor} />
          <Text fontSize="md" fontWeight="500" color="gray.500">
            {title}
          </Text>
        </HStack>

        <Icon as={FiArrowUpRight} boxSize={5} color="gray.300" />
      </Flex>

      <Text
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="700"
        color="gray.500"
        lineHeight="1"
        mb={type === 'progress' ? 3 : 2}
      >
        {value}
      </Text>

      {type === 'progress' && typeof progressValue === 'number' && (
        <Progress
          value={progressValue}
          size="sm"
          colorScheme="brand"
          bg="gray.400"
          borderRadius="999px"
          h="10px"
          mb={4}
          sx={{
            '& > div': {
              borderRadius: '999px',
            },
          }}
        />
      )}

      {subtitle ? (
        <Text fontSize="sm" fontWeight="500" color="gray.400" lineHeight="1.3" mb={4}>
          {subtitle}
        </Text>
      ) : (
        <Box h="24px" />
      )}

      {actionLabel ? (
        <HStack spacing={2} color="brand.500">
          <Text fontSize="md" fontWeight="500">
            {actionLabel}
          </Text>
          <Icon as={FiArrowRight} boxSize={4} />
        </HStack>
      ) : null}
    </Box>
  );
}

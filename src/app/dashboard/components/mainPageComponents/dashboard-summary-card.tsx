'use client';

import { Box, Flex, HStack, Icon, Progress, Text } from '@chakra-ui/react';
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi';
import type { DashboardSectionCard } from './dashboard-types';


export default function DashboardSummaryCard({
  title,
  value,
  subtitle,
  actionLabel,
  icon,
  iconColor,
  progressValue,
  type = 'stat',
}: DashboardSectionCard) {
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
          <Icon as={icon} boxSize={6} color={iconColor} />
          <Text fontSize="md" fontWeight="500">
            {title}
          </Text>
        </HStack>

        <Icon as={FiTrendingUp} boxSize={7} color="gray.300" />
      </Flex>

      <Text
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="700"
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
          sx={{
            '& > div': {
              borderRadius: '999px',
            },
          }}
        />
      )}

      {subtitle ? (
        <Text fontSize="sm" fontWeight="500" lineHeight="1.3" mb={4}>
          {subtitle}
        </Text>
      ) : (
        <Box h="24px" />
      )}

      {actionLabel ? (
        <HStack spacing={2} color="brand.500">
          <Text fontSize="md" fontWeight="300">
            {actionLabel}
          </Text>
          <Icon as={FiArrowRight} boxSize={4} />
        </HStack>
      ) : null}
    </Box>
  );
}

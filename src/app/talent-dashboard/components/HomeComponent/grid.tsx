'use client';

import { Box, Icon, SimpleGrid, Text } from '@chakra-ui/react';

import { FaBullseye, FaMedal, FaTrophy } from 'react-icons/fa';
import { FiBriefcase, FiTrendingUp } from 'react-icons/fi';

export default function GridComponent() {
  return (
    <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={6}>
      <Box border="1px solid #E3E5E8" p="16px" borderRadius='10px'>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Icon color="#06AAC6" fontSize="22px">
            <FaBullseye />
          </Icon>

          <Icon color="#ABB2BA" fontSize="21px">
            <FiTrendingUp />
          </Icon>
        </Box>

        <Text color="#2E3338" fontSize="24px" fontWeight="bold" mt={6}>
          24
        </Text>

        <Text color="#ABB2BA" fontSize="14px" mt={2}>
          Active Challenges
        </Text>
      </Box>

      <Box border="1px solid #E3E5E8" p="16px" borderRadius='10px'>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Icon color="#FFA500" fontSize="22px">
            <FaTrophy />
          </Icon>

          <Icon color="#ABB2BA" fontSize="21px">
            <FiTrendingUp />
          </Icon>
        </Box>

        <Text color="#2E3338" fontSize="24px" fontWeight="bold" mt={6}>
          24
        </Text>

        <Text color="#ABB2BA" fontSize="14px" mt={2}>
          Completed Challenges
        </Text>
      </Box>

      <Box border="1px solid #E3E5E8" p="16px" borderRadius='10px'>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Icon color="#06C76D" fontSize="22px">
            <FaMedal />
          </Icon>

          <Icon color="#ABB2BA" fontSize="21px">
            <FiTrendingUp />
          </Icon>
        </Box>

        <Text color="#2E3338" fontSize="24px" fontWeight="bold" mt={6}>
          24
        </Text>

        <Text color="#ABB2BA" fontSize="14px" mt={2}>
          Badges Earned
        </Text>
      </Box>

      <Box border="1px solid #E3E5E8" p="16px" borderRadius='10px'>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Icon color="#1D347C" fontSize="22px">
            <FiBriefcase />
          </Icon>

          <Icon color="#ABB2BA" fontSize="21px">
            <FiTrendingUp />
          </Icon>
        </Box>

        <Text color="#990000" fontSize="24px" fontWeight="bold" mt={6}>
          10%
        </Text>

        <Text color="#ABB2BA" fontSize="14px" mt={2}>
          Portfolio Completion
        </Text>
      </Box>
    </SimpleGrid>
  );
}

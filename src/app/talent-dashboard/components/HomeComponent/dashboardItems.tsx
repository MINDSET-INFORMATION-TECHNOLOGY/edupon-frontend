'use client';

import { Box, Button, Text } from '@chakra-ui/react';

import GridComponent from './grid';
import AchievementComponent from './Achievement';
import OpportunitiesComponent from './opportunities';

export default function DashboardItems() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box gap="8px">
          <Text fontSize="24px" fontWeight="bold" color="#2E3338">
            Welcome Sarah 🎉
          </Text>
          <Text color="#ABB2BA" fontSize="12px">
            Let’s get started by setting up your profile.
          </Text>
        </Box>

        <Button fontSize="16px" borderRadius="12px">
          Join a Challenge
        </Button>
      </Box>

      <GridComponent />

      <AchievementComponent />

      <OpportunitiesComponent />
    </Box>
  );
}

'use client';

import { Box, Stack } from '@chakra-ui/react';
import DashboardSection from './dashboard-section';
import SectionHeading from './section-heading';
import RecentActivitiesList from './recent-activities-list';
import { activitySummaryCards, growthToolCards, recentActivityItems } from './dashboard-data';

export default function DashboardOverview() {
  return (
    <Box w="full">
      <Stack spacing={8}>
        <DashboardSection title="Your Activities" cards={activitySummaryCards} />

        <DashboardSection title="Growth Tools" cards={growthToolCards} />

        <Box>
          <SectionHeading title="Recent Activities" />
          <RecentActivitiesList items={recentActivityItems} />
        </Box>
      </Stack>
    </Box>
  );
}

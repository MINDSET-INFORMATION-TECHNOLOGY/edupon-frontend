'use client';

import { Box } from '@chakra-ui/react';
import RecentActivityRow from './recent-activity-row';
import { IconType } from 'react-icons';

type RecentActivityItem = {
  id: string;
  title: string;
  time: string;
  icon: IconType;
};

type RecentActivitiesListProps = {
  items: RecentActivityItem[];
};

export default function RecentActivitiesList({ items }: RecentActivitiesListProps) {
  return (
    <Box border="1px solid" borderColor="gray.200" borderRadius="12px" overflow="hidden" bg="white">
      {items.map((item, index) => (
        <RecentActivityRow
          key={item.id}
          title={item.title}
          time={item.time}
          icon={item.icon}
          isLast={index === items.length - 1}
        />
      ))}
    </Box>
  );
}

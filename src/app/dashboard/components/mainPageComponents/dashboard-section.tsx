'use client';

import { Box, Grid } from '@chakra-ui/react';
import SectionHeading from './section-heading';
import DashboardSummaryCard from './dashboard-summary-card';
import type { DashboardSectionCard } from './dashboard-types';

type DashboardSectionProps = {
  title: string;
  cards: DashboardSectionCard[];
};

export default function DashboardSection({ title, cards }: DashboardSectionProps) {
  return (
    <Box>
      <SectionHeading title={title} />

      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} gap={4}>
        {cards.map((card) => (
          <DashboardSummaryCard
            key={card.id}
            title={card.title}
            value={card.value}
            subtitle={card.subtitle}
            actionLabel={card.actionLabel}
            icon={card.icon}
            iconColor={card.iconColor}
            type={card.type}
            progressValue={card.progressValue}
          />
        ))}
      </Grid>
    </Box>
  );
}

import { IconType } from 'react-icons';

export type DashboardSectionCard = {
  id?: string;
  title: string;
  value: string;
  subtitle?: string;
  actionLabel?: string;
  icon: IconType;
  iconColor: string;
  progressValue?: number;
  type?: 'stat' | 'progress';
};

export type RecentActivityItem = {
  id: string;
  title: string;
  time: string;
  icon: IconType;
};

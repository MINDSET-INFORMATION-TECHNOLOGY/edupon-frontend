import { FiBookOpen, FiCalendar, FiFileText, FiTrendingUp } from 'react-icons/fi';
import { LuTrophy } from 'react-icons/lu';
import type { DashboardSectionCard, RecentActivityItem } from './dashboard-types';

export const activitySummaryCards: DashboardSectionCard[] = [
  {
    id: 'available-challenges',
    title: 'Available Challenges',
    value: '24',
    subtitle: '',
    actionLabel: 'View',
    icon: LuTrophy,
    iconColor: 'orange.400',
    type: 'stat',
  },
  {
    id: 'projects',
    title: 'Projects',
    value: '3/5',
    subtitle: '',
    actionLabel: 'Open',
    icon: FiFileText,
    iconColor: 'brand.500',
    type: 'progress',
    progressValue: 60,
  },
  {
    id: 'ongoing-courses',
    title: 'Ongoing Courses',
    value: '6',
    subtitle: 'Active Course In Progress',
    actionLabel: '',
    icon: FiBookOpen,
    iconColor: 'green.500',
    type: 'stat',
  },
];

export const growthToolCards: DashboardSectionCard[] = [
  {
    id: 'resources',
    title: 'Resources',
    value: '12',
    subtitle: 'Saved Resources',
    actionLabel: 'Browse',
    icon: FiBookOpen,
    iconColor: 'red.400',
    type: 'stat',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    value: '78%',
    subtitle: 'Engagement Rate',
    actionLabel: 'View Report',
    icon: FiTrendingUp,
    iconColor: 'brand.500',
    type: 'stat',
  },
  {
    id: 'upcoming-events',
    title: 'Upcoming Events',
    value: 'Mar 15, 2026',
    subtitle: 'Next scheduled events',
    actionLabel: 'Details',
    icon: FiCalendar,
    iconColor: 'gray.500',
    type: 'stat',
  },
];

export const recentActivityItems: RecentActivityItem[] = [
  {
    id: 'recent-1',
    title: 'Submitted research proposal for AI in Education',
    time: '2 hours ago',
    icon: FiFileText,
  },
  {
    id: 'recent-2',
    title: 'Submitted research proposal for AI in Education',
    time: '2 hours ago',
    icon: FiFileText,
  },
  {
    id: 'recent-3',
    title: 'Submitted research proposal for AI in Education',
    time: '2 hours ago',
    icon: FiFileText,
  },
  {
    id: 'recent-4',
    title: 'Submitted research proposal for AI in Education',
    time: '2 hours ago',
    icon: FiFileText,
  },
];

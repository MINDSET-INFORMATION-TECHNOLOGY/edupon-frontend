import {
  FiAward,
  FiBell,
  FiBookOpen,
  FiBriefcase,
  FiFolder,
  FiHome,
  FiSettings,
  FiTrendingUp,
} from 'react-icons/fi';
import { NavItemType } from './types';

export const navItems: NavItemType[] = [
  {
    label: 'Home',
    icon: FiHome,
    href: '/educator-dashboard',
  },
  {
    label: 'Projects',
    icon: FiFolder,
    children: [
      { label: 'Past Projects', href: '/educator-dashboard/projects/past-projects' },
      { label: 'Current Projects', href: '/educator-dashboard/projects/current-projects' },
      { label: 'Create Project', href: '/educator-dashboard/projects/create-project' },
    ],
  },
  {
    label: 'Challenges',
    icon: FiAward,
    children: [
      { label: 'Set up Challenges', href: '/educator-dashboard/challenges/setup-challenges' },
      { label: 'Ongoing Challenges', href: '/educator-dashboard/challenges/ongoing-challenges' },
      { label: 'Past Challenges', href: '/educator-dashboard/challenges/past-challenges' },
      { label: 'All Challenges', href: '/educator-dashboard/challenges/all-challenges' },
    ],
  },
  {
    label: 'Resources',
    icon: FiBookOpen,
    children: [
      { label: 'Resourcesa', href: '/educator-dashboard/resources/resourcesa' },
      { label: 'Resourcesb', href: '/educator-dashboard/resources/resourcesb' },
    ],
  },
  {
    label: 'Analytics',
    icon: FiTrendingUp,
    href: '/educator-dashboard/analytics',
  },
  {
    label: 'Portfolio',
    icon: FiBriefcase,
    href: '/educator-dashboard/portfolio',
  },
  {
    label: 'Notifications',
    icon: FiBell,
    href: '/educator-dashboard/notifications',
  },
  {
    label: 'Settings',
    icon: FiSettings,
    href: '/educator-dashboard/settings',
  },
];

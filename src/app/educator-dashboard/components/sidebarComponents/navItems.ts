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
    href: '/dashboard',
  },
  {
    label: 'Projects',
    icon: FiFolder,
    children: [
      { label: 'Past Projects', href: '/dashboard/projects/past-projects' },
      { label: 'Current Projects', href: '/dashboard/projects/current-projects' },
      { label: 'Create Project', href: '/dashboard/projects/create-project' },
    ],
  },
  {
    label: 'Challenges',
    icon: FiAward,
    children: [
      { label: 'Set up Challenges', href: '/dashboard/challenges/setup-challenges' },
      { label: 'Ongoing Challenges', href: '/dashboard/challenges/ongoing-challenges' },
      { label: 'Past Challenges', href: '/dashboard/challenges/past-challenges' },
      { label: 'All Challenges', href: '/dashboard/challenges/all-challenges' },
    ],
  },
  {
    label: 'Resources',
    icon: FiBookOpen,
    children: [
      { label: 'Resourcesa', href: '/dashboard/resources/resourcesa' },
      { label: 'Resourcesb', href: '/dashboard/resources/resourcesb' },
    ],
  },
  {
    label: 'Analytics',
    icon: FiTrendingUp,
    href: '/dashboard/analytics',
  },
  {
    label: 'Portfolio',
    icon: FiBriefcase,
    href: '/dashboard/portfolio',
  },
  {
    label: 'Notifications',
    icon: FiBell,
    href: '/dashboard/notifications',
  },
  {
    label: 'Settings',
    icon: FiSettings,
    href: '/dashboard/settings',
  },
];

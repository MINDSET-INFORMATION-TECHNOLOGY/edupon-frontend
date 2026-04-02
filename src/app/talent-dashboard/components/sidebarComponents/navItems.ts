import {
  // FiAward,
  FiBell,
  FiBookOpen,
  FiBriefcase,
  FiFolder,
  FiHome,
  FiSettings,
} from 'react-icons/fi';

import {
  FaTrophy,
  FaTasks,
  FaBullseye,
  FaMedal,
} from 'react-icons/fa'
import { NavItemType } from './types';

export const navItems: NavItemType[] = [
  {
    label: 'Home',
    icon: FiHome,
    href: '/talent-dashboard',
  },
  {
    label: 'Achievements',
    icon: FaTrophy,
    href: '/talent-dashboard/achievements',
  },
  {
    label: 'Badges',
    icon: FaMedal,
    href: '/talent-dashboard/badges',
  },
  {
    label: 'Projects',
    icon: FiFolder,
    href: '/talent-dashboard/projects',
  },
  {
    label: 'Activities',
    icon: FaTasks,
    href: '/talent-dashboard/activities',
  },
  {
    label: 'Challenges',
    icon: FaBullseye,
    href: '/talent-dashboard/challenges',
  },
  {
    label: 'Portfolio',
    icon: FiBriefcase,
    href: '/talent-dashboard/portfolio',
  },
  {
    label: 'Resources',
    icon: FiBookOpen,
    href: '/talent-dashboard/resources',
  },
  {
    label: 'Notifications',
    icon: FiBell,
    href: '/talent-dashboard/notifications',
  },
  {
    label: 'Settings',
    icon: FiSettings,
    href: '/talent-dashboard/settings',
  },
];

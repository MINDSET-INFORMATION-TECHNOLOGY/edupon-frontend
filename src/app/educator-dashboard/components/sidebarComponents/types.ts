import { IconType } from 'react-icons';

export type NavChild = {
  label: string;
  href: string;
};

export type NavItemType = {
  label: string;
  icon: IconType;
  href?: string;
  children?: NavChild[];
};

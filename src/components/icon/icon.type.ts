import {CSSProperties} from 'react';

export enum IconNames {
  ChevronDown = 'chevron-down',
  ChevronLeft = 'chevron-left',
  ChevronRight = 'chevron-right',
  ChevronUp = 'chevron-up',
  Embed = 'embed',
  Github = 'github',
  Linkedin = 'linkedin',
  Shuffle = 'shuffle',
  UserCheck = 'user-check',
  Users = 'users',
}

export interface IconProps {
  name: IconNames;
  color?: string;
  stroke?: string;
  className?: string;
  style?: CSSProperties;
  size?: number | string;
  fill?: string;

  onClick?: () => void;
}

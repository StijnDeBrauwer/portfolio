import { CSSProperties, ReactNode } from 'react';

export interface ButtonProps {
  style?: CSSProperties;
  className?: string;

  type?: 'button' | 'submit' | 'reset' | undefined;

  children?: ReactNode;
  onClick?: () => void;
}

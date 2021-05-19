import {CSSProperties, ReactNode} from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

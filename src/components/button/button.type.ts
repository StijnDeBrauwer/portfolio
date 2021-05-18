import {ReactNode} from 'react';
import {CSSProperties} from 'styled-components';

export interface ButtonProps {
  style?: CSSProperties;
  className?: string;

  type?: 'button' | 'submit' | 'reset' | undefined;

  children?: ReactNode;
  onClick?: () => void;
}

import {ReactNode} from 'react';
import {CSSProperties} from 'styled-components';

export interface ButtonProps {
  style?: CSSProperties;
  className?: string;

  children?: ReactNode;
  onClick: () => void;
}

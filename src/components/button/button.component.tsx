import React, { FC } from 'react';

import { StyledButton } from './button.style';
import { ButtonProps } from './button.type';

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type,
  className,
}: ButtonProps) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

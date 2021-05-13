import React, {FC} from 'react';

import {StyledButton} from './button.style';
import {ButtonProps} from './button.type';

const Button: FC<ButtonProps> = ({children, onClick}: ButtonProps) => {
  return <StyledButton onClick={onClick}> {children} </StyledButton>;
};

export default Button;

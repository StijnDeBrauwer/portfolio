import React, { FC } from 'react';

import { StyledCard } from './card.style';
import { CardProps } from './card.type';

const Card: FC<CardProps> = ({
  children,
  className,
  style,
  onClick,
}: CardProps) => {
  return (
    <StyledCard className={className} style={style} onClick={onClick}>
      {children}
    </StyledCard>
  );
};

export default Card;

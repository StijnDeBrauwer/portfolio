import React, {FC} from 'react';

import {ICONS} from './icon.const';
import {IconProps} from './icon.type';

const Icon: FC<IconProps> = ({
  color,
  name,
  size = '20px',
  className,
  style,
  stroke,
  fill,
  onClick,
}: IconProps) => {
  const IconComponent = ICONS[name];

  return (
    <IconComponent
      onClick={onClick}
      color={color}
      width={size}
      height={size}
      stroke={stroke}
      style={style}
      className={className}
      fill={fill}
      preserveAspectRatio="xMidYMid meet"
    />
  );
};

export default Icon;

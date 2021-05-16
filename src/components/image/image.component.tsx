import React, {FC} from 'react';

import {Images} from 'src/assets';

import {StyledImage} from './image.style';
import {ImageProps} from './image.type';

const Image: FC<ImageProps> = ({
  src,
  alt,
  size = 250,
  sizeUnit = 'px',
  backShadowColor = 'primary',
  hasBackShadow = true,
}: ImageProps) => {
  const img = Images[src];

  return (
    <StyledImage
      sizeUnit={sizeUnit}
      size={size}
      hasShadow={hasBackShadow}
      backShadowColor={backShadowColor}>
      <img src={img} alt={alt} />
    </StyledImage>
  );
};

export default Image;

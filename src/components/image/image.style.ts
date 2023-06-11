import styled from 'styled-components';

import { Colors } from 'src/assets';

export const StyledImage = styled.div<{
  size: number;
  sizeUnit: string;
  hasShadow?: boolean;
  backShadowColor: keyof typeof Colors;
}>`
  width: ${props => props.size}${props => props.sizeUnit};
  height: ${props => props.size}${props => props.sizeUnit};

  border-radius: ${props => props.size}${props => props.sizeUnit};
  overflow: hidden;

  box-shadow: ${props => `${props.size * 0.15}${props.sizeUnit}`} 0px 0px -2px ${props => Colors[props.backShadowColor]};

  display: flex;

  img {
    flex: 1;
  }
`;

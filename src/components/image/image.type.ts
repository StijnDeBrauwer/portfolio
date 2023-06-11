import { Colors, Images } from 'src/assets';

export interface ImageProps {
  src: keyof typeof Images;
  rounded?: boolean;
  backShadowColor?: keyof typeof Colors;
  hasBackShadow?: boolean;
  size?: number;
  sizeUnit?: 'px' | '%' | 'rem' | 'em' | 'vh' | 'vw';
  alt: string;
}

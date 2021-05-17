import {WithSectionProps} from 'src/hoc/withSection/withSection.type';

export enum HomeText {
  INTRO = '<h1>Hello</h1>',
  ME = 'My name Stijn De Brauwer \nI am a <b>frontend developer<b>',
}

export interface HomeSectionProps extends WithSectionProps {
  scrollToAbout: () => void;
}

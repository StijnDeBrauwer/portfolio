import { RefObject } from 'react';

export const scrollRefIntoViewport = (ref: RefObject<HTMLDivElement>): void => {
  ref.current?.scrollIntoView();
};

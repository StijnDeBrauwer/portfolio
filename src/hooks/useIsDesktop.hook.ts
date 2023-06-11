import { useMediaQuery } from '@mui/material';
import { Metrics } from 'src/assets';

export const useIsDesktop = (): boolean => {
  return useMediaQuery(Metrics.mediaQueries.tablet);
};

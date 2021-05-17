import {useMediaQuery} from '@material-ui/core';

import {Metrics} from 'src/assets';

export const useIsDesktop = (): boolean => {
  return useMediaQuery(Metrics.mediaQueries.tablet);
};

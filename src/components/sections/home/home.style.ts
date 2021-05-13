import styled from 'styled-components';
import {TransitionStatus} from 'react-transition-group';

import {Images, Metrics, Colors, Fonts} from 'src/assets';

export const StyledHomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url(${Images.homeMobile});
  background-color: ${Colors.white};

  background-size: 100% 100%;
  background-repeat: no-repeat;

  height: 100vh;
  width: 100vw;

  @media ${Metrics.mediaQueries.tablet} {
    background-image: url(${Images.homeDesktop}),
      linear-gradient(10deg, rgba(40, 48, 48, 1) 14%, rgba(57, 85, 91, 1) 100%);

    justify-content: flex-start;
  }
`;

export const WelcomeMessage = styled.p`
  text-align: center;
  
  font-size: ${Fonts.sizes.regular};
  padding: 0 21vw;

  white-space: pre-wrap;
  line-height: 1.5;

  @media ${Metrics.mediaQueries.mobileM} {
    font-size: ${Fonts.sizes.large};
  }

  @media ${Metrics.mediaQueries.mobileL} {
    font-size: ${Fonts.sizes.xlarge};
  }

  @media ${Metrics.mediaQueries.tablet} {
    text-align: left;

    padding: 30vh 0 0 28vw;


    color: ${Colors.white};
    font-size: ${Fonts.sizes.xxlarge};
  }

  b{
    color ${Colors.accent}
  }
`;

export const WelcomeMessageAnimation = styled(WelcomeMessage)<{
  state: TransitionStatus;
}>`
  transition: 1s;
  opacity: ${({state}) => (state === 'entered' ? 1 : 0)};
  display: ${({state}) =>
    state === 'exited' || state === 'exiting' ? 'none' : 'block'};
`;

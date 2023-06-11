import styled from 'styled-components';
import { TransitionStatus } from 'react-transition-group';

import { Images, Metrics, Colors, Fonts } from 'src/assets';

export const StyledHomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url(${Images.homeMobile});
  background-color: ${Colors.white};

  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media ${Metrics.mediaQueries.tablet} {
    background-image: url(${Images.homeDesktop}),
      linear-gradient(10deg, rgba(40, 48, 48, 1) 14%, rgba(57, 85, 91, 1) 100%);

    justify-content: flex-start;
  }
`;

export const WelcomeMessage = styled.p<{ state: TransitionStatus }>`
  text-align: center;
  
  font-size: ${Fonts.sizes.regular};
  padding: 0 20vw;

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

    padding: 25vh 0 0 28vw;


    color: ${Colors.white};
    font-size: ${Fonts.sizes.xxlarge};

    h1{
      color: ${Colors.white}
    }
  }


  b{
    color ${Colors.accent}
  }

  transition: 1s;
  opacity: ${({ state }) =>
    state === 'entered' || state === 'exiting' ? 1 : 0};
  display: ${({ state }) =>
    state === 'exited' || state === 'exiting' ? 'none' : 'block'};
`;

export const StyledIcon = styled.div<{
  state: TransitionStatus;
}>`
  position: absolute;
  bottom: 35vh;
  left: 0;
  right: 0;

  text-align: center;

  @media ${Metrics.mediaQueries.tablet} {
    display: none;
    animation: unset;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 1s;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};

  animation: MoveUpDown 1s linear 6s;

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 35vh;
    }
    50% {
      bottom: calc(35vh + 10px);
    }
  }
`;

export const StyledButtonContainer = styled.div<{
  state: TransitionStatus;
}>`
  margin: 1rem 0 0 28vw;
  transition: 1s;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
`;

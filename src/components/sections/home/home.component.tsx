import React, {useState, useEffect} from 'react';
import {Transition, TransitionGroup} from 'react-transition-group';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Icon from 'src/components/icon/icon.component';
import {IconNames} from 'src/components/icon/icon.type';
import {Colors, Metrics} from 'src/assets';
import Button from 'src/components/button/button.component';

import {
  StyledHomeSection,
  StyledIcon,
  WelcomeMessage,
  StyledButtonContainer,
} from './home.style';
import {HomeText} from './home.type';

const HomeSection = () => {
  const [text, setText] = useState<HomeText | undefined>();
  const isTablet = useMediaQuery(Metrics.mediaQueries.tablet);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = async (): Promise<void> => {
    return new Promise<void>((resolve) => {
      setText(HomeText.INTRO);
      resolve();
    }).then(() => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setText(HomeText.ME);
          resolve();
        }, 4000);
      });
    });
  };

  const navigateToNextPage = () => {};

  return (
    <StyledHomeSection>
      <TransitionGroup>
        <Transition
          key={text || 'key'}
          addEndListener={(node, done) => {
            // use the css transitionend event to mark the finish of a transition
            node.addEventListener('transitionend', done, false);
          }}
          timeout={1000}>
          {(state) => (
            <>
              {/* // state change: exited -> entering -> entered -> exiting -> exited */}
              <WelcomeMessage
                state={state}
                dangerouslySetInnerHTML={{
                  __html: text || '',
                }}
              />
            </>
          )}
        </Transition>
      </TransitionGroup>

      <Transition in={!!text && text === HomeText.ME} timeout={1000}>
        {(state) =>
          !isTablet ? (
            <StyledIcon state={state}>
              <Icon name={IconNames.ChevronDown} size={30} />
            </StyledIcon>
          ) : (
            <StyledButtonContainer state={state} onClick={navigateToNextPage}>
              <Button onClick={navigateToNextPage}>
                View my portfolio
                <Icon
                  name={IconNames.ChevronRight}
                  size={25}
                  color={Colors.white}
                  stroke={Colors.white}
                  fill={Colors.white}
                />
              </Button>
            </StyledButtonContainer>
          )
        }
      </Transition>
    </StyledHomeSection>
  );
};

export default HomeSection;

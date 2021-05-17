import React, {useState, useEffect, FC} from 'react';
import {Transition, TransitionGroup} from 'react-transition-group';

import Icon from 'src/components/icon/icon.component';
import {IconNames} from 'src/components/icon/icon.type';
import {Colors} from 'src/assets';
import Button from 'src/components/button/button.component';
import {useIsDesktop} from 'src/hooks/useIsDesktop.hook';
import {withSection} from 'src/hoc/withSection/withSection.hoc';

import {
  StyledHomeSection,
  StyledIcon,
  WelcomeMessage,
  StyledButtonContainer,
} from './home.style';
import {HomeSectionProps, HomeText} from './home.type';

const HomeSection: FC<HomeSectionProps> = ({
  scrollToAbout,
}: HomeSectionProps) => {
  const [text, setText] = useState<HomeText | undefined>();
  const isDesktop = useIsDesktop();

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
          !isDesktop ? (
            <StyledIcon state={state}>
              <Icon name={IconNames.ChevronDown} size={30} />
            </StyledIcon>
          ) : (
            <StyledButtonContainer state={state} onClick={scrollToAbout}>
              <Button onClick={scrollToAbout}>
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

export default withSection(HomeSection);

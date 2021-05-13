import React, {useState, useEffect} from 'react';
import {Transition, TransitionGroup} from 'react-transition-group';

import {StyledHomeSection, WelcomeMessageAnimation} from './home.style';
import {HomeText} from './home.type';

const HomeSection = () => {
  const [text, setText] = useState<HomeText | undefined>();

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
            // state change: exited -> entering -> entered -> exiting -> exited
            <WelcomeMessageAnimation
              state={state}
              dangerouslySetInnerHTML={{
                __html: text || '',
              }}></WelcomeMessageAnimation>
          )}
        </Transition>
      </TransitionGroup>
    </StyledHomeSection>
  );
};

export default HomeSection;

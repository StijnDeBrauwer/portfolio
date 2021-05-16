import React from 'react';
import {useMediaQuery} from '@material-ui/core';

import Image from 'src/components/image/image.component';
import {Metrics} from 'src/assets';

import './about.style.scss';

const AboutSection = () => {
  const isTablet = useMediaQuery(Metrics.mediaQueries.tablet);

  return (
    <section className={'about'}>
      <div className={'about__image'}>
        <Image src={'me'} alt="me" size={isTablet ? 25 : 60} sizeUnit={'vw'} />
      </div>
      <div className={'about__text'}>
        <h1>About me</h1>
        <p>Hi stranger 👋,</p>
        <p>
          My name is Stijn De Brauwer and I am a{' '}
          <span className="text__accent">frontend developer.</span>
        </p>
        <p>
          I could say my second laguage besides dutch is{' '}
          <span className="text__accent">Javascript </span> (preferably
          Typescript).
        </p>
        <p>
          Eagerness to learn is very important to me because of the fast
          evolving market and the wide range of javascript libraries/frameworks.
          But I prefer to work with <span className="text__accent">React</span>.
        </p>
        <p>
          I am real <span className="text__accent">teamplayer</span>, that is
          why a friendly work environment is very important to me.
        </p>
        <p>
          “No one can whistle a symphony. It takes a whole orchestra to play
          it.”
          <span className="text__cite">H.E. Luccock</span>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

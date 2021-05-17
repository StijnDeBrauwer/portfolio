import React, {useRef, useState} from 'react';

import HomeSection from 'src/components/sections/home/home.component';
import Hamburger from 'src/components/navigation/hamburger/hamburger.component';
import AboutSection from 'src/components/sections/about/about.component';
import SkillsSection from 'src/components/sections/skills/skills.component';

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const home = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    about.current?.scrollIntoView();
  };

  return (
    <div>
      <Hamburger open={open} setOpen={setOpen} />
      <HomeSection ref={home} scrollToAbout={scrollToAbout} />
      <AboutSection ref={about} />
      <SkillsSection ref={skills} />
    </div>
  );
};

export default HomePage;

import React, {useContext, useEffect, useRef, useState} from 'react';

import HomeSection from 'src/components/sections/home/home.component';
import Hamburger from 'src/components/navigation/hamburger/hamburger.component';
import AboutSection from 'src/components/sections/about/about.component';
import SkillsSection from 'src/components/sections/skills/skills.component';
import {ActiveSectionContext} from 'src/context/activeSection.context';
import {PortfolioRoutes} from 'src/config/routes.config';

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const home = useRef<HTMLDivElement>(null);

  const about = useRef<HTMLDivElement>(null);

  const skills = useRef<HTMLDivElement>(null);

  const {setActiveSection} = useContext(ActiveSectionContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scroll = window.pageYOffset;

    const yPosAbout: number | null =
      (about.current && about.current.offsetTop) || 0;

    const yPosSkills: number | null =
      (skills.current && skills.current.offsetTop) || 0;

    if (scroll < yPosAbout) {
      setActiveSection(PortfolioRoutes.HOME);
    } else if (scroll < yPosSkills) {
      setActiveSection(PortfolioRoutes.ABOUT);
    } else {
      setActiveSection(PortfolioRoutes.SKILLS);
    }
  };

  const scrollToHome = () => {
    home.current?.scrollIntoView();
  };

  const scrollToAbout = () => {
    about.current?.scrollIntoView();
  };

  const scrollToSkills = () => {
    skills.current?.scrollIntoView();
  };

  const handleMenuClose = (open: boolean, route?: PortfolioRoutes) => {
    setOpen(open);
    if (route) {
      switch (route) {
        case PortfolioRoutes.HOME:
          scrollToHome();
          break;
        case PortfolioRoutes.ABOUT:
          scrollToAbout();
          break;
        case PortfolioRoutes.SKILLS:
          scrollToSkills();
          break;
      }
    }
  };

  return (
    <div>
      <Hamburger open={open} setOpen={handleMenuClose} />
      <HomeSection ref={home} scrollToAbout={scrollToAbout} />
      <AboutSection ref={about} />
      <SkillsSection ref={skills} />
    </div>
  );
};

export default HomePage;

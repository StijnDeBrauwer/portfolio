import React, { useContext, useEffect, useRef, useState } from 'react';

import HomeSection from 'src/components/sections/home/home.component';
import Hamburger from 'src/components/navigation/hamburger/hamburger.component';
import AboutSection from 'src/components/sections/about/about.component';
import SkillsSection from 'src/components/sections/skills/skills.component';
import ProjectSection from 'src/components/sections/projects/projects.component';
import CompetencesSection from 'src/components/sections/competences/competences.component';
import ContactSection from 'src/components/sections/contact/contact.component';
import ResumeSection from 'src/components/sections/resume/resume.component';
import { ActiveSectionContext } from 'src/context/activeSection.context';
import { PortfolioRoutes } from 'src/config/routes.config';
import { scrollRefIntoViewport } from 'src/helpers/scroll.helper';

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const home = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const competences = useRef<HTMLDivElement>(null);
  const resume = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const { setActiveSection } = useContext(ActiveSectionContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scroll = window.pageYOffset + window.innerWidth / 3;

    const yPosAbout = (about.current && about.current.offsetTop) || 0;
    const yPosSkills = (skills.current && skills.current.offsetTop) || 0;
    const yPosProjects = (projects.current && projects.current.offsetTop) || 0;
    const yPosCompetences =
      (competences.current && competences.current.offsetTop) || 0;
    const yPosResume = (resume.current && resume.current.offsetTop) || 0;
    const yPosContact = (contact.current && contact.current.offsetTop) || 0;

    if (scroll < yPosAbout) {
      setActiveSection(PortfolioRoutes.HOME);
    } else if (scroll < yPosSkills) {
      setActiveSection(PortfolioRoutes.ABOUT);
    } else if (scroll < yPosProjects) {
      setActiveSection(PortfolioRoutes.SKILLS);
    } else if (scroll < yPosCompetences) {
      setActiveSection(PortfolioRoutes.PROJECTS);
    } else if (scroll < yPosResume) {
      setActiveSection(PortfolioRoutes.COMPETENCES);
    } else if (scroll < yPosContact) {
      setActiveSection(PortfolioRoutes.RESUME);
    } else {
      setActiveSection(PortfolioRoutes.CONTACT);
    }
  };

  const handleMenuClose = (open: boolean, route?: PortfolioRoutes) => {
    setOpen(open);
    if (route) {
      switch (route) {
        case PortfolioRoutes.HOME:
          scrollRefIntoViewport(home);
          break;
        case PortfolioRoutes.ABOUT:
          scrollRefIntoViewport(about);
          break;
        case PortfolioRoutes.SKILLS:
          scrollRefIntoViewport(skills);
          break;
        case PortfolioRoutes.PROJECTS:
          scrollRefIntoViewport(projects);
          break;
        case PortfolioRoutes.COMPETENCES:
          scrollRefIntoViewport(competences);
          break;
        case PortfolioRoutes.RESUME:
          scrollRefIntoViewport(resume);
          break;
        case PortfolioRoutes.CONTACT:
          scrollRefIntoViewport(contact);
          break;
      }
    }
  };

  return (
    <div>
      <Hamburger open={open} setOpen={handleMenuClose} />
      <HomeSection
        ref={home}
        scrollToAbout={() => scrollRefIntoViewport(about)}
      />
      <AboutSection ref={about} />
      <SkillsSection ref={skills} />
      <ProjectSection ref={projects} />
      <CompetencesSection ref={competences} />
      <ResumeSection ref={resume} />
      <ContactSection ref={contact} />
    </div>
  );
};

export default HomePage;

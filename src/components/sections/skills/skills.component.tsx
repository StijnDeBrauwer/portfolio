import React, { useContext, useEffect, useState } from 'react';

import BarChart from 'src/components/barChart/barChart.component';
import { withSection } from 'src/hoc/withSection/withSection.hoc';
import { PortfolioRoutes } from 'src/config/routes.config';
import { ActiveSectionContext } from 'src/context/activeSection.context';

import './skills.style.scss';

const SkillsSection = () => {
  const { activeSection } = useContext(ActiveSectionContext);

  const [initedInViewport, setInitedInViewport] = useState<boolean>();

  useEffect(() => {
    setInitedInViewport(activeSection === PortfolioRoutes.SKILLS);
  }, [activeSection]);

  return (
    <section className="skills">
      <div className="skills_description">
        <h1>Skills</h1>
        <p>
          In my professional career, I had the chance to work with several
          frameworks and libraries.{' '}
        </p>

        <p>
          I love React/React Native and would love to gain more experience in
          this technology! That’s why I have a subscription to a lot of blogs.
        </p>

        <p>
          Angular is a very mature framework. I have mastered the basics, but my
          focus lies in React.
        </p>

        <p>
          I had the chance to work on a NodeJS project. But that’s a while ago.
          I could not describe myself as a backend developer. But this is on my
          to-do list. I would love to deepdive into the world of Backend
          development!
        </p>

        <p>
          Swift/Objective C is not completely an unknown area for me. I try to
          extend my knowledge in this field in my spare time. But it comes handy
          in React Native development.{' '}
        </p>
      </div>
      <div className="skills_chart">
        <div className="chart__item">
          <h2>Typescript</h2>
          <BarChart percentage={initedInViewport ? 100 : 0} />
        </div>

        <div className="chart__item">
          <h2>React</h2>
          <BarChart percentage={initedInViewport ? 90 : 0} />
        </div>

        <div className="chart__item">
          <h2>Angular</h2>
          <BarChart percentage={initedInViewport ? 90 : 0} />
        </div>

        <div className="chart__item">
          <h2>NodeJS</h2>
          <BarChart percentage={initedInViewport ? 50 : 0} />
        </div>

        <div className="chart__item">
          <h2>Swift/Objective C</h2>
          <BarChart percentage={initedInViewport ? 30 : 0} />
        </div>
      </div>
    </section>
  );
};

export default withSection(SkillsSection);

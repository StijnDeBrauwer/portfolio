import React from 'react';

import BarChart from 'src/components/barChart/barChart.component';

import './skills.style.scss';

const SkillsSection = () => {
  return (
    <section className="skills">
      <div className="skills_description">
        <h1>Skills</h1>
        <p>
          In my professional carrier I had the chance to work with several
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
          Swift/Objective C is not completly an unkown area for me. I try to
          extend my knowledge in this field in my spare time. But it comes handy
          in React Native experience.{' '}
        </p>

        <p>
          I had the chance to work on a NodeJS project. But that’s a while ago.
          I could not describe myself as a backend developer. But this is on my
          todo list.
        </p>
      </div>
      <div className="skills_chart">
        <div className="chart__item">
          <h2>React/React Native</h2>
          <BarChart percentage={80} />
        </div>

        <div className="chart__item">
          <h2>Angular</h2>
          <BarChart percentage={60} />
        </div>

        <div className="chart__item">
          <h2>Swift/Objective C</h2>
          <BarChart percentage={40} />
        </div>

        <div className="chart__item">
          <h2>Swift/Objective C</h2>
          <BarChart percentage={20} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

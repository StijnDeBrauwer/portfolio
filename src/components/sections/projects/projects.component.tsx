import React from 'react';

import {withSection} from 'src/hoc/withSection/withSection.hoc';

import './projects.style.scss';

const ProjectsSection = () => {
  return (
    <section className={'projects'}>
      <h1>Projects</h1>

      <div className="projects__container">
        <div className="container__item">NSCP</div>
        <div className="container__item">B-prints</div>
        <div className="container__item">Portfolio</div>
        <div className="container__item">Table tennis PWA</div>
        <div className="container__item">OP2C</div>
        <div className="container__item"></div>
      </div>
    </section>
  );
};

export default withSection(ProjectsSection);

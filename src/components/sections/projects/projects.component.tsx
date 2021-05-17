import React from 'react';

import {withSection} from 'src/hoc/withSection/withSection.hoc';

import './projects.style.scss';

const ProjectsSection = () => {
  return (
    <section className={'projects'}>
      <h1>Projects</h1>
    </section>
  );
};

export default withSection(ProjectsSection);

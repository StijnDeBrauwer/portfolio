import React from 'react';

import {withSection} from 'src/hoc/withSection/withSection.hoc';

import './resume.style.scss';

const ResumeSection = () => {
  return (
    <section className="resume">
      <h1>Resume</h1>
    </section>
  );
};

export default withSection(ResumeSection);

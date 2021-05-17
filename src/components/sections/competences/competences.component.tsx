import React from 'react';

import {withSection} from 'src/hoc/withSection/withSection.hoc';

import './competences.style.scss';

const CompetencesSection = () => {
  return (
    <section className={'competences'}>
      <h1>Competences</h1>
    </section>
  );
};

export default withSection(CompetencesSection);

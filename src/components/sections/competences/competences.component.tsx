import React, { useState } from 'react';

import { withSection } from 'src/hoc/withSection/withSection.hoc';
import Card from 'src/components/card/card.component';
import Icon from 'src/components/icon/icon.component';
import { IconNames } from 'src/components/icon/icon.type';

import './competences.style.scss';
import { Competence, INITIAL_COMPETENCES } from './competences.type';

const CompetencesSection = () => {
  const [competences, setCompetences] =
    useState<Competence[]>(INITIAL_COMPETENCES);

  const toggleCard = (i: number) => {
    const currentCompetences = competences;

    const newCompetence: Competence = {
      ...currentCompetences[i],
      detailIsShowing: !currentCompetences[i].detailIsShowing,
    };
    currentCompetences[i] = newCompetence;

    setCompetences([...currentCompetences]);
  };

  const renderCard = (competence: Competence, i: number) => {
    const detailIsShowing = competences[i].detailIsShowing;

    return (
      <Card
        key={competence.title}
        className="card "
        onClick={() => toggleCard(i)}
      >
        {!detailIsShowing ? (
          <div className="card__header">
            <Icon name={competence.icon as IconNames} />
            <h2>{competence.title}</h2>
          </div>
        ) : null}

        {detailIsShowing ? (
          <div className="card__content">{competence.description}</div>
        ) : null}
      </Card>
    );
  };

  return (
    <section className={'competences'}>
      <h1>Competences</h1>

      <p className="intro">Click to know more about each competence</p>

      <div className="card-container">
        {competences?.map((c, i) => renderCard(c, i))}
      </div>
    </section>
  );
};

export default withSection(CompetencesSection);

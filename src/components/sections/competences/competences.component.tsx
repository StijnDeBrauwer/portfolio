import React from 'react';

import {withSection} from 'src/hoc/withSection/withSection.hoc';
import Card from 'src/components/card/card.component';
import Icon from 'src/components/icon/icon.component';
import {IconNames} from 'src/components/icon/icon.type';

import './competences.style.scss';

const CompetencesSection = () => {
  return (
    <section className={'competences'}>
      <h1>Competences</h1>

      <div className="card-container">
        <div>
          <Card className="card">
            <div className="card__header">
              <Icon name={IconNames.Users} />
              <h2>Team player</h2>
            </div>
            <div className="card__content">
              I love to work with others and share a common goal. Helping others
              is in my nature.
            </div>
          </Card>
        </div>

        <Card className="card">
          <div className="card__header">
            <Icon name={IconNames.Shuffle} />
            <h2>Flexible</h2>
          </div>
          <div className="card__content">
            I can describe myself as flexible in time, scope and in a team.
          </div>
        </Card>

        <Card className="card">
          <div className="card__header">
            <Icon name={IconNames.Embed} />
            <h2>Eager to learn</h2>
          </div>
          <div className="card__content">
            Programming is a passion of mine. I love to read blogs and keep
            myself posted with the latest best practices both in my free time as
            in my professional career.
          </div>
        </Card>

        <Card className="card">
          <div className="card__header">
            <Icon name={IconNames.UserCheck} />
            <h2>Customer oriented</h2>
          </div>
          <div className="card__content">
            I love to work with others and share a common goal. Helping others
            is in my nature.
          </div>
        </Card>
      </div>
    </section>
  );
};

export default withSection(CompetencesSection);

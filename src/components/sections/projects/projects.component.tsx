import React from 'react';
import { withSection } from 'src/hoc/withSection/withSection.hoc';

import './projects.style.scss';

const ProjectsSection = () => {
  const navigateToUrl = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className={'projects'}>
      <h1>Projects</h1>

      <div className="projects__container">
        <div
          className="container__item"
          onClick={() => navigateToUrl('https://www.newcrownservice.com/home')}
        >
          <div className="text dark">NCSP</div>
          <div className="overlay">
            <div className="text">NCSP</div>
          </div>
        </div>
        <div
          className="container__item"
          onClick={() => navigateToUrl('https://www.b-prints.be/#/home')}
        >
          <div className="text dark">B-Prints</div>
          <div className="overlay">
            <div className="text">B-Prints</div>
          </div>
        </div>
        <div
          className="container__item"
          onClick={() =>
            navigateToUrl('https://github.com/StijnDeBrauwer/PersonalWebsite')
          }
        >
          <div className="text dark">Portfolio</div>
          <div className="overlay">
            <div className="text">Portfolio</div>
          </div>
        </div>
        <div
          className="container__item"
          onClick={() =>
            navigateToUrl('https://stijndebrauwer.github.io/op2c/#/home')
          }
        >
          <div className="text dark">OP2C</div>
          <div className="overlay">
            <div className="text">OP2C</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withSection(ProjectsSection);

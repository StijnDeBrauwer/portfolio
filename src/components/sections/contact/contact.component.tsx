import React from 'react';

import {withSection} from 'src/hoc/withSection/withSection.hoc';

import './contact.style.scss';

const ContactSection = () => {
  return (
    <section className="contact">
      <h1>Contact</h1>
    </section>
  );
};

export default withSection(ContactSection);

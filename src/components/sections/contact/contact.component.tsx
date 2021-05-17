import React from 'react';

import {withSection} from 'src/hoc/withSection/withSection.hoc';
import {ReactComponent as Triangle} from 'src/assets/vectors/triangle.svg';
import Footer from 'src/components/footer/footer.component';

import './contact.style.scss';

const ContactSection = () => {
  return (
    <section className="contact">
      <Triangle className="contact__svg" />
      <div className="contact__content">
        <h1>Contact</h1>
      </div>

      <Footer />
    </section>
  );
};

export default withSection(ContactSection);

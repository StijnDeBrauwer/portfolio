/* eslint-disable react/display-name */
import React, {forwardRef} from 'react';

import {ReactComponent as Triangle} from 'src/assets/vectors/triangle.svg';
import Footer from 'src/components/footer/footer.component';

import './contact.style.scss';

// eslint-disable-next-line no-empty-pattern
const ContactSection = forwardRef<any, any>(({}, ref) => {
  return (
    <div ref={ref} className="contact">
      <Triangle className="contact__svg" />
      <div className="contact__content">
        <h1>Contact</h1>
      </div>

      <Footer />
    </div>
  );
});

export default ContactSection;

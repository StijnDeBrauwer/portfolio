import React, { forwardRef } from 'react';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';

import { ReactComponent as Triangle } from 'src/assets/vectors/triangle.svg';
import Footer from 'src/components/footer/footer.component';
import Icon from 'src/components/icon/icon.component';
import { IconNames } from 'src/components/icon/icon.type';
import Button from 'src/components/button/button.component';

import './contact.style.scss';

const ContactSection = forwardRef<any, any>(({}, ref) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      subject: '',
      message: '',
    },
    validate: values => {
      const errors: Record<string, string> = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.subject) {
        errors.subject = 'Required';
      }
      if (!values.message) {
        errors.message = 'Required';
      }

      return errors;
    },
    onSubmit: values => {
      const { subject, message } = values;
      window.open(
        `mailto:db_stijn@hotmail.com?subject=${subject}&body=${encodeURIComponent(
          message
        )}`
      );
    },
  });

  const navigateToGithub = () => {
    window.open('https://github.com/StijnDeBrauwer', '_blank');
  };

  const navigateToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/stijn-de-brauwer', '_blank');
  };

  return (
    <div ref={ref} className="contact">
      <Triangle className="contact__svg" />
      <div className="contact__content">
        <h1>Contact</h1>

        <form
          onSubmit={formik.handleSubmit}
          method="post"
          encType="multipart/form-data"
        >
          <div className="form__content">
            <div className="input-item">
              <TextField
                id="email"
                type="email"
                label="E-mail"
                InputProps={{ disableUnderline: true }}
                variant="standard"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={!!formik.errors.email}
              />
            </div>
            <div className="input-item">
              <TextField
                id="subject"
                label="Subject"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                error={!!formik.errors.subject}
              />
            </div>
            <div className="input-item">
              <TextField
                InputProps={{ disableUnderline: true }}
                id="message"
                multiline
                label="Message"
                rows={3}
                maxRows={5}
                variant="standard"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                error={!!formik.errors.message}
              />
            </div>
          </div>

          <Button className="form__button" type="submit">
            Submit
          </Button>
        </form>

        <div className="content__social-media">
          <Icon name={IconNames.Linkedin} onClick={navigateToLinkedIn} />{' '}
          <Icon name={IconNames.Github} onClick={navigateToGithub} />
        </div>
      </div>

      <Footer />
    </div>
  );
});

export default ContactSection;

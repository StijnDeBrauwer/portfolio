import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import {withSection} from 'src/hoc/withSection/withSection.hoc';

import './resume.style.scss';

const ResumeSection = () => {
  return (
    <section className="resume">
      <h1>Resume</h1>

      <Timeline className="timeline" align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="dot">2015</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Graduated from High School (Accountancy-IT)
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="dot">2018</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Bachelor degree in Computer Science{' '}
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="dot">2018</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Started my professional career in Endare: Your inovation partner
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="dot">2019</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Kickoff personal project NCSP</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="dot">2020</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Kickoff personal project B-prints</TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

export default withSection(ResumeSection);

import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { withSection } from 'src/hoc/withSection/withSection.hoc';

import './resume.style.scss';

const ResumeSection = () => {
  return (
    <section className="resume">
      <h1>Resume</h1>

      <Timeline className="timeline">
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

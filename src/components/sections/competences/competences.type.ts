import { IconNames } from 'src/components/icon/icon.type';

export type Competence = {
  icon: string;
  title: string;
  description: string;
  detailIsShowing: boolean;
};

export const INITIAL_COMPETENCES: Competence[] = [
  {
    icon: IconNames.Users,
    title: 'Collaborative',
    description:
      'I love to work with others and share a common goal. Helping others is in my nature.',
    detailIsShowing: false,
  },
  {
    icon: IconNames.Shuffle,
    title: 'Flexible',
    description: `I can describe myself as flexible in time, scope and in a team. In
    my short' technical career, I've proven to be very
    flexible in projects.`,
    detailIsShowing: false,
  },
  {
    icon: IconNames.Embed,
    title: 'Eager to learn',
    description: `Programming is a passion of mine. I love to read blogs and keep
    myself posted with the latest best practices both in my spare time
    as in my professional career. Becoming a Full Stack Developer is a significant milestone on my professional journey!`,
    detailIsShowing: false,
  },
  {
    icon: IconNames.UserCheck,
    title: 'Reliable',
    description: `I am very conscientious as a person. Whenever I am given a task, I always strive to perform it to the best of my abilities. An example of this is my deep commitment to my table tennis club. All players can rely on me!`,
    detailIsShowing: false,
  },
];

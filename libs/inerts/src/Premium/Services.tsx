import {
  FirstServiceQuark,
  SecondServiceQuark,
  ThirdServiceQuark,
  FourthServiceQuark,
} from '@spotify-clone/libs/quarks';

export type TServices = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const servicesProvided: TServices[] = [
  {
    icon: <FirstServiceQuark />,
    title: 'Ad-free music listening',
    description: 'Enjoy uninterrupted music.',
  },
  {
    icon: <SecondServiceQuark />,
    title: 'Offline playback',
    description: 'Save your data by listening offline.',
  },
  {
    icon: <ThirdServiceQuark />,
    title: 'Play everywhere',
    description: 'Listen on your speakers, TV, and other favourite devices.',
  },
  {
    icon: <FourthServiceQuark />,
    title: 'Pay your way',
    description: 'Prepay with Paytm, UPI, and more.',
  },
];

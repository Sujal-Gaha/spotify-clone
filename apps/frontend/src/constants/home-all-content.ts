import { TCardContainer } from '../types';
import {
  featuredChartsContent,
  moodContent,
  freshNewMusicContent,
  recentContent,
  throwbackContent,
  todaysBiggestHitsContent,
  trySomethingElseContent,
  recommendationContent,
} from './index';

export const homeAllContent: TCardContainer[] = [
  {
    id: 0,
    mainTitle: 'More like The Weeknd',
    content: recommendationContent,
  },
  {
    id: 1,
    mainTitle: 'Recently Played',
    content: recentContent,
  },
  {
    id: 2,
    mainTitle: 'Throwback',
    content: throwbackContent,
  },
  {
    id: 3,
    mainTitle: "Today's biggest hits",
    content: todaysBiggestHitsContent,
  },
  {
    id: 4,
    mainTitle: 'Try something else',
    content: trySomethingElseContent,
  },
  {
    id: 5,
    mainTitle: 'Featured Charts',
    content: featuredChartsContent,
  },
  {
    id: 6,
    mainTitle: 'Mood',
    content: moodContent,
  },
  {
    id: 7,
    mainTitle: 'Fresh New Music',
    content: freshNewMusicContent,
  },
];

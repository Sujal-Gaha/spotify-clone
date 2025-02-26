import { TCardContainer } from '@spotify-clone/libs/compositions';
import { recommendationContent } from './recommendations';
import { recentContent } from './recents';
import { throwbackContent } from './throwback';
import { todaysBiggestHitsContent } from './todays-biggest-hits';
import { trySomethingElseContent } from './try-something-else';
import { featuredChartsContent } from './featured-charts';
import { moodContent } from './moods';
import { freshNewMusicContent } from './fresh-new-music';

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

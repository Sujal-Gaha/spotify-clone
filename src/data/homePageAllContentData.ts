import THomePageAllContent from "@/types/THomePageAllContent";
import recommendationContent from "./recommendations";
import recentContent from "./recents";
import throwbackContent from "./throwback";
import todaysBiggestHitsContent from "./todaysBiggsetHits";
import trySomethingElseContent from "./trySomethingElse";
import featuredChartsContent from "./featuredCharts";
import moodContent from "./moods";
import freshNewMusicContent from "./freshNewMusic";

const homePageAllContentData: THomePageAllContent[] = [
  {
    mainId: 0,
    mainTitle: "More like The Weeknd",
    content: recommendationContent,
  },
  {
    mainId: 1,
    mainTitle: "Recently Played",
    content: recentContent,
  },
  {
    mainId: 2,
    mainTitle: "Throwback",
    content: throwbackContent,
  },
  {
    mainId: 3,
    mainTitle: "Today's biggest hits",
    content: todaysBiggestHitsContent,
  },
  {
    mainId: 4,
    mainTitle: "Try something else",
    content: trySomethingElseContent,
  },
  {
    mainId: 5,
    mainTitle: "Featured Charts",
    content: featuredChartsContent,
  },
  {
    mainId: 6,
    mainTitle: "Mood",
    content: moodContent,
  },
  {
    mainId: 7,
    mainTitle: "Fresh New Music",
    content: freshNewMusicContent,
  },
];

export default homePageAllContentData;

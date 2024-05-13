import HomePageRecommendation from "./HomePageRecommendation";
import MoodCardContainer from "./MoodCardContainer";
import RecentlyPlayed from "./RecentlyPlayed";
import TodayBiggestHits from "./TodaysBiggestHits";

const HomePageContainer = () => {
  return (
    <div className="h-full w-full py-0 px-6 flex flex-col gap-8 overflow-y-auto">
      <HomePageRecommendation />
      <RecentlyPlayed />
      <TodayBiggestHits />
      <MoodCardContainer />
    </div>
  );
};

export default HomePageContainer;

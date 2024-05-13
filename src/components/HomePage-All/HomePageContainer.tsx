import FeaturedCharts from "./FeaturedCharts";
import HomePageRecommendation from "./HomePageRecommendation";
import MoodCardContainer from "./MoodCardContainer";
import RecentlyPlayed from "./RecentlyPlayed";
import Throwback from "./Throwback";
import TodayBiggestHits from "./TodaysBiggestHits";
import TrySomethingElse from "./TrySomethingElse";

const HomePageContainer = () => {
  return (
    <div className="h-full w-full py-0 px-6 flex flex-col gap-8 overflow-y-auto">
      <HomePageRecommendation />
      <RecentlyPlayed />
      <Throwback />
      <TodayBiggestHits />
      <TrySomethingElse />
      <FeaturedCharts />
      <MoodCardContainer />
    </div>
  );
};

export default HomePageContainer;

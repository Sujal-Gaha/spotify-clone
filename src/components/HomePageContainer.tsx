import HomePageRecommendation from "./HomePageRecommendation";
import MoodCardContainer from "./MoodCardContainer";
import RecentlyPlayed from "./RecentlyPlayed";

const HomePageContainer = () => {
  return (
    <div className="h-full w-full py-0 px-6 flex flex-col gap-8 overflow-y-auto">
      <HomePageRecommendation />
      <RecentlyPlayed />
      <MoodCardContainer />
    </div>
  );
};

export default HomePageContainer;

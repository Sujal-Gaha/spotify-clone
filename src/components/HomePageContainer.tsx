import HomePageRecommendation from "./HomePageRecommendation";
import RecentlyPlayed from "./RecentlyPlayed";

const HomePageContainer = () => {
  return (
    <div className="h-full w-full py-0 px-6 flex flex-col gap-2">
      <HomePageRecommendation />
      <RecentlyPlayed />
    </div>
  );
};

export default HomePageContainer;

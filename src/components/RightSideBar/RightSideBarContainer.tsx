import NextInQueue from "./NextInQueue";
import Merch from "./Merch";
import Credits from "./Credits";
import ArtistCard from "./ArtistCard";
import RecommendationCard from "./RecommendationCard";
import RecommendationArtist from "./RecommendationArtist";

const RightSideBarContainer = () => {
  return (
    <div className="w-[420px] h-[90vh] bg-sectionColour flex flex-col pt-4 rounded-lg">
      <RecommendationArtist />
      <div className="h-[920px] w-[420px] pt-0 px-4 pb-4 flex flex-col items-center gap-6 overflow-x-hidden overflow-y-auto">
        <RecommendationCard />
        <div className="flex flex-col w-[388px] gap-4">
          <ArtistCard />
          <Credits />
          <Merch />
          <NextInQueue />
        </div>
      </div>
    </div>
  );
};

export default RightSideBarContainer;

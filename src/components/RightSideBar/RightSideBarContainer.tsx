import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import NextInQueue from "./NextInQueue";
import Merch from "./Merch";
import Credits from "./Credits";
import ArtistCard from "./ArtistCard";
import RecommendationCard from "./RecommendationCard";
import RecommendationArtist from "./RecommendationArtist";

const RightSideBarContainer = () => {
  return (
    <div className="w-[420px] h-full bg-sectionColour rounded-lg overflow-x-hidden overflow-y-auto">
      <RecommendationArtist />
      <div className="h-[920px] w-[420px] pt-0 px-4 pb-2 flex flex-col items-center gap-6">
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

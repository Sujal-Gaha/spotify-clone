import NextInQueue from './NextInQueue';
import Merch from './Merch';
import Credits from './Credits';
import ArtistCard from './ArtistCard';
import RecommendationCard from './RecommendationCard';


const RecommendationArtist = () => {
     const { closeRightSidebar } = useRightSidebarStore();
    
      return (
        <div className="w-[420px] h-10 px-4 py-0 flex justify-between items-center">
          <div>
            <p className="text-white font-semibold">The Weeknd Mix</p>
          </div>
          <div className="text-lessFocusColour w-12 flex justify-between text-xl">
            <BsThreeDots />
            <IoMdClose
              className="hover:text-white cursor-pointer duration-500 ease-in-out"
              onClick={closeRightSidebar}
            />
          </div>
        </div>
      );
}

export const RightSidebar = () => {
  return (
    <div className="w-[420px] h-[90vh] bg-sectionColour flex flex-col pt-4 rounded-lg">
      <RecommendationArtist />
      <div className="h-[920px] w-[420px] pt-0 px-4 pb-4 flex flex-col items-center gap-6 overflow-x-hidden overflow-y-auto no-scrollbar">
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

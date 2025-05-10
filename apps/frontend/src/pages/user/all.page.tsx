import { homeAllContent } from '@spotify-clone/libs/inerts';
import { Card } from '@spotify-clone/libs/compounds';
import { Playlistbar, Footer } from '@spotify-clone/libs/crystals';

export const AllPage = () => {
  console.log("This is all page")
  return (
    <div className="flex flex-col overflow-y-auto px-5 w-full pt-2 no-scrollbar">
      <Playlistbar />
      <div className="h-full w-full pt-0 pb-6 flex flex-col gap-8 ">
        {homeAllContent.map((allContent) => {
          return (
            <div key={allContent.id} className="flex flex-col gap-2">
              <div className="w-full flex justify-between items-center px-2">
                <p className="text-2xl text-white font-semibold">{allContent.mainTitle}</p>
                <p className="text-sm text-lessFocusColour font-semibold hover:underline hover:text-white ease-in-out duration-200 cursor-pointer">
                  Show all
                </p>
              </div>
              <div className="h-[282px] grid grid-cols-5 grid-rows-1">
                {allContent.content.map((cardContent) => {
                  return (
                    <Card
                      key={cardContent._id}
                      card={cardContent}
                      href={`/genre/${allContent.id}/card/${cardContent._id}`}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <Footer />
      </div>
    </div>
  );
};

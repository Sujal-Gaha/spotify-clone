import { Footer } from '@spotify-clone/libs/crystals';
import { searchGenres } from '@spotify-clone/libs/inerts';

export const SearchPage = () => {
  return (
    <div className="w-[1048px] h-[90vh] bg-sectionColour rounded-lg flex flex-col items-center overflow-y-auto">
      <div className="w-full px-6 h-full overflow-y-auto no-scrollbar">
        <div>
          <h1 className="text-2xl text-white">Browse All</h1>
        </div>
        <div className="grid grid-cols-4 gap-6 pt-4 pb-16">
          {searchGenres.map((genre, index) => {
            return (
              <div
                key={index}
                className="h-[130.5px] w-[232px] rounded-xl overflow-hidden relative cursor-pointer"
                style={{
                  backgroundColor: `${genre.colour}`,
                }}
              >
                <p className="py-4 pr-[69.5938px] pl-4 text-[22px] text-white">{genre.title}</p>
                <div className="h-[110px] w-[45%] bg-slate-500 absolute right-0 rounded top-8 rotate-[25deg] translate-x-[18%] translate-y-[-2%]"></div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
};

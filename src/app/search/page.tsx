import Footer from "@/components/Footer";
import searchGenres from "@/constants/searchGenre";

const SearchPage = () => {
  return (
    <div className="w-[1048px] h-[90vh] bg-sectionColour rounded-lg flex flex-col items-center overflow-y-auto">
      <div className="w-full px-6 pt-16 h-full overflow-y-auto">
        <div>
          <h1 className="text-2xl text-white">Browse All</h1>
        </div>
        <div className="grid grid-cols-4 gap-6 pt-4 pb-16">
          {searchGenres.map((genre, index) => {
            return (
              <div
                className="h-[130.5px] w-[232px] rounded-xl overflow-hidden relative cursor-pointer"
                key={index}
                style={{
                  backgroundColor: `${genre.colour}`,
                }}
              >
                <p className="py-4 pr-[69.5938px] pl-4 text-[22px] text-white">
                  {genre.title}
                </p>
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

export default SearchPage;

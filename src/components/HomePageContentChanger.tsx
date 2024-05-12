const HomePageContentChanger = () => {
  return (
    <div className="w-full h-14 flex gap-2 text-white text-sm px-6 font-medium">
      <div className="w-[40.84px] h-8 py-1 px-3 bg-white text-appBlack rounded-2xl flex justify-center items-center">
        <span>All</span>
      </div>
      <div className="w-[62.56px] h-8 py-1 px-3 bg-smallerSectionColour rounded-2xl flex justify-center items-center">
        <span>Music</span>
      </div>
      <div className="w-[80.81px] h-8 py-1 px-3 bg-smallerSectionColour rounded-2xl flex justify-center items-center">
        <span>Podcasts</span>
      </div>
    </div>
  );
};

export default HomePageContentChanger;

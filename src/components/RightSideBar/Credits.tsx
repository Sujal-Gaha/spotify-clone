const Credits = () => {
  return (
    <div className="bg-smallerSectionColour w-[388px] h-[249px] p-4 rounded-xl flex flex-col justify-center gap-4">
      <div className="w-full h-[25px] flex items-center justify-between">
        <div className="w-[283.02px] h-[22px] flex items-center">
          <span className="text-white">Credits</span>
        </div>
        <div className="w-[54.98px] h-8 flex items-center">
          <span className="text-lessFocusColour text-sm">Show all</span>
        </div>
      </div>
      <div className="w-full h-11 flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-white">The Weeknd</p>
          <p className="text-lessFocusColour text-sm">Main artist, Producer</p>
        </div>
        <div>
          <button className="rounded-lg border text-white text-sm py-[3px] px-[15px]">
            Follow
          </button>
        </div>
      </div>
      <div className="w-full h-11 flex flex-col">
        <p className="text-white">Max Martin</p>
        <p className="text-lessFocusColour text-sm">Composer, Producer</p>
      </div>
      <div className="w-full h-11">
        <p className="text-white">Oscar Holter</p>
        <p className="text-lessFocusColour text-sm">Composer, Producer</p>
      </div>
    </div>
  );
};

export default Credits;

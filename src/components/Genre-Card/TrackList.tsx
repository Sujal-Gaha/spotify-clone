import Image from "next/image";

const TrackList = () => {
  return (
    <div className="h-fit w-[1048px] px-6">
      <div className="h-[3000px] w-full">
        <div className="h-9 w-full px-4 border-lessFocusColour border-b">
          <div className="h-full w-full flex items-center justify-between text-lessFocusColour text-sm">
            <div className="">#</div>
            <div className="w-[353.53px]">Title</div>
            <div className="w-[235.69px]">Album</div>
            <div className="w-[176.77px]">Date Added</div>
            <div className="w-[120px] flex justify-end">
              <span>Icon</span>
            </div>
          </div>
        </div>
        <div className="h-14 w-full px-4">
          <div className="h-full w-full flex items-center justify-between text-lessFocusColour text-sm">
            <div className="">1</div>
            <div className="w-[353.53px]">
              <div className="flex gap-2">
                {/* <Image
                  alt="khali"
                  src={"/public/albumCoverRight.png"}
                  height={40}
                  width={40}
                /> */}
                <div className="h-10 w-10 bg-blue-500 rounded-md"></div>
                <div className="flex flex-col justify-center">
                  <p className="truncate text-white">
                    One Of The Girls (with JENNIE, Lily Rose Depp)
                  </p>
                  <p className="text-sm">The Weeknd, JENNIE, Lily-Rose Depp</p>
                </div>
              </div>
            </div>
            <div className="w-[235.69px] truncate">
              <span>
                The Idols Episode 4 (Music from the series of The Idols)
              </span>
            </div>
            <div className="w-[176.77px]">Date Added</div>
            <div className="w-[120px] flex justify-end">
              <span>3:40</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackList;

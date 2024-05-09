import DefaultLibraryIcon from "@/icons/DefaultLibrary";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";
import Image from "next/image";

const LowerSideBar = () => {
  return (
    <div className="bg-sectionColour rounded-lg flex flex-col">
      <div className="h-14 flex items-center justify-center px-4 py-2">
        <div className="h-10 w-[388px] flex justify-between px-1">
          <div className="flex items-center w-[142px] gap-4 justify-center">
            <DefaultLibraryIcon />
            <p className="text-white">Your Library</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className="p-2">
              <FaPlus className="text-lessFocusColour" />
            </div>
            <div className="p-2">
              <FaArrowRight className="text-lessFocusColour" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 flex items-center px-4">
        <button className="px-3 py-1 bg-buttonColour rounded-xl text-white text-sm">
          Playlists
        </button>
      </div>
      <div className="h-[715px] flex flex-col items-center justify-start gap-2 pt-0 px-2 pb-2">
        <div className="h-[34px] w-[404px] pt-[2px] pr-1 pb-0 pl-2 flex justify-between">
          <div className="h-8 w-8 flex justify-center items-center text-lessFocusColour text-xl">
            <CiSearch />
          </div>
          <div className="h-8 w-[99.31px] py-1 pr-3 pl-4 flex items-center justify-center gap-1 text-lessFocusColour">
            <p className="text-sm">Recents</p>
            <MdOutlineStorage />
          </div>
        </div>
        <div className="h-16 w-[404px] flex justify-start p-2 gap-3">
          <div className="h-12 w-12">
            <Image
              src="/theIdol.png"
              alt="album cover"
              width={50}
              height={50}
              className="rounded"
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <div className="text-white text-sm">The Weeknd</div>
            <div className="text-lessFocusColour text-xs">
              Playlist . Sujal Gaha
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerSideBar;

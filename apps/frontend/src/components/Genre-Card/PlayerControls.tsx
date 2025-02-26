import { ColouredPlayIcon } from "@/components/icons/coloured-play";
import { MoreOptionsIcon } from "@/components/icons/more-options";
import { SaveIcon } from "@/components/icons/save";
import { MdOutlineStorage } from "react-icons/md";

const PlayerControls = () => {
  return (
    <div className="h-[104px] w-[1048px] flex justify-center items-center bg-gradient-to-b from-[#1e3c60] to-[#192a3e]">
      <div className="h-14 w-[1000px] flex justify-between">
        <div className="flex items-center gap-8">
          <ColouredPlayIcon />
          <div className="flex items-center gap-6">
            <SaveIcon />
            <MoreOptionsIcon />
          </div>
        </div>
        <div className="flex items-center text-lessFocusColour gap-1">
          <span className="text-[15px]">List</span>
          <MdOutlineStorage />
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;

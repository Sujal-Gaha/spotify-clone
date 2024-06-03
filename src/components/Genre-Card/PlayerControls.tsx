import ColouredPlayIcon from "@/icons/Genre-Card/ColouredPlay";
import MoreOptionsIcon from "@/icons/Genre-Card/MoreOptions";
import SaveIcon from "@/icons/Genre-Card/Save";
import { MdOutlineStorage } from "react-icons/md";

const PlayerControls = () => {
  return (
    <div className="h-[104px] w-[1048px] flex justify-center items-center">
      <div className="h-14 w-[1000px] flex justify-between">
        <div className="flex items-center gap-8">
          <ColouredPlayIcon />
          <div className="flex items-center gap-6">
            <SaveIcon />
            <MoreOptionsIcon />
          </div>
        </div>
        <div className="flex items-center text-lessFocusColour gap-[2px]">
          <span>List</span>
          <MdOutlineStorage />
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;

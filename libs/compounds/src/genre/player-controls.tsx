import { ColouredPlayQuark, MoreOptionsQuark, SaveQuark } from '@spotify-clone/libs/quarks';
import { MdOutlineStorage } from 'react-icons/md';

export const PlayerControls = () => {
  return (
    <div className="h-[104px] w-[1048px] flex justify-center items-center bg-gradient-to-b from-[#1e3c60] to-[#192a3e]">
      <div className="h-14 w-[1000px] flex justify-between">
        <div className="flex items-center gap-8">
          <ColouredPlayQuark />
          <div className="flex items-center gap-6">
            <SaveQuark />
            <MoreOptionsQuark />
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

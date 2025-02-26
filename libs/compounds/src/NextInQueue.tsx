import { LuMusic3 } from 'react-icons/lu';
import { useState } from 'react';
import { IoPlay } from 'react-icons/io5';

const NextInQueue = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div className="bg-smallerSectionColour w-[388px] h-[119px] rounded-xl p-4 flex flex-col justify-center gap-1">
      <div className="w-full h-[25px] flex justify-between items-center">
        <span className="text-white font-semibold">Next in queue</span>
        <span className="text-lessFocusColour text-sm hover:underline cursor-pointer hover:text-white duration-150 ease-in-out">
          Open queue
        </span>
      </div>
      <div
        className="w-full h-[62px] p-2 rounded-lg flex items-center justify-start gap-3 hover:bg-hoverSmallerSectionColour ease-in-out duration-300 cursor-pointer"
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering ? (
          <IoPlay className="text-lessFocusColour" />
        ) : (
          <LuMusic3 className="text-lessFocusColour" />
        )}

        <img
          alt=""
          src="/albumCoverRight.png"
          height={45}
          width={45}
          className="roundex-xl"
        />
        <div>
          <p className="text-white font-semibold">Starboy</p>
          <p className="text-lessFocusColour text-sm">The Weeknd</p>
        </div>
      </div>
    </div>
  );
};

export default NextInQueue;

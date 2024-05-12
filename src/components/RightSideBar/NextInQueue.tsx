import { LuMusic3 } from "react-icons/lu";
import Image from "next/image";

const NextInQueue = () => {
  return (
    <div className="bg-smallerSectionColour w-[388px] h-[119px] rounded-xl p-4 flex flex-col justify-center gap-1 mb-4">
      <div className="w-full h-[25px] flex justify-between items-center">
        <span className="text-white">Next in queue</span>
        <span className="text-lessFocusColour text-sm">Open queue</span>
      </div>
      <div className="w-full h-[62px] p-2 flex items-center justify-start gap-3">
        <LuMusic3 className="text-lessFocusColour" />
        <Image
          alt=""
          src="/albumCoverRight.png"
          height={45}
          width={45}
          className="roundex-xl"
        />
        <div>
          <p className="text-white">Starboy</p>
          <p className="text-lessFocusColour text-sm">The Weeknd</p>
        </div>
      </div>
    </div>
  );
};

export default NextInQueue;

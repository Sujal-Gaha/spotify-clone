import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const RecommendationArtist = () => {
  return (
    <div className="w-[420px] h-16 px-4 py-0 flex justify-between items-center">
      <div>
        <p className="text-white underline font-semibold">The Weeknd</p>
      </div>
      <div className="text-lessFocusColour w-12 flex justify-between text-xl">
        <BsThreeDots />
        <IoMdClose />
      </div>
    </div>
  );
};

export default RecommendationArtist;

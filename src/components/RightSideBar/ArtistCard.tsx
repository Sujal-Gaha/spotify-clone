import Image from "next/image";

const ArtistCard = () => {
  return (
    <div className="relative">
      <div className="h-[259.95px] w-full">
        <Image
          src="/theWeeknd.png"
          alt="The Weeknd"
          height={500}
          width={500}
          className="h-full w-full rounded-t-xl"
        />
      </div>
      <div className="h-[174px] w-full p-4 bg-smallerSectionColour rounded-b-xl">
        <div>
          <p className="text-white">The Weeknd</p>
        </div>
        <div className="flex justify-between pt-2 px-0 pb-3 h-[52px] w-full">
          <div>
            <p className="text-lessFocusColour">
              110,915,289 monthly listeners
            </p>
          </div>
          <div>
            <button className="text-white text-sm border py-[3px] px-[15px] rounded-lg">
              Follow
            </button>
          </div>
        </div>
        <div>
          <p className="text-sm text-lessFocusColour">
            The Weeknd took over pop music & culture on his own terms filtering
            R&B, Pop,& hip-hop through an ambitious widescreen lens. The
            multi-platform 3x...
          </p>
        </div>
      </div>
      <div>
        <span className="text-white absolute top-4 left-4 font-semibold">
          About the artist
        </span>
      </div>
    </div>
  );
};

export default ArtistCard;

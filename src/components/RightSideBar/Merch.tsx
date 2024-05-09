import Image from "next/image";

const Merch = () => {
  return (
    <div className="bg-smallerSectionColour w-[388px] h-[265px] pt-4 px-4 pb-0 flex flex-col justify-center rounded-xl">
      <div className="w-full h-[22px] flex items-center">
        <span className="text-white">Merch</span>
      </div>
      <div className="w-full h-[216px] flex flex-col p-3">
        <div className="w-full h-16 flex items-center justify-center gap-3">
          <Image alt="merch 1" src="/albumCover.png" width={55} height={55} />
          <span className="text-white truncate">
            The Highlights (Deluxe) Digital Album
          </span>
        </div>
        <div className="w-full h-16 flex items-center justify-between pl-1 gap-4">
          <Image alt="merch 2" src="/merch2.png" width={45} height={45} />
          <span className="text-white w-[276px] truncate">
            Live at SoFi Stadium Clean Digital Album
          </span>
        </div>
        <div className="w-full h-16 flex items-center justify-between pl-1 gap-4">
          <Image alt="merch 3" src="/merch3.png" width={45} height={45} />
          <span className="text-white w-[276px] truncate">
            Live at SoFi Stadium Digital Album
          </span>
        </div>
      </div>
    </div>
  );
};

export default Merch;
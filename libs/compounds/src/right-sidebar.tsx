import { useRightSidebarStore } from '@spotify-clone/libs/flasks';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { AddedQuark } from '@spotify-clone/libs/quarks';
import { LuMusic3 } from 'react-icons/lu';
import { useState } from 'react';
import { IoPlay } from 'react-icons/io5';
import { ButtonAlkali } from '@spotify-clone/libs/alkali';

const RecommendationCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 h-[420px] w-[420px]">
        <img src="/theIdol.png" alt="Album cover" width={388} height={388} className="rounded-xl" />
      </div>
      <div className="flex justify-between items-center h-[51px] w-[388px]">
        <div className="flex flex-col h-full w-full">
          <p className="text-white text-2xl">One Of The Girls</p>
          <p className="text-lessFocusColour text-sm">The Weeknd, JENNIE, Lily-Rose Depp</p>
        </div>
        <div className="h-full flex items-center">
          <AddedQuark />
        </div>
      </div>
    </div>
  );
};

const RecommendationArtist = () => {
  const { closeRightSidebar } = useRightSidebarStore();

  return (
    <div className="w-[420px] h-10 px-4 py-0 flex justify-between items-center">
      <div>
        <p className="text-white font-semibold">The Weeknd Mix</p>
      </div>
      <div className="text-lessFocusColour w-12 flex justify-between text-xl">
        <BsThreeDots />
        <IoMdClose className="hover:text-white cursor-pointer duration-500 ease-in-out" onClick={closeRightSidebar} />
      </div>
    </div>
  );
};

const ArtistCard = () => {
  return (
    <div className="relative">
      <div className="h-[259.95px] w-full">
        <img src="/theWeeknd.png" alt="The Weeknd" height={500} width={500} className="h-full w-full rounded-t-xl" />
      </div>
      <div className="h-[174px] w-full p-4 bg-smallerSectionColour rounded-b-xl">
        <div>
          <p className="text-white">The Weeknd</p>
        </div>
        <div className="flex justify-between items-center pt-2 px-0 pb-3 h-[52px] w-full">
          <div>
            <p className="text-lessFocusColour">110,915,289 monthly listeners</p>
          </div>
          <ButtonAlkali>Follow</ButtonAlkali>
        </div>
        <div>
          <p className="text-sm text-lessFocusColour">
            The Weeknd took over pop music & culture on his own terms filtering R&B, Pop,& hip-hop through an ambitious
            widescreen lens. The multi-platform 3x...
          </p>
        </div>
      </div>
      <div>
        <span className="text-white absolute top-4 left-4 font-semibold">About the artist</span>
      </div>
    </div>
  );
};

const Credits = () => {
  return (
    <div className="bg-smallerSectionColour w-[388px] h-[249px] p-4 rounded-xl flex flex-col justify-center gap-4">
      <div className="w-full h-[25px] flex items-center justify-between">
        <div className="w-[283.02px] h-[22px] flex items-center">
          <span className="text-white font-bold">Credits</span>
        </div>
        <div className="w-[54.98px] h-8 flex items-center">
          <span className="text-lessFocusColour text-sm hover:underline cursor-pointer hover:text-white duration-150 ease-in-out">
            Show all
          </span>
        </div>
      </div>
      <div className="w-full h-11 flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-white font-medium">The Weeknd</p>
          <p className="text-lessFocusColour text-sm">Main artist, Producer</p>
        </div>
        <ButtonAlkali>Follow</ButtonAlkali>
      </div>
      <div className="w-full h-11 flex flex-col">
        <p className="text-white font-medium">Max Martin</p>
        <p className="text-lessFocusColour text-sm">Composer, Producer</p>
      </div>
      <div className="w-full h-11">
        <p className="text-white font-medium">Oscar Holter</p>
        <p className="text-lessFocusColour text-sm">Composer, Producer</p>
      </div>
    </div>
  );
};

const Merch = () => {
  type TMerch = {
    image: string;
    name: string;
  };

  const merchandises: TMerch[] = [
    {
      image: '/albumCoverRight.png',
      name: 'The Highlights (Deluxe) Digital Album',
    },
    {
      image: '/albumCoverRight.png',
      name: 'Live at SoFi Stadium Clean Digital Album',
    },
    {
      image: '/albumCoverRight.png',
      name: 'Live at SoFi Stadium Digital Album',
    },
  ];

  return (
    <div className="bg-smallerSectionColour w-[388px] h-[265px] pt-3 px-2 pb-0 flex flex-col justify-center rounded-xl">
      <div className="w-full h-[22px] flex items-center">
        <span className="text-white px-2 font-bold">Merch</span>
      </div>
      <div className="w-full h-[216px] flex flex-col py-3">
        {merchandises.map((merch, index) => {
          return (
            <div
              className="w-full h-16 flex items-center justify-start gap-3 pl-2 rounded-lg hover:bg-hoverSmallerSectionColour ease-in-out duration-[400ms] cursor-pointer"
              key={index}
            >
              <img alt={`merch ${index}`} src={merch.image} className="w-12 h-12" />
              <p className="text-white font-medium w-[276px] truncate hover:underline">{merch.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
        {isHovering ? <IoPlay className="text-lessFocusColour" /> : <LuMusic3 className="text-lessFocusColour" />}

        <img alt="" src="/albumCoverRight.png" height={45} width={45} className="roundex-xl" />
        <div>
          <p className="text-white font-semibold">Starboy</p>
          <p className="text-lessFocusColour text-sm">The Weeknd</p>
        </div>
      </div>
    </div>
  );
};

export const RightSidebar = () => {
  return (
    <div className="w-[420px] h-[90vh] bg-sectionColour flex flex-col pt-4 rounded-lg">
      <RecommendationArtist />
      <div className="h-[920px] w-[420px] pt-0 px-4 pb-4 flex flex-col items-center gap-6 overflow-x-hidden overflow-y-auto no-scrollbar">
        <RecommendationCard />
        <div className="flex flex-col w-[388px] gap-4">
          <ArtistCard />
          <Credits />
          <Merch />
          <NextInQueue />
        </div>
      </div>
    </div>
  );
};

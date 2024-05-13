"use client";

import useFreshNewMusicStore from "@/store/freshNewMusicStore";
import clsx from "clsx";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const FreshNewMusic = () => {
  const { freshNewMusic, setFreshNewMusic } = useFreshNewMusicStore();

  const handleMouseOver = (id: number) => {
    const updatedFreshNewMusic = [...freshNewMusic];
    updatedFreshNewMusic[id].isHovering = true;
    setFreshNewMusic(updatedFreshNewMusic);
  };

  const handleMouseLeave = (id: number) => {
    const updatedFreshNewMusic = [...freshNewMusic];
    updatedFreshNewMusic[id].isHovering = false;
    setFreshNewMusic(updatedFreshNewMusic);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center px-2">
        <p className="text-2xl text-white font-semibold">Fresh New Music</p>
        <p className="text-sm text-lessFocusColour font-semibold hover:underline cursor-pointer">
          Show all
        </p>
      </div>
      <div className="h-[282px] flex">
        {freshNewMusic.map((freshMusic) => {
          return (
            <div
              className="w-[204.81px] h-full p-2 rounded-lg flex flex-col gap-1 cursor-pointer hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300"
              key={freshMusic._id}
              onMouseOver={() => handleMouseOver(freshMusic._id)}
              onMouseLeave={() => handleMouseLeave(freshMusic._id)}
            >
              <div className="relative">
                <Image
                  alt="album"
                  src={freshMusic.image}
                  height={205}
                  width={205}
                  className="rounded-lg"
                />
                <FaCirclePlay
                  className={clsx(
                    "absolute text-mainColour text-5xl right-2 bottom-2 bg-black rounded-full hover:text-[56px] hover:bottom-1 hover:right-1 z-10",
                    freshMusic.isHovering ? "block" : "hidden"
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">{freshMusic.title}</p>
                <p className="text-lessFocusColour text-sm font-medium">
                  {freshMusic.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreshNewMusic;

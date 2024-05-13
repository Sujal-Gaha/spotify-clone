"use client";

import useRecentStore from "@/store/recentsStore";
import clsx from "clsx";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const RecentlyPlayed = () => {
  const { recents, setRecents } = useRecentStore();

  const handleMouseOver = (id: number) => {
    const updatedRecents = [...recents];
    updatedRecents[id].isHovering = true;
    setRecents(updatedRecents);
  };

  const handleMouseLeave = (id: number) => {
    const updatedRecents = [...recents];
    updatedRecents[id].isHovering = false;
    setRecents(updatedRecents);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl text-white font-semibold px-2">Recently Played</p>
      {recents.map((recent) => {
        return (
          <div
            className="w-[204.8px] h-full p-2 rounded-lg flex flex-col gap-1 cursor-pointer hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300"
            key={recent._id}
            onMouseOver={() => handleMouseOver(recent._id)}
            onMouseLeave={() => handleMouseLeave(recent._id)}
          >
            <div className="relative">
              <Image
                alt="album"
                src={recent.image}
                height={205}
                width={205}
                className="rounded-lg"
              />
              <FaCirclePlay
                className={clsx(
                  "absolute text-mainColour text-5xl right-2 bottom-2 bg-black rounded-full z-10",
                  recent.isHovering ? "block" : "hidden"
                )}
              />
              <span className="absolute text-lg text-white bottom-4 left-5 font-bold">
                {recent.title}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white font-semibold">The Weeknd Mix</p>
              <p className="text-lessFocusColour text-sm font-medium">
                {recent.featurings}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentlyPlayed;

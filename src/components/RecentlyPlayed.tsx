"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";

const RecentlyPlayed = () => {
  const [recents, setRecents] = useState<TRecent[]>([
    {
      _id: 0,
      image: "/theWeekndMix.png",
      title: "The Weeknd Mix",
      featurings: "Chris Brown, Miguel and Chase Atlantic",
      isHovering: false,
    },
  ]);

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
    <div>
      <p className="text-2xl text-white font-semibold">Recently Played</p>
      {recents.map((recent) => {
        return (
          <div
            className="w-[204.8px] h-full p-2 hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300 flex flex-col gap-1 cursor-pointer"
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
            <div className="flex flex-col gap-2 px-2">
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

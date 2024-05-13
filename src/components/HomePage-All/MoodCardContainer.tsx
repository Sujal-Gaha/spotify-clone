"use client";

import useMoodStore from "@/store/moodsStore";
import clsx from "clsx";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const MoodCardContainer = () => {
  const { moods, setMoods } = useMoodStore();

  const handleMouseOver = (id: number) => {
    const updatedMoods = [...moods];
    updatedMoods[id].isHovering = true;
    setMoods(updatedMoods);
  };

  const handleMouseLeave = (id: number) => {
    const updatedMoods = [...moods];
    updatedMoods[id].isHovering = false;
    setMoods(updatedMoods);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center px-2">
        <p className="text-2xl text-white font-semibold">Mood</p>
        <p className="text-sm text-lessFocusColour font-semibold hover:underline cursor-pointer">
          Show all
        </p>
      </div>
      <div className="h-[282px] flex">
        {moods.map((mood) => {
          return (
            <div
              className="w-full h-full p-2 rounded-lg flex flex-col gap-1 cursor-pointer hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300"
              key={mood._id}
              onMouseOver={() => handleMouseOver(mood._id)}
              onMouseLeave={() => handleMouseLeave(mood._id)}
            >
              <div className="relative">
                <Image
                  alt="album"
                  src={mood.image}
                  height={205}
                  width={205}
                  className="rounded-lg"
                />
                <FaCirclePlay
                  className={clsx(
                    "absolute text-mainColour text-5xl right-2 bottom-2 bg-black rounded-full hover:text-[56px] hover:bottom-1 hover:right-1 z-10",
                    mood.isHovering ? "block" : "hidden"
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">{mood.title}</p>
                <p className="text-lessFocusColour text-sm font-medium">
                  {mood.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoodCardContainer;

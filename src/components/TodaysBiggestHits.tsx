"use client";

import useTodaysBiggestHitsStore from "@/store/todaysBiggestHitsStore";
import clsx from "clsx";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const TodayBiggestHits = () => {
  const { todaysBiggestHits, setTodaysBiggestHits } =
    useTodaysBiggestHitsStore();

  const handleMouseOver = (id: number) => {
    const updatedTodaysBiggestHits = [...todaysBiggestHits];
    updatedTodaysBiggestHits[id].isHovering = true;
    setTodaysBiggestHits(updatedTodaysBiggestHits);
  };
  const handleMouseLeave = (id: number) => {
    const updatedTodaysBiggestHits = [...todaysBiggestHits];
    updatedTodaysBiggestHits[id].isHovering = false;
    setTodaysBiggestHits(updatedTodaysBiggestHits);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center px-2">
        <p className="text-2xl text-white font-semibold">
          {"Today's biggest hits"}
        </p>
        <p className="text-sm text-lessFocusColour font-semibold hover:underline cursor-pointer">
          Show all
        </p>
      </div>
      <div className="h-[282px] flex">
        {todaysBiggestHits.map((todaysBiggestHit) => {
          return (
            <div
              className="w-full h-full p-2 rounded-lg flex flex-col gap-1 cursor-pointer hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300"
              key={todaysBiggestHit._id}
              onMouseOver={() => handleMouseOver(todaysBiggestHit._id)}
              onMouseLeave={() => handleMouseLeave(todaysBiggestHit._id)}
            >
              <div className="relative">
                <Image
                  alt="album"
                  src={todaysBiggestHit.image}
                  height={205}
                  width={205}
                  className="rounded-lg"
                />
                <FaCirclePlay
                  className={clsx(
                    "absolute text-mainColour text-5xl right-2 bottom-2 bg-black rounded-full z-10",
                    todaysBiggestHit.isHovering ? "block" : "hidden"
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">
                  {todaysBiggestHit.title}
                </p>
                <p className="text-lessFocusColour text-sm font-medium">
                  {todaysBiggestHit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodayBiggestHits;

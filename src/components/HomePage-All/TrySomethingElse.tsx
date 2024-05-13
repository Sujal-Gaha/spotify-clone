"use client";

import useTrySomethingElseStore from "@/store/trySomethingElse";
import clsx from "clsx";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const TodayBiggestHits = () => {
  const { trySomethingElse, setTrySomethingElse } = useTrySomethingElseStore();

  const handleMouseOver = (id: number) => {
    const updatedTrySomethingElse = [...trySomethingElse];
    updatedTrySomethingElse[id].isHovering = true;
    setTrySomethingElse(updatedTrySomethingElse);
  };

  const handleMouseLeave = (id: number) => {
    const updatedTrySomethingElse = [...trySomethingElse];
    updatedTrySomethingElse[id].isHovering = false;
    setTrySomethingElse(updatedTrySomethingElse);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center px-2">
        <p className="text-2xl text-white font-semibold">Try something else</p>
        <p className="text-sm text-lessFocusColour font-semibold hover:underline cursor-pointer">
          Show all
        </p>
      </div>
      <div className="h-[282px] flex">
        {trySomethingElse.map((todaysBiggestHit) => {
          return (
            <div
              className="w-[204.81px] h-full p-2 rounded-lg flex flex-col gap-1 cursor-pointer hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300"
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
                    "absolute text-mainColour text-5xl right-2 bottom-2 bg-black rounded-full hover:text-[56px] hover:bottom-1 hover:right-1 z-10",
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

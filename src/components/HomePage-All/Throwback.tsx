"use client";

import useThrowbackStore from "@/store/throwbackStore";
import useTrySomethingElseStore from "@/store/trySomethingElse";
import clsx from "clsx";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const Throwback = () => {
  const { throwbacks, setThrowbacks } = useThrowbackStore();

  const handleMouseOver = (id: number) => {
    const updatedThrowback = [...throwbacks];
    updatedThrowback[id].isHovering = true;
    setThrowbacks(updatedThrowback);
  };

  const handleMouseLeave = (id: number) => {
    const updatedThrowback = [...throwbacks];
    updatedThrowback[id].isHovering = false;
    setThrowbacks(updatedThrowback);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center px-2">
        <p className="text-2xl text-white font-semibold">Throwback</p>
        <p className="text-sm text-lessFocusColour font-semibold hover:underline cursor-pointer">
          Show all
        </p>
      </div>
      <div className="h-[282px] flex">
        {throwbacks.map((throwback) => {
          return (
            <div
              className="w-[204.81px] h-full p-2 rounded-lg flex flex-col gap-1 cursor-pointer hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300"
              key={throwback._id}
              onMouseOver={() => handleMouseOver(throwback._id)}
              onMouseLeave={() => handleMouseLeave(throwback._id)}
            >
              <div className="relative">
                <Image
                  alt="album"
                  src={throwback.image}
                  height={205}
                  width={205}
                  className="rounded-lg"
                />
                <FaCirclePlay
                  className={clsx(
                    "absolute text-mainColour text-5xl right-2 bottom-2 bg-black rounded-full hover:text-[56px] hover:bottom-1 hover:right-1 z-10",
                    throwback.isHovering ? "block" : "hidden"
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">{throwback.title}</p>
                <p className="text-lessFocusColour text-sm font-medium">
                  {throwback.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Throwback;

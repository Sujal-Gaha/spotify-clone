"use client";

import useFeaturedChartsStore from "@/store/featuredChartsStore";
import clsx from "clsx";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const FeaturedCharts = () => {
  const { featuredCharts, setFeaturedCharts } = useFeaturedChartsStore();

  const handleMouseOver = (id: number) => {
    const updatedFeaturedCharts = [...featuredCharts];
    updatedFeaturedCharts[id].isHovering = true;
    setFeaturedCharts(updatedFeaturedCharts);
  };

  const handleMouseLeave = (id: number) => {
    const updatedFeaturedCharts = [...featuredCharts];
    updatedFeaturedCharts[id].isHovering = false;
    setFeaturedCharts(updatedFeaturedCharts);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center px-2">
        <p className="text-2xl text-white font-semibold">Featured Charts</p>
        <p className="text-sm text-lessFocusColour font-semibold hover:underline cursor-pointer">
          Show all
        </p>
      </div>
      <div className="h-[282px] flex">
        {featuredCharts.map((featuredChart) => {
          return (
            <div
              className="w-[204.81px] h-full p-2 rounded-lg flex flex-col gap-1 cursor-pointer hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300"
              key={featuredChart._id}
              onMouseOver={() => handleMouseOver(featuredChart._id)}
              onMouseLeave={() => handleMouseLeave(featuredChart._id)}
            >
              <div className="relative">
                <Image
                  alt="album"
                  src={featuredChart.image}
                  height={205}
                  width={205}
                  className="rounded-lg"
                />
                <FaCirclePlay
                  className={clsx(
                    "absolute text-mainColour text-5xl right-2 bottom-2 bg-black rounded-full z-10",
                    featuredChart.isHovering ? "block" : "hidden"
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">
                  {featuredChart.title}
                </p>
                <p className="text-lessFocusColour text-sm font-medium">
                  {featuredChart.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedCharts;

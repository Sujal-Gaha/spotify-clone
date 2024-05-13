"use client";

import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import { clsx } from "clsx";
import useRecommendationStore from "@/store/recommendationsStore";

const HomePageRecommendation = () => {
  const { recommendations, setRecommendations } = useRecommendationStore();

  const handleMouseOver = (id: number) => {
    const updatedRecommendations = [...recommendations];
    updatedRecommendations[id].isHovering = true;
    setRecommendations(updatedRecommendations);
  };

  const handleMouseLeave = (id: number) => {
    const updatedRecommendations = [...recommendations];
    updatedRecommendations[id].isHovering = false;
    setRecommendations(updatedRecommendations);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center px-2">
        <p className="text-2xl text-white font-semibold">
          More like The Weeknd
        </p>
        <p className="text-sm text-lessFocusColour font-semibold hover:underline cursor-pointer">
          Show all
        </p>
      </div>
      <div className="h-[282px] flex">
        {recommendations.map((recommendation) => {
          return (
            <div
              className="w-full h-full p-2 rounded-lg hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300 flex flex-col gap-1 cursor-pointer"
              key={recommendation._id}
              onMouseOver={() => handleMouseOver(recommendation._id)}
              onMouseLeave={() => handleMouseLeave(recommendation._id)}
            >
              <div className="relative">
                <Image
                  alt="album"
                  src={recommendation.image}
                  height={205}
                  width={205}
                  className="rounded-lg"
                />
                <FaCirclePlay
                  className={clsx(
                    "absolute text-mainColour text-5xl right-2 bottom-2 bg-black rounded-full hover:text-[56px] hover:bottom-1 hover:right-1 z-10",
                    recommendation.isHovering ? "block" : "hidden"
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">
                  {recommendation.name}
                </p>
                <p className="text-lessFocusColour text-sm font-medium">
                  {recommendation.profession}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageRecommendation;

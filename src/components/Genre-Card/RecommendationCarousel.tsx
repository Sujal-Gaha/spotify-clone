"use client";

import useRecommendationCarouselStore from "@/stores/Genre-Card/RecommendationCarouselStore";
import clsx from "clsx";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const RecommendationCarousel = () => {
  const { recommendations, setRecommendations } =
    useRecommendationCarouselStore();

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
    <div className="h-fit w-full px-6">
      <div className="h-[34px] w-full">
        <h2 className="text-2xl text-white">You might also like</h2>
      </div>
      <div className="h-[263.61px] w-full grid grid-cols-5">
        {recommendations.map((recommendation, index) => (
          <div
            className="h-full w-full p-4 rounded-xl hover:bg-hoverSmallerSectionColour ease-in-out duration-300 cursor-pointer relative"
            key={recommendation.id}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Image
              alt={recommendation.title}
              src={recommendation.image}
              height={205}
              width={205}
              className="rounded-lg"
            />
            <p className="text-white font-semibold">{recommendation.title}</p>
            <p className="text-lessFocusColour font-semibold text-sm">
              By Ongaku
            </p>
            <FaCirclePlay
              className={clsx(
                "absolute text-mainColour text-5xl right-6 top-32 bg-black rounded-full hover:text-[56px] hover:top-[124px] hover:right-5 z-10",
                recommendation.isHovering ? "block duration-200" : "hidden"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationCarousel;

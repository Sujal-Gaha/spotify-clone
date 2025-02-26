"use client";

import { RecommendationsCarouselData } from "@/constants/Genre-Card/RecommendationCarousel";
import { Card } from "../ui/card";

export const RecommendationCarousel = () => {
  return (
    <div className="h-fit w-full px-6">
      <div className="h-[34px] w-full">
        <h2 className="text-2xl text-white">You might also like</h2>
      </div>
      <div className="h-[263.61px] w-full grid grid-cols-5">
        {RecommendationsCarouselData.map((recommendation) => (
          <Card href="#" key={recommendation._id} card={recommendation} />
        ))}
      </div>
    </div>
  );
};

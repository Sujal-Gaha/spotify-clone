import { Card } from '@spotify-clone/libs/compounds';
import { recommendationsCarouselData } from '@spotify-clone/libs/inerts';

export const RecommendationCarousel = () => {
  return (
    <div className="h-fit w-full px-6">
      <div className="h-[34px] w-full">
        <h2 className="text-2xl text-white">You might also like</h2>
      </div>
      <div className="h-[263.61px] w-full grid grid-cols-5">
        {recommendationsCarouselData.map((recommendation) => (
          <Card href="#" key={recommendation._id} card={recommendation} />
        ))}
      </div>
    </div>
  );
};

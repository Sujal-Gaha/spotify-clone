import { useParams } from 'react-router-dom';
import { Footer } from '@spotify-clone/libs/crystals';
import { PlayerControls, PlaylistBanner, TrackList } from '@spotify-clone/libs/compounds';
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

export const GenrePage = () => {
  const { genreId, cardId } = useParams();

  if (!genreId || !cardId) return null;

  return (
    <div className="overflow-y-auto no-scrollbar">
      <PlaylistBanner genreId={+genreId} cardId={+cardId} />
      <PlayerControls />
      <TrackList />
      <RecommendationCarousel />
      <Footer />
    </div>
  );
};

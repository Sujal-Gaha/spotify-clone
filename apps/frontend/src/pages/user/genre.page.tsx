import { useParams } from 'react-router-dom';
import PlaylistBanner from '../../components/Genre-Card/PlaylistBanner';
import PlayerControls from '../../components/Genre-Card/PlayerControls';
import { TrackList } from '../../components/Genre-Card/TrackList';
import { RecommendationCarousel } from '../../components/Genre-Card/RecommendationCarousel';
import { Footer } from '@spotify-clone/libs/crystals';

export const GenrePage = () => {
  const { genreId, cardId } = useParams();

  if (!genreId || !cardId) return null;

  return (
    <div className="overflow-y-auto no-scrollbar">
      <PlaylistBanner genreId={genreId} cardId={cardId} />
      <PlayerControls />
      <TrackList />
      <RecommendationCarousel />
      <Footer />
    </div>
  );
};

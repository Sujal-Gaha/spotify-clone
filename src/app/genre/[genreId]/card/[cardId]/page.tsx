import PlayerControls from "@/components/Genre-Card/PlayerControls";
import PlaylistBanner from "@/components/Genre-Card/PlaylistBanner";
import TrackList from "@/components/Genre-Card/TrackList";

const CardPage = ({
  params,
}: {
  params: {
    genreId: number;
    cardId: number;
  };
}) => {
  return (
    <div className="overflow-y-auto">
      <PlaylistBanner genreId={params.genreId} cardId={params.cardId} />
      <PlayerControls />
      <TrackList />
    </div>
  );
};

export default CardPage;

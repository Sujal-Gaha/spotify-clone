import PlayList from './PlayList';
import { TPlaylist } from '@spotify-clone/libs/compositions/TPlaylist';

export const PlayLists = ({ playlists }: { playlists: TPlaylist[] }) => {
  return playlists.map((playlist, index) => {
    return <PlayList key={index} image={playlist.image} title={playlist.title} />;
  });
};

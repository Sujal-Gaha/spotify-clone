import { TPlaylist } from '@spotify-clone/libs/compositions/TPlaylist';
import { useState } from 'react';
import { FaRegFolder } from 'react-icons/fa';
import { PiMusicNotesPlus } from 'react-icons/pi';

interface ICreatePlaylist {
  playlists: TPlaylist[];
  setPlaylists: (playlists: TPlaylist[]) => void;
  setIsCreatePlaylistModalOpen: (isCreatePlaylistModalOpen: boolean) => void;
}

export const CreatePlaylistModal = (props: ICreatePlaylist) => {
  const { playlists, setPlaylists, setIsCreatePlaylistModalOpen: setIsModalOpen } = props;

  const [count, setCount] = useState(playlists.length);

  const handleCreatePlaylistFolder = () => {
    const newPlaylist = {
      id: 1,
      image: '/theIdol.png',
      title: 'New Folder',
    };

    const updatedPlaylist = [newPlaylist].concat(playlists);
    setPlaylists(updatedPlaylist);
  };

  const handleCreateNewPlaylist = () => {
    setCount(count + 1);

    const newPlaylist = {
      id: 2,
      image: '/theIdol.png',
      title: `My Playlist #${count}`,
    };

    const updatedPlaylist = [newPlaylist].concat(playlists);
    setPlaylists(updatedPlaylist);
  };

  return (
    <div className="fixed h-[88px] w-[198.39px] p-1 shadow rounded bg-smallerSectionColour flex flex-col z-10">
      <div
        className="w-full h-10 py-3 px-1 flex justify-center items-center gap-2 text-lessFocusColour hover:bg-activeSmallerSectionColour cursor-pointer"
        onClick={() => {
          setIsModalOpen(false);
          handleCreateNewPlaylist();
        }}
      >
        <PiMusicNotesPlus className="text-lg" />
        <div className="text-sm w-[148px]">Create a new playlist</div>
      </div>
      <div
        className="w-full h-10 py-3 px-1 flex justify-center items-center gap-2 text-lessFocusColour hover:bg-activeSmallerSectionColour cursor-pointer"
        onClick={() => {
          setIsModalOpen(false);
          handleCreatePlaylistFolder();
        }}
      >
        <FaRegFolder className="text-lg" />
        <div className="text-sm w-[148px]">Create a playlist folder</div>
      </div>
    </div>
  );
};

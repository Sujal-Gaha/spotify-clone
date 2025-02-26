import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { usePathState } from '@spotify-clone/libs/catalysts/utils/usePathState';
import { useState } from 'react';
import { LibraryQuark } from '@spotify-clone/libs/quarks/library.quark';
import { CiSearch } from 'react-icons/ci';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import { MdOutlineStorage } from 'react-icons/md';
import { playListData } from '@spotify-clone/libs/inerts/Playlist/playListData';
import { CreatePlaylistModal } from './create-playlist-modal';

export const UpperSidebar = () => {
  const { isPathHome, isPathSearch } = usePathState();

  return (
    <div className="h-28 bg-sectionColour px-3 py-2 rounded-lg">
      <div className="flex flex-col h-24 w-full items-center justify-center gap-2">
        <div className="w-[396px] flex justify-center">
          <div className="flex h-10 w-[372px] items-center">
            <Link
              to={'/'}
              className={clsx(
                'flex items-center gap-5 hover:text-white ease-in-out duration-500',
                isPathHome ? 'text-white' : 'text-lessFocusColour'
              )}
            >
              {isPathHome ? <GoHomeFill className="text-[28px]" /> : <GoHome className="text-[28px]" />}
              <p className="font-bold text-base active:underline">Home</p>
            </Link>
          </div>
        </div>
        <div className="w-[396px] flex justify-center">
          <div className="flex h-10 w-[372px] items-center">
            <Link
              to={'/search'}
              className={clsx(
                'flex items-center gap-5 hover:text-white ease-in-out duration-500',
                isPathSearch ? 'text-white' : 'text-lessFocusColour'
              )}
            >
              <FiSearch className="text-[27px]" />
              <p className="font-bold text-base active:underline">Search</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IPlaylist {
  image: string;
  title: string;
}

const PlayLists = ({ playlists }: { playlists: IPlaylist[] }) => {
  return playlists.map((playlist, index) => (
    <Link
      key={index}
      to={'/playlist/1'}
      className="h-16 w-[404px] flex justify-start p-2 gap-3 hover:bg-hoverSmallerSectionColour ease-in-out duration-500 rounded"
    >
      <div className="h-12 w-12">
        <img src={playlist.image} alt="album cover" width={50} height={50} className="rounded" />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <p className="text-white text-sm">{playlist.title}</p>
        <p className="text-lessFocusColour text-xs">Playlist . Sujal Gaha</p>
      </div>
    </Link>
  ));
};

const LowerSidebar = () => {
  const [playlists, setPlaylists] = useState(playListData);
  const [isCreatePlaylistModalOpen, setIsCreatePlaylistModalOpen] = useState(false);

  return (
    <div className="bg-sectionColour rounded-lg flex flex-col h-full">
      <div className="h-14 flex items-center justify-center px-4 py-2">
        <div className="h-10 w-[388px] flex justify-between px-1">
          <Link to={'/playlist'} className="flex items-center w-[142px] gap-4 justify-center">
            <LibraryQuark />
            <p className="text-white font-medium">Your Library</p>
          </Link>
          <div className="flex items-center justify-center gap-1">
            <div className="p-2 relative">
              <FaPlus
                className="text-lessFocusColour cursor-pointer hover:text-white duration-500 ease-in-out"
                onClick={() => {
                  setIsCreatePlaylistModalOpen(true);
                  setTimeout(() => {
                    setIsCreatePlaylistModalOpen(false);
                  }, 7000);
                }}
              />
              {isCreatePlaylistModalOpen && (
                <CreatePlaylistModal
                  playlists={playlists}
                  setPlaylists={setPlaylists}
                  setIsCreatePlaylistModalOpen={setIsCreatePlaylistModalOpen}
                />
              )}
            </div>
            <div className="p-2">
              <FaArrowRight className="text-lessFocusColour cursor-pointer hover:text-white duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 flex items-center px-4">
        <button className="px-3 py-1 bg-buttonColour rounded-xl text-white text-sm shadow hover:bg-hoverSmallerSectionColour ease-in-out duration-500">
          Playlists
        </button>
      </div>
      <div className="h-full flex flex-col items-center justify-start gap-2 pt-0 px-2 pb-2">
        <div className="h-[34px] w-[404px] pt-[2px] pr-1 pb-0 pl-2 flex justify-between">
          <div className="h-8 w-8 flex justify-center items-center text-lessFocusColour text-xl">
            <CiSearch className="cursor-pointer hover:text-white ease-in-out duration-500" />
          </div>
          <div className="h-8 w-[99.31px] py-1 pr-3 pl-4 flex items-center justify-center gap-1 text-lessFocusColour cursor-pointer hover:text-white ease-in-out duration-500">
            <p className="text-sm">Recents</p>
            <MdOutlineStorage />
          </div>
        </div>
        <PlayLists playlists={playlists} />
      </div>
    </div>
  );
};

export const LeftSidebarContainer = () => {
  return (
    <div className="w-[420px] h-[90vh] flex flex-col gap-2">
      <UpperSidebar />
      <LowerSidebar />
    </div>
  );
};

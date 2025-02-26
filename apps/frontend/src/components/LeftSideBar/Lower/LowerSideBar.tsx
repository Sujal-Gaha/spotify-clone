import { LibraryQuark } from '@spotify-clone/libs/quarks/library.quark';
import { CiSearch } from 'react-icons/ci';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import { MdOutlineStorage } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlayLists from './PlayLists';
import { playListData } from '@spotify-clone/libs/inerts/Playlist/playListData';
import CreatePlaylistModal from './CreatePlaylistModal';

export const LowerSideBar = () => {
  const [playlists, setPlaylists] = useState(playListData);

  const [isCreatePlaylistModalOpen, setIsCreatePlaylistModalOpen] =
    useState(false);

  return (
    <div className="bg-sectionColour rounded-lg flex flex-col h-full">
      <div className="h-14 flex items-center justify-center px-4 py-2">
        <div className="h-10 w-[388px] flex justify-between px-1">
          <Link
            to={'/playlist'}
            className="flex items-center w-[142px] gap-4 justify-center"
          >
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

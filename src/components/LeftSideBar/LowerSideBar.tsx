"use client";

import DefaultLibraryIcon from "@/icons/DefaultLibrary";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { PiMusicNotesPlus } from "react-icons/pi";
import { FaRegFolder } from "react-icons/fa";

const LowerSideBar = () => {
  type TPlaylist = {
    _id: number;
    image: string;
    artist: string;
  };

  const [playlists, setPlaylists] = useState<TPlaylist[]>([
    {
      _id: 0,
      image: "/theIdol.png",
      artist: "The Weeknd",
    },
  ]);

  const [isCreatePlaylistModalOpen, setIsCreatePlaylistModalOpen] =
    useState(false);

  return (
    <div className="bg-sectionColour rounded-lg flex flex-col">
      <div className="h-14 flex items-center justify-center px-4 py-2">
        <div className="h-10 w-[388px] flex justify-between px-1">
          <div className="flex items-center w-[142px] gap-4 justify-center">
            <DefaultLibraryIcon />
            <p className="text-white">Your Library</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className="p-2 relative">
              <FaPlus
                className="text-lessFocusColour cursor-pointer"
                onClick={() => {
                  setIsCreatePlaylistModalOpen(true);
                  setTimeout(() => {
                    setIsCreatePlaylistModalOpen(false);
                  }, 7000);
                }}
              />
              {isCreatePlaylistModalOpen && (
                <div className="absolute top-10 left-2 h-[88px] w-[198.39px] p-1 shadow rounded bg-smallerSectionColour flex flex-col">
                  <div className="w-full h-10 py-3 px-1 flex justify-center items-center gap-2 text-lessFocusColour">
                    <PiMusicNotesPlus className="text-lg" />
                    <div className="text-sm w-[148px]">
                      Create a new playlist
                    </div>
                  </div>
                  <div className="w-full h-10 py-3 px-1 flex justify-center items-center gap-2 text-lessFocusColour">
                    <FaRegFolder className="text-lg" />
                    <div className="text-sm w-[148px]">
                      Create a playlist folder
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-2">
              <FaArrowRight className="text-lessFocusColour cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 flex items-center px-4">
        <button className="px-3 py-1 bg-buttonColour rounded-xl text-white text-sm shadow">
          Playlists
        </button>
      </div>
      <div className="h-[715px] flex flex-col items-center justify-start gap-2 pt-0 px-2 pb-2">
        <div className="h-[34px] w-[404px] pt-[2px] pr-1 pb-0 pl-2 flex justify-between">
          <div className="h-8 w-8 flex justify-center items-center text-lessFocusColour text-xl">
            <CiSearch className="cursor-pointer" />
          </div>
          <div className="h-8 w-[99.31px] py-1 pr-3 pl-4 flex items-center justify-center gap-1 text-lessFocusColour cursor-pointer">
            <p className="text-sm">Recents</p>
            <MdOutlineStorage />
          </div>
        </div>
        {playlists.map((playlist) => {
          return (
            <div
              className="h-16 w-[404px] flex justify-start p-2 gap-3"
              key={playlist._id}
            >
              <div className="h-12 w-12">
                <Image
                  src={playlist.image}
                  alt="album cover"
                  width={50}
                  height={50}
                  className="rounded"
                />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <p className="text-white text-sm">{playlist.artist}</p>
                <p className="text-lessFocusColour text-xs">
                  Playlist . Sujal Gaha
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LowerSideBar;

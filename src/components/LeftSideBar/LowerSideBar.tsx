"use client";

import DefaultLibraryIcon from "@/icons/DefaultLibrary";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { PiMusicNotesPlus } from "react-icons/pi";
import { FaRegFolder } from "react-icons/fa";
import Link from "next/link";

const LowerSideBar = () => {
  const [count, setCount] = useState(2);

  type TPlaylist = {
    image: string;
    title: string;
  };

  const [playlists, setPlaylists] = useState<TPlaylist[]>([
    {
      image: "/theIdol.png",
      title: "The Weeknd",
    },
  ]);

  const [isCreatePlaylistModalOpen, setIsCreatePlaylistModalOpen] =
    useState(false);

  const handleCreateNewPlaylist = () => {
    const newObject = {
      image: "/theIdol.png",
      title: `My Playlist #${count}`,
    };
    const updatedPlaylist = [newObject].concat(playlists);
    console.log("Handle Create new playlist ", updatedPlaylist);
    setPlaylists(updatedPlaylist);
    setCount(count + 1);
  };

  const handleCreatePlaylistFolder = () => {
    const newObject = {
      image: "/theIdol.png",
      title: "New Folder",
    };
    const updatedPlaylist = [newObject].concat(playlists);
    setPlaylists(updatedPlaylist);
  };

  return (
    <div className="bg-sectionColour rounded-lg flex flex-col h-full">
      <div className="h-14 flex items-center justify-center px-4 py-2">
        <div className="h-10 w-[388px] flex justify-between px-1">
          <Link
            href={"/playlist"}
            className="flex items-center w-[142px] gap-4 justify-center"
          >
            <DefaultLibraryIcon />
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
                <div className="fixed h-[88px] w-[198.39px] p-1 shadow rounded bg-smallerSectionColour flex flex-col z-10">
                  <div
                    className="w-full h-10 py-3 px-1 flex justify-center items-center gap-2 text-lessFocusColour hover:bg-activeSmallerSectionColour cursor-pointer"
                    onClick={() => {
                      setIsCreatePlaylistModalOpen(false);
                      handleCreateNewPlaylist();
                    }}
                  >
                    <PiMusicNotesPlus className="text-lg" />
                    <div className="text-sm w-[148px]">
                      Create a new playlist
                    </div>
                  </div>
                  <div
                    className="w-full h-10 py-3 px-1 flex justify-center items-center gap-2 text-lessFocusColour hover:bg-activeSmallerSectionColour cursor-pointer"
                    onClick={() => {
                      setIsCreatePlaylistModalOpen(false);
                      handleCreatePlaylistFolder();
                    }}
                  >
                    <FaRegFolder className="text-lg" />
                    <div className="text-sm w-[148px]">
                      Create a playlist folder
                    </div>
                  </div>
                </div>
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
        {playlists.map((playlist, index) => {
          return (
            <Link
              href={"/playlist/1"}
              className="h-16 w-[404px] flex justify-start p-2 gap-3 hover:bg-hoverSmallerSectionColour ease-in-out duration-500 rounded"
              key={index}
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
                <p className="text-white text-sm">{playlist.title}</p>
                <p className="text-lessFocusColour text-xs">
                  Playlist . Sujal Gaha
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LowerSideBar;

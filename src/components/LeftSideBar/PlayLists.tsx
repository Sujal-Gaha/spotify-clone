import React from "react";
import PlayList from "./PlayList";
import { TPlaylist } from "@/types/TPlaylist";

interface IPlaylist {
  playlists: TPlaylist[];
}

const PlayLists = ({ playlists }: IPlaylist) => {
  return (
    <>
      {playlists.map((playlist, index) => {
        return (
          <PlayList key={index} image={playlist.image} title={playlist.title} />
        );
      })}
    </>
  );
};

export default PlayLists;

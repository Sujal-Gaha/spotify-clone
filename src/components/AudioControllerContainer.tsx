"use client";

import AddIcon from "@/components/icons/AudioController/Add";
import ConnectToADeviceIcon from "@/components/icons/AudioController/ConnectToADevice";
import LoopIcon from "@/components/icons/AudioController/LoopOnce";
import LyricsIcon from "@/components/icons/AudioController/Lyrics";
import MaxWindowIcon from "@/components/icons/AudioController/MaxWindow";
import MiniPlayerIcon from "@/components/icons/AudioController/MiniPlayer";
import MuteIcon from "@/components/icons/AudioController/Mute";
import NextSongIcon from "@/components/icons/AudioController/NextSong";
import NowPlayingActiveIcon from "@/components/icons/AudioController/NowPlayingActive";
import PauseIcon from "@/components/icons/AudioController/Pause";
import PlayIcon from "@/components/icons/AudioController/Play";
import PreviousSongIcon from "@/components/icons/AudioController/PreviousSong";
import QueueIcon from "@/components/icons/AudioController/Queue";
import ShufflePlaylistIcon from "@/components/icons/AudioController/ShufflePlaylist";
import TimePlayedIcon from "@/components/icons/AudioController/TimePlayed";
import useSongStore from "@/stores/songStore";
import { Slider } from "antd";
import Image from "next/image";

const AudioControllerContainer = () => {
  const { isSongPlaying } = useSongStore();

  return (
    <div className="w-full h-[72px] pt-1 flex items-start gap-5">
      <div className="w-[563.19px] h-fit flex items-center gap-3 px-1">
        <div className="h-[58px]">
          <Image
            alt=""
            src="/theIdol.png"
            height={58}
            width={58}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-left">
          <p className="text-white text-sm">One of your girls</p>
          <p className="text-lessFocusColour text-xs">The Weeknd</p>
        </div>
        <div>
          <AddIcon />
        </div>
      </div>
      <div className="h-[57px] w-[722px] flex flex-col gap-2">
        <div className="h-8 w-full flex justify-center items-center gap-5">
          <ShufflePlaylistIcon />
          <PreviousSongIcon />
          {isSongPlaying ? <PlayIcon /> : <PauseIcon />}
          <NextSongIcon />
          <LoopIcon />
        </div>
        <div className="h-[17px] w-full flex items-center justify-center gap-4 text-lessFocusColour">
          <span>4:07</span>
          <TimePlayedIcon />
          <span>5:10</span>
          {/* <audio controls>
            <source src="Swim.mp3" type="audio/mpeg" />
          </audio> */}
        </div>
      </div>
      <div className="h-[57px] w-[571.19px] flex items-center pt-2">
        <div className="h-8 w-full bg-black flex justify-end items-center gap-[15px]">
          <NowPlayingActiveIcon />
          <LyricsIcon />
          <QueueIcon />
          <ConnectToADeviceIcon />
          <MuteIcon />
          <Slider defaultValue={100} className="w-20" />
          <MiniPlayerIcon />
          <MaxWindowIcon />
        </div>
      </div>
    </div>
  );
};

export default AudioControllerContainer;

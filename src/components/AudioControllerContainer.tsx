"use client";

import { AddIcon } from "@/components/icons/AudioController/add";
import { ConnectToADeviceIcon } from "@/components/icons/AudioController/connect-to-a-device";
import { LoopIcon } from "@/components/icons/AudioController/loop-once";
import { LyricsIcon } from "@/components/icons/AudioController/lyrics";
import { MaxWindowIcon } from "@/components/icons/AudioController/max-window";
import { MiniPlayerIcon } from "@/components/icons/AudioController/mini-player";
import { MuteIcon } from "@/components/icons/AudioController/mute";
import { NextSongIcon } from "@/components/icons/AudioController/next-song";
import { NowPlayingActiveIcon } from "@/components/icons/AudioController/now-playing-active";
import { PauseIcon } from "@/components/icons/Pause";
import { PlayIcon } from "@/components/icons/Play";
import { PreviousSongIcon } from "@/components/icons/AudioController/previous-song";
import { QueueIcon } from "@/components/icons/AudioController/queue";
import { ShufflePlaylistIcon } from "@/components/icons/AudioController/shuffle-playlist";
import { TimePlayedIcon } from "@/components/icons/AudioController/time-played";
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

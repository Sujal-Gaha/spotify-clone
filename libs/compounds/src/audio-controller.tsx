import { useSongStore } from '@spotify-clone/libs/flasks';
import { AddQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/add.quark';
import { ShufflePlaylistQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/shuffle-playlist.quark';
import { PreviousSongQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/previous-song.quark';
import { PlayQuark } from '@spotify-clone/libs/quarks/play.quark';
import { PauseQuark } from '@spotify-clone/libs/quarks/pause.quark';
import { NextSongQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/next-song.quark';
import { LoopOnceQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/loop-once.quark';
import { TimePlayedQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/time-played.quark';
import { NowPlayingActiveQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/now-playing-active.quark';
import { LyricsQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/lyrics.quark';
import { QueueQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/queue.quark';
import { ConnectToADeviceQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/connect-to-a-device.quark';
import { MuteQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/mute.quark';
import { MiniPlayerQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/mini-player.quark';
import { MaximizeWindowQuark } from '@spotify-clone/libs/quarks/audio-controller-quark/maximize-window.quark';

export const AudioController = () => {
  const { isSongBeingPlayed } = useSongStore();

  return (
    <div className="w-full h-[72px] pt-1 flex items-start gap-5">
      <div className="w-[563.19px] h-fit flex items-center gap-3 px-1">
        <div className="h-[58px]">
          <img alt="" src="/theIdol.png" height={58} width={58} className="rounded-lg" />
        </div>
        <div className="flex flex-col items-left">
          <p className="text-white text-sm">One of your girls</p>
          <p className="text-lessFocusColour text-xs">The Weeknd</p>
        </div>
        <div>
          <AddQuark />
        </div>
      </div>
      <div className="h-[57px] w-[722px] flex flex-col gap-2">
        <div className="h-8 w-full flex justify-center items-center gap-5">
          <ShufflePlaylistQuark />
          <PreviousSongQuark />
          {isSongBeingPlayed ? <PlayQuark /> : <PauseQuark />}
          <NextSongQuark />
          <LoopOnceQuark />
        </div>
        <div className="h-[17px] w-full flex items-center justify-center gap-4 text-lessFocusColour">
          <span>4:07</span>
          <TimePlayedQuark />
          <span>5:10</span>
          {/* <audio controls>
            <source src="Swim.mp3" type="audio/mpeg" />
          </audio> */}
        </div>
      </div>
      <div className="h-[57px] w-[571.19px] flex items-center pt-2">
        <div className="h-8 w-full bg-black flex justify-end items-center gap-[15px]">
          <NowPlayingActiveQuark />
          <LyricsQuark />
          <QueueQuark />
          <ConnectToADeviceQuark />
          <MuteQuark />
          {/* <Slider defaultValue={100} className="w-20" /> */}
          <MiniPlayerQuark />
          <MaximizeWindowQuark />
        </div>
      </div>
    </div>
  );
};

import { useSongStore } from '@spotify-clone/libs/flasks';
import {
  AddQuark,
  ShufflePlaylistQuark,
  PreviousSongQuark,
  PlayQuark,
  PauseQuark,
  NextSongQuark,
  LoopOnceQuark,
  TimePlayedQuark,
  NowPlayingActiveQuark,
  LyricsQuark,
  QueueQuark,
  ConnectToADeviceQuark,
  MuteQuark,
  MiniPlayerQuark,
  MaximizeWindowQuark,
} from '@spotify-clone/libs/quarks';

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

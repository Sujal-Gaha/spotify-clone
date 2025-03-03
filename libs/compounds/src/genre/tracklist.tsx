import { TTrackList } from '@spotify-clone/libs/compositions';
import { trackListData } from '@spotify-clone/libs/inerts';
import { BsThreeDots } from 'react-icons/bs';
import { IoPlay, IoTimeOutline } from 'react-icons/io5';

export const TrackBar = ({ track }: { track: TTrackList }) => {
  return (
    <div className="h-full w-full px-6 flex items-center justify-between text-lessFocusColour font-medium text-sm rounded-lg hover:bg-hoverSmallerSectionColour active:bg-activeSmallerSectionColour hover:text-white group">
      <div className="max-w-2">
        <IoPlay className="text-xs leading-none hidden group-hover:block" />
        <span className="pr-1 block group-hover:hidden">{track.id}</span>
      </div>
      <div className="w-[353.53px]">
        <div className="flex gap-2">
          <img alt="khali" src={track.title.image} height={40} width={40} className="rounded-md" />
          <div className="flex flex-col justify-center">
            <p className="truncate text-white hover:underline cursor-pointer">{track.title.name}</p>
            <p className="text-sm flex">
              <span className="hover:underline cursor-pointer">{track.title.artist}</span>
              {track.title.featuring.map((feature, index) => {
                if (track.title.featuring[index].length > 0) {
                  return (
                    <span key={index} className="hover:underline cursor-pointer">
                      <span className="!text-lessFocusColour">, </span>
                      {feature}
                    </span>
                  );
                } else {
                  return null;
                }
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[235.69px] truncate">
        <span className="hover:underline cursor-pointer">{track.album.name}</span>
      </div>
      <div className="w-[176.77px]">{track.dateAdded}</div>
      <div className="w-[120px] flex items-center justify-start pl-[66px] gap-3">
        <span>{track.duration}</span>
        <BsThreeDots className="text-sm hidden group-hover:block ml-1" />
      </div>
    </div>
  );
};

export const TrackList = () => {
  return (
    <div className="h-[60vh] w-full">
      <div className="h-fit w-full flex flex-col gap-4">
        <div className="h-9 w-full px-10 border-lessFocusColour border-b bg-gradient-to-b from-[#192a3e] to-sectionColour">
          <div className="h-full w-full flex items-center justify-between text-lessFocusColour text-sm">
            <div className="pr-1">#</div>
            <div className="w-[353.53px]">Title</div>
            <div className="w-[235.69px]">Album</div>
            <div className="w-[176.77px]">Date Added</div>
            <div className="w-[120px] flex justify-end pr-8">
              <IoTimeOutline className="text-xl" />
            </div>
          </div>
        </div>
        <div className="h-fit">
          <div className="h-14 w-full px-4">
            {trackListData.map((track) => (
              <TrackBar key={track.id} track={track} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

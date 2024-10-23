"use client";

import useTrackListStore from "@/stores/Genre-Card/TrackListStore";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { IoPlay, IoTimeOutline } from "react-icons/io5";

const TrackList = () => {
  const { trackList, setTrackList } = useTrackListStore();

  const handleMouseOver = (id: number) => {
    const updatedTrackList = [...trackList];
    updatedTrackList[id].isHovering = true;
    setTrackList(updatedTrackList);
  };

  const handleMouseLeave = (id: number) => {
    const updatedTrackList = [...trackList];
    updatedTrackList[id].isHovering = false;
    setTrackList(updatedTrackList);
  };

  return (
    <div className="h-[70vh] w-[1048px]">
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
            {trackList.map((track, index) => (
              <div
                className="h-full w-full px-6 flex items-center justify-between text-lessFocusColour font-medium text-sm rounded-lg hover:bg-hoverSmallerSectionColour active:bg-activeSmallerSectionColour hover:text-white"
                key={track["#"]}
                onMouseOut={() => {
                  handleMouseOver(index);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(index);
                }}
              >
                <div className="max-w-2">
                  {track.isHovering ? (
                    <IoPlay className="text-xs leading-none" />
                  ) : (
                    <span className="pr-1">{track["#"]}</span>
                  )}
                </div>
                <div className="w-[353.53px]">
                  <div className="flex gap-2">
                    <Image
                      alt="khali"
                      src={track.title.image}
                      height={40}
                      width={40}
                      className="rounded-md"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="truncate text-white hover:underline cursor-pointer">
                        {track.title.name}
                      </p>
                      <p className="text-sm flex">
                        <span className="hover:underline cursor-pointer">
                          {track.title.artist}
                        </span>
                        {track.title.featuring.map((feature, index) => {
                          if (track.title.featuring[index].name.length > 0) {
                            return (
                              <span
                                key={index}
                                className="hover:underline cursor-pointer"
                              >
                                <span className="!text-lessFocusColour">
                                  ,{" "}
                                </span>
                                {feature.name}
                              </span>
                            );
                          }
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[235.69px] truncate">
                  <span className="hover:underline cursor-pointer">
                    {track.album.name}
                  </span>
                </div>
                <div className="w-[176.77px]">{track.dateAdded}</div>
                <div className="w-[120px] flex items-center justify-start pl-[66px] gap-3">
                  <span>{track.duration}</span>
                  {track.isHovering && <BsThreeDots className="text-sm" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackList;

import usePlaylistBarContent from "@/stores/playlistBarContentStore";
import clsx from "clsx";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const PlaylistBar = () => {
  const { playlistBarContent, setPlaylistBarContent } = usePlaylistBarContent();

  const handleMouseOver = (id: number) => {
    const updatedPlaylistBarContent = [...playlistBarContent];
    updatedPlaylistBarContent[id].isHovering = true;
    setPlaylistBarContent(updatedPlaylistBarContent);
  };

  const handleMouseLeave = (id: number) => {
    const updatedPlaylistBarContent = [...playlistBarContent];
    updatedPlaylistBarContent[id].isHovering = false;
    setPlaylistBarContent(updatedPlaylistBarContent);
  };

  return (
    <div className="h-12 w-full px-3 mt-3 mb-14 flex justify-start">
      {playlistBarContent.map((contentlist) => {
        return (
          <div
            className="w-[328px] h-full bg-playlistBarColour hover:bg-hoverSmallerSectionColour duration-500 ease-in-out flex justify-between items-center rounded-lg cursor-pointer relative"
            key={contentlist._id}
            onMouseOver={() => handleMouseOver(contentlist._id)}
            onMouseLeave={() => handleMouseLeave(contentlist._id)}
          >
            <div className="flex items-center gap-2">
              <Image
                alt=""
                src="/theIdol.png"
                height={48}
                width={48}
                className="rounded-l-lg"
              />
              <p className="text-white text-sm font-semibold">The Weeknd</p>
            </div>
            <div>
              <FaCirclePlay
                className={clsx(
                  "absolute text-mainColour text-3xl right-4 bottom-2 bg-black rounded-full hover:text-4xl hover:bottom-[6px] hover:right-3 z-10",
                  contentlist.isHovering ? "block duration-100" : "hidden"
                )}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistBar;

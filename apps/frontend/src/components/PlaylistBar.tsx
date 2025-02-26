import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { playlistBarContent } from '@spotify-clone/libs/inerts/playlist-bar';

const PlaylistBar = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="h-12 w-full px-3 mt-3 mb-14 flex justify-start">
      {playlistBarContent.map((contentlist) => {
        return (
          <div
            className="w-[328px] h-full bg-playlistBarColour hover:bg-hoverSmallerSectionColour duration-500 ease-in-out flex justify-between items-center rounded-lg cursor-pointer relative"
            key={contentlist._id}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex items-center gap-2">
              <img
                alt=""
                src="/theIdol.png"
                height={48}
                width={48}
                className="rounded-l-lg"
              />
              <p className="text-white text-sm font-semibold">The Weeknd</p>
            </div>
            <div>
              {isHovering ? (
                <motion.div
                  className="bg-mainColour rounded-full p-1.5 text-sm mr-3"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaPlay className="ml-1" />
                </motion.div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistBar;

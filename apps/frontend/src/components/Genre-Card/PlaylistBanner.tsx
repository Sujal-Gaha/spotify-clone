import { homeAllContent } from '@spotify-clone/libs/inerts';

const PlaylistBanner = (props: { genreId: string; cardId: string }) => {
  return (
    <div className="h-[276px] w-full bg-gradient-to-t from-[#264d7c] to-[#3d7ecc] flex justify-center items-center">
      <div className="flex gap-4 items-end">
        <img
          alt=""
          src={`${homeAllContent[props.genreId].content[props.cardId].image}`}
          height={232}
          width={232}
          className="rounded-md"
        />
        <div className="h-[180px] w-[744px]">
          <span className="h-5 text-sm text-white font-medium">Playlist</span>
          <div className="h-[116px] flex justify-start items-center">
            <h1 className="text-white text-[90px] leading-none">
              {homeAllContent[props.genreId].content[props.cardId].title}
            </h1>
          </div>
          <span className="h-5 text-sm text-white font-medium truncate">
            {homeAllContent[props.genreId].content[props.cardId].description}
          </span>
          <p className="h-5 text-sm text-white font-medium">
            Ongaku . 50 songs,
            <span className="text-sm text-lessFocusColour"> about 3 hr</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistBanner;

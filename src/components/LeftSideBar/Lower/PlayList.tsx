import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IPlayList {
  image: string;
  title: string;
}

const PlayList = ({ image, title }: IPlayList) => {
  return (
    <Link
      href={"/playlist/1"}
      className="h-16 w-[404px] flex justify-start p-2 gap-3 hover:bg-hoverSmallerSectionColour ease-in-out duration-500 rounded"
    >
      <div className="h-12 w-12">
        <Image
          src={image}
          alt="album cover"
          width={50}
          height={50}
          className="rounded"
        />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <p className="text-white text-sm">{title}</p>
        <p className="text-lessFocusColour text-xs">Playlist . Sujal Gaha</p>
      </div>
    </Link>
  );
};

export default PlayList;

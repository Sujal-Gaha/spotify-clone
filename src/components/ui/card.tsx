"use client";

import { TContent } from "@/types/THomePageAllContent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";

export const Card = ({
  href,
  content,
}: {
  href: string;
  content: TContent;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      className="w-[204.81px] h-full p-2 rounded-lg flex flex-col gap-1 cursor-pointer hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300"
      href={href}
      onMouseLeave={() => setIsHovering(false)}
      onMouseOver={() => setIsHovering(true)}
    >
      <div className="relative">
        <Image
          alt="album"
          src={content.image}
          height={205}
          width={205}
          className="rounded-lg"
        />
        {isHovering ? (
          <FaCirclePlay className="absolute text-mainColour text-5xl right-2 bottom-2 bg-black rounded-full hover:text-[56px] hover:bottom-1 hover:right-1 z-10 ease-in delay-75" />
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold">{content.title}</p>
        <p className="text-lessFocusColour text-sm font-medium">
          {content.description}
        </p>
      </div>
    </Link>
  );
};

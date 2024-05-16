"use client";

import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import clsx from "clsx";
import { useState } from "react";
import useHomePageAllContentStore from "@/store/homePageAllContentStore";

const HomePageContainerAll = () => {
  const { homePageAllContent, setHomePageAllContent } =
    useHomePageAllContentStore();

  const [index, setIndex] = useState(NaN);

  const handleMouseOver = (id: number) => {
    const updatedHomePageAllContent = [...homePageAllContent];
    if (
      updatedHomePageAllContent[index] &&
      updatedHomePageAllContent[index].content[id]
    ) {
      updatedHomePageAllContent[index].content[id].isHovering = true;
      setHomePageAllContent(updatedHomePageAllContent);
    }
  };

  const handleMouseLeave = (id: number) => {
    const updatedHomePageAllContent = [...homePageAllContent];
    if (
      updatedHomePageAllContent[index] &&
      updatedHomePageAllContent[index].content[id]
    ) {
      updatedHomePageAllContent[index].content[id].isHovering = false;
      setHomePageAllContent(updatedHomePageAllContent);
    }
  };

  return (
    <div className="h-full w-full py-0 px-6 flex flex-col gap-8 overflow-y-auto">
      {homePageAllContent.map((allContent) => {
        return (
          <div
            className="flex flex-col gap-2"
            key={allContent.mainId}
            onMouseLeave={() => setIndex(NaN)}
            onMouseOver={() => setIndex(allContent.mainId)}
          >
            <div className="w-full flex justify-between items-center px-2">
              <p className="text-2xl text-white font-semibold">
                {allContent.mainTitle}
              </p>
              <p className="text-sm text-lessFocusColour font-semibold hover:underline cursor-pointer">
                Show all
              </p>
            </div>
            <div className="h-[282px] flex">
              {allContent.content.map((content) => {
                return (
                  <div
                    className="w-[204.81px] h-full p-2 rounded-lg flex flex-col gap-1 cursor-pointer hover:bg-smallerSectionColour hover:shadow-lg ease-in-out duration-300"
                    key={content._id}
                    onMouseLeave={() => handleMouseLeave(content._id)}
                    onMouseOver={() => handleMouseOver(content._id)}
                  >
                    <div className="relative">
                      <Image
                        alt="album"
                        src={content.image}
                        height={205}
                        width={205}
                        className="rounded-lg"
                      />
                      <FaCirclePlay
                        className={clsx(
                          "absolute text-mainColour text-5xl right-2 bottom-2 bg-black rounded-full hover:text-[56px] hover:bottom-1 hover:right-1 z-10",
                          content.isHovering ? "block" : "hidden"
                        )}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-white font-semibold">
                        {content.title}
                      </p>
                      <p className="text-lessFocusColour text-sm font-medium">
                        {content.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePageContainerAll;

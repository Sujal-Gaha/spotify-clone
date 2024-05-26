"use client";

import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import clsx from "clsx";
import { useState } from "react";
import useHomePageAllContentStore from "@/store/homePageAllContentStore";
import Footer from "./Footer";
import PlaylistBar from "./PlaylistBar";

const HomePageContainerAll = () => {
  const { homePageAllContent, setHomePageAllContent } =
    useHomePageAllContentStore();

  const [containerId, setContainerId] = useState(NaN);
  const [cardId, setCardId] = useState(NaN);

  const handleMouseOver = () => {
    const updatedHomePageAllContent = [...homePageAllContent];
    if (
      updatedHomePageAllContent[containerId] &&
      updatedHomePageAllContent[containerId].content[cardId]
    ) {
      updatedHomePageAllContent[containerId].content[cardId].isHovering = true;
      setHomePageAllContent(updatedHomePageAllContent);
    }
  };

  const handleMouseLeave = () => {
    const updatedHomePageAllContent = [...homePageAllContent];
    if (
      updatedHomePageAllContent[containerId] &&
      updatedHomePageAllContent[containerId].content[cardId]
    ) {
      updatedHomePageAllContent[containerId].content[cardId].isHovering = false;
      setHomePageAllContent(updatedHomePageAllContent);
    }
  };

  return (
    <div className="flex flex-col overflow-y-auto px-5 w-full">
      <PlaylistBar />
      <div className="h-full w-full pt-0 pb-6 flex flex-col gap-8 ">
        {homePageAllContent.map((allContent) => {
          return (
            <div
              className="flex flex-col gap-2"
              key={allContent.mainId}
              onMouseLeave={() => {
                handleMouseLeave();
                setContainerId(NaN);
              }}
              onMouseOver={() => {
                handleMouseOver();
                setContainerId(allContent.mainId);
              }}
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
                      onMouseLeave={() => {
                        setCardId(NaN);
                        handleMouseLeave();
                      }}
                      onMouseOver={() => {
                        setCardId(content._id);
                        handleMouseOver();
                      }}
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
                            content.isHovering ? "block duration-200" : "hidden"
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
        <Footer />
      </div>
    </div>
  );
};

export default HomePageContainerAll;

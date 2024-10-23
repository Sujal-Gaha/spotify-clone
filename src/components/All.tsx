"use client";

import { useState } from "react";
import useHomePageAllContentStore from "@/stores/homePageAllContentStore";
import Footer from "./Footer";
import PlaylistBar from "./PlaylistBar";
import { Card } from "./ui/card";

const All = () => {
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
    <div className="flex flex-col overflow-y-auto px-5 w-full pt-2 no-scrollbar">
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
                <p className="text-sm text-lessFocusColour font-semibold hover:underline hover:text-white ease-in-out duration-200 cursor-pointer">
                  Show all
                </p>
              </div>
              <div className="h-[282px] flex">
                {allContent.content.map((content) => {
                  return (
                    <Card
                      key={content._id}
                      content={content}
                      href={`/genre/${allContent.mainId}/card/${content._id}`}
                    />
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

export default All;

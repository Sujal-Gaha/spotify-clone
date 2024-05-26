"use client";

import Navbar from "@/components/Navbar";
import HomePageContentChanger from "@/components/HomePageContentChanger";
import HomePageContainerAll from "@/components/HomePageContainerAll";
import useRightSideBarStore from "@/store/RightSideBarStore";
import clsx from "clsx";

export default function Home() {
  const { isRightSideBarVisible } = useRightSideBarStore();

  return (
    <div
      className={clsx(
        "h-[90vh] bg-sectionColour rounded-lg flex flex-col items-center gap-2",
        isRightSideBarVisible ? "w-[1048px]" : "w-full"
      )}
    >
      <Navbar />
      <HomePageContentChanger />
      <HomePageContainerAll />
    </div>
  );
}

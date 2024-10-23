"use client";

import DownloadIcon from "@/components/icons/Download";
import LeftArrowIcon from "@/components/icons/LeftArrow";
import RightArrowIcon from "@/components/icons/RightArrow";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";

const Navbar = () => {
  const path = usePathname();

  const [isSearchFieldFocused, setIsSearchFieldFocused] =
    useState<Boolean>(false);

  return (
    <div
      className={clsx(
        "py-4 px-6 h-16 w-full flex justify-between rounded-t-xl",
        path === "/" ||
          path === "/search" ||
          path === "/music" ||
          path === "/podcasts" ||
          path === "/playlist"
          ? "bg-none"
          : "bg-gradient-to-t from-[#3d7ecc] to-[#4a97f5]"
      )}
    >
      <div className="flex gap-2 items-center">
        <LeftArrowIcon />
        <RightArrowIcon />
        {path === "/search" && (
          <div className="relative text-lessFocusColour">
            <input
              className="py-[6px] px-9 bg-smallerSectionColour h-12 w-[364px] rounded-3xl border-2 border-transparent m-0 focus:border-white"
              type="text"
              placeholder="What do you want to play?"
              onFocus={() => setIsSearchFieldFocused(true)}
              onBlur={() => setIsSearchFieldFocused(false)}
            />
            <FiSearch
              className={clsx(
                "absolute text-lg top-[15px] left-3",
                isSearchFieldFocused && "text-white font-extrabold"
              )}
            />
          </div>
        )}
      </div>
      <div className="flex gap-2">
        {path === "/" && (
          <Link
            className="text-black bg-white w-[142.98px] h-8 py-2 px-3 text-[13px] font-bold rounded-3xl flex items-center justify-center hover:h-10 hover:w-[150px] hover:text-sm duration-200 ease-in-out"
            href={"/premium"}
          >
            <span>Explore Premium</span>
          </Link>
        )}
        <div>
          <div className="py-1 px-2 h-8 w-[118.58px] bg-appBlack flex justify-center items-center rounded-3xl gap-[6px]">
            <DownloadIcon />
            <span className="text-[13px] font-bold text-white">
              Install App
            </span>
          </div>
        </div>
        <div className="bg-appBlack rounded-full h-8 w-8 flex items-center justify-center">
          <GoBell className="text-lessFocusColour text-lg" />
        </div>
        <div className="bg-appBlack rounded-full h-8 w-8 flex items-center justify-center">
          <span className="bg-profileContainerColour rounded-full h-6 w-6 text-center text-appBlack">
            S
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

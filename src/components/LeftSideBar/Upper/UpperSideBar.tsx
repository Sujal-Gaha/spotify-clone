"use client";

import { usePathState } from "@/utils/usePathState";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { GoHome, GoHomeFill } from "react-icons/go";

export const UpperSideBar = () => {
  const path = usePathname();

  const { isPathHome, isPathSearch } = usePathState();

  return (
    <div className="h-28 bg-sectionColour px-3 py-2 rounded-lg">
      <div className="flex flex-col h-24 w-full items-center justify-center gap-2">
        <div className="w-[396px] flex justify-center">
          <div className="flex h-10 w-[372px] items-center">
            <Link
              href={"/"}
              className={clsx(
                "flex items-center gap-5 hover:text-white ease-in-out duration-500",
                isPathHome ? "text-white" : "text-lessFocusColour"
              )}
            >
              {isPathHome ? (
                <GoHomeFill className="text-[28px]" />
              ) : (
                <GoHome className="text-[28px]" />
              )}
              <p className="font-bold text-base active:underline">Home</p>
            </Link>
          </div>
        </div>
        <div className="w-[396px] flex justify-center">
          <div className="flex h-10 w-[372px] items-center">
            <Link
              href={"/search"}
              className={clsx(
                "flex items-center gap-5 hover:text-white ease-in-out duration-500",
                isPathSearch ? "text-white" : "text-lessFocusColour"
              )}
            >
              <FiSearch className="text-[27px]" />
              <p className="font-bold text-base active:underline">Search</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

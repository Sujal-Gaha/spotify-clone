"use client";

import ActiveHomeIcon from "@/icons/ActiveHome";
import ActiveSearchIcon from "@/icons/ActiveSearch";
import DefaultHomeIcon from "@/icons/DefaultHome";
import DefaultSearchIcon from "@/icons/DefaultSearch";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UpperSideBar = () => {
  const location = usePathname();

  return (
    <div className="h-28 bg-sectionColour px-3 py-2 rounded-lg">
      <div className="flex flex-col h-24 w-full items-center justify-center gap-2">
        <div className="w-[396px] flex justify-center">
          <div className="flex h-10 w-[372px] items-center">
            <Link href={"/"} className="flex items-center gap-5">
              {location === "/" ? <ActiveHomeIcon /> : <DefaultHomeIcon />}
              <p
                className={clsx(
                  "font-bold text-base hover:underline",
                  location === "/" ? "text-white" : "text-lessFocusColour"
                )}
              >
                Home
              </p>
            </Link>
          </div>
        </div>
        <div className="w-[396px] flex justify-center">
          <div className="flex h-10 w-[372px] items-center">
            <Link href={"/search"} className="flex items-center gap-5">
              {location === "/search" ? (
                <ActiveSearchIcon />
              ) : (
                <DefaultSearchIcon />
              )}
              <p
                className={clsx(
                  "font-bold text-base hover:underline",
                  location === "/search" ? "text-white" : "text-lessFocusColour"
                )}
              >
                Search
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperSideBar;

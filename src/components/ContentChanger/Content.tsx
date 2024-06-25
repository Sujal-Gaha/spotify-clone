import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Content = ({ title, link }: { title: string; link: string }) => {
  const path = usePathname();

  return (
    <Link
      className={clsx(
        "h-8 py-1 px-3 rounded-2xl flex justify-center items-center",
        path === link
          ? "bg-white text-appBlack"
          : "bg-smallerSectionColour text-white hover:bg-hoverSmallerSectionColour ease-in-out duration-500"
      )}
      href={link}
    >
      <span>{title}</span>
    </Link>
  );
};

export default Content;

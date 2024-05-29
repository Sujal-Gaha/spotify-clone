import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomePageContentChanger = () => {
  const path = usePathname();

  return (
    <div className="w-full h-14 flex gap-2 text-white text-sm px-6 font-medium">
      <Link
        className={clsx(
          "w-[40.84px] h-8 py-1 px-3 rounded-2xl flex justify-center items-center",
          path === "/"
            ? "bg-white text-appBlack"
            : "bg-smallerSectionColour text-white hover:bg-hoverSmallerSectionColour ease-in-out duration-500"
        )}
        href={"/"}
      >
        <span>All</span>
      </Link>
      <Link
        className={clsx(
          "w-[62.56px] h-8 py-1 px-3 rounded-2xl flex justify-center items-center",
          path === "/music"
            ? "bg-white text-appBlack"
            : "bg-smallerSectionColour text-white hover:bg-hoverSmallerSectionColour ease-in-out duration-500"
        )}
        href={"/music"}
      >
        <span>Music</span>
      </Link>
      <Link
        className={clsx(
          "w-[80.81px] h-8 py-1 px-3 rounded-2xl flex justify-center items-center",
          path === "/podcasts"
            ? "bg-white text-appBlack"
            : "bg-smallerSectionColour text-white hover:bg-hoverSmallerSectionColour ease-in-out duration-500"
        )}
        href={"/podcasts"}
      >
        <span>Podcasts</span>
      </Link>
    </div>
  );
};

export default HomePageContentChanger;

import Contents from "./Contents";
import { TContentData } from "@/types/TContentData";

const HomePageContentChanger = () => {
  const contentData: TContentData[] = [
    {
      id: 0,
      title: "All",
      path: "/",
    },
    {
      id: 1,
      title: "Music",
      path: "/music",
    },
    {
      id: 2,
      title: "Podcasts",
      path: "/podcasts",
    },
  ];

  return (
    <div className="w-full h-14 flex gap-2 text-white text-sm px-6 font-medium pt-2">
      <Contents contentData={contentData} />
    </div>
  );
};

export default HomePageContentChanger;

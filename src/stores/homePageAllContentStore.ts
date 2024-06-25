import { create } from "zustand";
import THomePageAllContent from "@/types/THomePageAllContent";
import homePageAllContentData from "@/data/homePageAllContentData";

type THomePageAllContentStore = {
  homePageAllContent: THomePageAllContent[];
};

type THomePageAllContentAction = {
  setHomePageAllContent: (homePageAllContent: THomePageAllContent[]) => void;
};

const useHomePageAllContentStore = create<
  THomePageAllContentStore & THomePageAllContentAction
>((set) => ({
  homePageAllContent: homePageAllContentData,
  setHomePageAllContent: (newHomePageAllContent) =>
    set(() => ({ homePageAllContent: newHomePageAllContent })),
}));

export default useHomePageAllContentStore;

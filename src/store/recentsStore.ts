import recentContent from "@/data/recents";
import TRecent from "@/type/TRecent";
import { create } from "zustand";

type TRecentState = {
  recents: TRecent[];
};

type TRecentAction = {
  setRecents: (recents: TRecent[]) => void;
};

const useRecentStore = create<TRecentState & TRecentAction>((set) => ({
  recents: recentContent,
  setRecents: (newRecents) => set(() => ({ recents: newRecents })),
}));

export default useRecentStore;

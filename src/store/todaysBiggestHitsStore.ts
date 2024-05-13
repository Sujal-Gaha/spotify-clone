import { create } from "zustand";
import TTodaysBiggestHits from "@/type/TTodaysBiggestHits";
import todaysBiggestHitsContent from "@/data/todaysBiggsetHits";

type TTodaysBiggestHitsState = {
  todaysBiggestHits: TTodaysBiggestHits[];
};

type TTodaysBiggestHitsAction = {
  setTodaysBiggestHits: (todaysBiggestHits: TTodaysBiggestHits[]) => void;
};

const useTodaysBiggestHitsStore = create<
  TTodaysBiggestHitsState & TTodaysBiggestHitsAction
>((set) => ({
  todaysBiggestHits: todaysBiggestHitsContent,
  setTodaysBiggestHits: (newTodaysBiggestHits) =>
    set(() => ({ todaysBiggestHits: newTodaysBiggestHits })),
}));

export default useTodaysBiggestHitsStore;

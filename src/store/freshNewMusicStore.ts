import { create } from "zustand";
import TFreshNewMusic from "@/type/TFreshNewMusic";
import freshNewMusicContent from "@/data/freshNewMusic";

type TFreshNewMusicState = {
  freshNewMusic: TFreshNewMusic[];
};

type TTodaysBiggestHitsAction = {
  setFreshNewMusic: (freshNewMusic: TFreshNewMusic[]) => void;
};

const useFreshNewMusicStore = create<
  TFreshNewMusicState & TTodaysBiggestHitsAction
>((set) => ({
  freshNewMusic: freshNewMusicContent,
  setFreshNewMusic: (newFreshNewMusic) =>
    set(() => ({ freshNewMusic: newFreshNewMusic })),
}));

export default useFreshNewMusicStore;

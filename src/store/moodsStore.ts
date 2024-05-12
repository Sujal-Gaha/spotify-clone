import moodContent from "@/data/moods";
import TMood from "@/type/TMood";
import { create } from "zustand";

type TMoodState = {
  moods: TMood[];
};

type TMoodAction = {
  setMoods: (moods: TMood[]) => void;
};

const useMoodStore = create<TMoodState & TMoodAction>((set) => ({
  moods: moodContent,
  setMoods: (newMoods) => set(() => ({ moods: newMoods })),
}));

export default useMoodStore;

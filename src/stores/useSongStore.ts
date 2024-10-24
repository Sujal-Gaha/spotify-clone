import { create } from "zustand";

type TSongState = {
  isSongPlaying: boolean;
};

type TSongAction = {
  setIsSongPlaying: (isSongPlaying: boolean) => void;
};

const useSongStore = create<TSongState & TSongAction>((set) => ({
  isSongPlaying: false,
  setIsSongPlaying: (updatedIsSongPlaying) =>
    set(() => ({ isSongPlaying: updatedIsSongPlaying })),
}));

export default useSongStore;

import { create } from 'zustand';

type State = {
  isSongBeingPlayed: boolean;
};

type Action = {
  startPlayingSong: () => void;
  stopPlayingSong: () => void;
};

export const useSongStore = create<State & Action>((set) => ({
  isSongBeingPlayed: false,
  startPlayingSong: () => set(() => ({ isSongBeingPlayed: true })),
  stopPlayingSong: () => set(() => ({ isSongBeingPlayed: false })),
}));

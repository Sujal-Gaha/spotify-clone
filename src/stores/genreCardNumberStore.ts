import { create } from "zustand";

type TGenreCardNumberState = {
  genreId: number;
  cardId: number;
};

type TGenreCardNumberAction = {
  setGenreId: (genreId: number) => void;
  setCardId: (cardId: number) => void;
};

const useGenreCardNumberStore = create<
  TGenreCardNumberState & TGenreCardNumberAction
>((set) => ({
  genreId: NaN,
  cardId: NaN,
  setGenreId: () => set((state) => ({ genreId: state.genreId })),
  setCardId: () => set((state) => ({ cardId: state.cardId })),
}));

export default useGenreCardNumberStore;

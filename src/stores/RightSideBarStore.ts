import { create } from "zustand";

type TRightSideBarState = {
  isRightSideBarVisible: boolean;
};

type TRightSideBarAction = {
  setIsRightSideBarVisible: () => void;
};

const useRightSideBarStore = create<TRightSideBarState & TRightSideBarAction>(
  (set) => ({
    isRightSideBarVisible: true,
    setIsRightSideBarVisible: () =>
      set((state) => ({ isRightSideBarVisible: !state.isRightSideBarVisible })),
  })
);

export default useRightSideBarStore;

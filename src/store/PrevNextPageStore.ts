import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TPageState = {
  history: string[];
  currentIndex: number;
};

type TPageAction = {
  visitPage: (page: string) => void;
  goBack: () => void;
  goForward: () => void;
};

const usePrevNextPageStore = create<TPageState & TPageAction>()(
  persist(
    (set, get) => ({
      history: [],
      currentIndex: -1,
      visitPage: (page: string) => {
        const { history, currentIndex } = get();
        const newHistory = history.splice(0, currentIndex + 1);
        newHistory.push(page);
        set({ history: newHistory, currentIndex: newHistory.length - 1 });
      },
      goBack: () => {
        const { currentIndex } = get();
        if (currentIndex > 0) {
          set({ currentIndex: currentIndex - 1 });
        }
      },
      goForward: () => {
        const { history, currentIndex } = get();
        if (currentIndex < history.length - 1) {
          set({ currentIndex: currentIndex + 1 });
        }
      },
    }),
    {
      name: "page-history-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export default usePrevNextPageStore;

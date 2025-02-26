import { create } from 'zustand';

type State = {
  isRightSidebarOpen: boolean;
};

type Action = {
  openRightSidebar: () => void;
  closeRightSidebar: () => void;
};

export const useRightSidebarStore = create<State & Action>((set) => ({
  isRightSidebarOpen: true,
  openRightSidebar: () => set(() => ({ isRightSidebarOpen: true })),
  closeRightSidebar: () => set(() => ({ isRightSidebarOpen: false })),
}));

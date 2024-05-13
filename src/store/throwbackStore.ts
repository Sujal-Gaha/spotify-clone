import throwbackContent from "@/data/throwback";
import TThrowback from "@/type/TThrowback";
import { create } from "zustand";

type TThrowbackState = {
  throwbacks: TThrowback[];
};

type TThrowbackAction = {
  setThrowbacks: (throwbacks: TThrowback[]) => void;
};

const useThrowbackStore = create<TThrowbackState & TThrowbackAction>((set) => ({
  throwbacks: throwbackContent,
  setThrowbacks: (newThrowbacks) => set(() => ({ throwbacks: newThrowbacks })),
}));

export default useThrowbackStore;

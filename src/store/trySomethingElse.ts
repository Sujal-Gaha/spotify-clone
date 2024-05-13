import { create } from "zustand";
import TTrySomethingElse from "@/type/TTrySomethingElse";
import trySomethingElseContent from "@/data/trySomethingElse";

type TTrySomethingElseState = {
  trySomethingElse: TTrySomethingElse[];
};

type TTrySomethingElseAction = {
  setTrySomethingElse: (trySomethingElse: TTrySomethingElse[]) => void;
};

const useTrySomethingElseStore = create<
  TTrySomethingElseState & TTrySomethingElseAction
>((set) => ({
  trySomethingElse: trySomethingElseContent,
  setTrySomethingElse: (newTrySomethingElse) =>
    set(() => ({ trySomethingElse: newTrySomethingElse })),
}));

export default useTrySomethingElseStore;

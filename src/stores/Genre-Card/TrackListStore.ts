import TrackListData from "@/data/Genre-Card/TrackList";
import TTrackList from "@/types/Genre-Card/TTrackList";
import { create } from "zustand";

type TTrackListState = {
  trackList: TTrackList[];
};

type TTrackListAction = {
  setTrackList: (trackList: TTrackList[]) => void;
};

const useTrackListStore = create<TTrackListState & TTrackListAction>((set) => ({
  trackList: TrackListData,
  setTrackList: () => set((state) => ({ trackList: state.trackList })),
}));

export default useTrackListStore;

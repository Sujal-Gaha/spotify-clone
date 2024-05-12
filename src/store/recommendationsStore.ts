import recommendationContent from "@/data/recommendations";
import TRecommendation from "@/type/TRecommendation";
import { create } from "zustand";

type TRecommendationState = {
  recommendations: TRecommendation[];
};

type TRecommendationAction = {
  setRecommendations: (recommendations: TRecommendation[]) => void;
};

const useRecommendationStore = create<
  TRecommendationState & TRecommendationAction
>((set) => ({
  recommendations: recommendationContent,
  setRecommendations: (newRecommendations) =>
    set(() => ({ recommendations: newRecommendations })),
}));

export default useRecommendationStore;

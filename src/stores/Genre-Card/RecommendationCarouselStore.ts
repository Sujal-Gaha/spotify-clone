import RecommendationsCarouselData from "@/constants/Genre-Card/RecommendationCarousel";
import TRecommendationCarousel from "@/types/Genre-Card/TRecommendationCarousel";
import { create } from "zustand";

type TRecommendationCarouselDataState = {
  recommendations: TRecommendationCarousel[];
};

type TRecommendationCarouselDataAction = {
  setRecommendations: (recommendations: TRecommendationCarousel[]) => void;
};

const useRecommendationCarouselStore = create<
  TRecommendationCarouselDataState & TRecommendationCarouselDataAction
>((set) => ({
  recommendations: RecommendationsCarouselData,
  setRecommendations: () =>
    set((state) => ({ recommendations: state.recommendations })),
}));

export default useRecommendationCarouselStore;

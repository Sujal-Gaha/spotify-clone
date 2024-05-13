import { create } from "zustand";
import TFeaturedCharts from "@/type/TFeaturedCharts";
import featuredChartsContent from "@/data/featuredCharts";

type TFeaturedChartsState = {
  featuredCharts: TFeaturedCharts[];
};

type TFeaturedChartsAction = {
  setFeaturedCharts: (featuredCharts: TFeaturedCharts[]) => void;
};

const useFeaturedChartsStore = create<
  TFeaturedChartsState & TFeaturedChartsAction
>((set) => ({
  featuredCharts: featuredChartsContent,
  setFeaturedCharts: (newFeaturedCharts) =>
    set(() => ({ featuredCharts: newFeaturedCharts })),
}));

export default useFeaturedChartsStore;

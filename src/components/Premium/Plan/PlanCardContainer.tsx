import PlanCard from "./PlanCard";
import { TPlan } from "@/types/TPlan";

interface IPlanData {
  PlanData: TPlan[];
}

const PlanCardContainer = ({ PlanData }: IPlanData) => {
  return (
    <div className="h-[555px] w-[1140px] flex justify-between">
      {PlanData.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PlanCardContainer;

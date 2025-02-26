import { TickIcon } from "@/components/icons/premium/tick";
import { TPlan } from "@/types/TPlan";

interface IPlan {
  plan: TPlan;
}

const PlanCard = ({ plan }: IPlan) => {
  return (
    <div className="h-[539px] w-[269px] shadow-md rounded-[10px] px-6 bg-white">
      <div className="h-[187px] pt-[21px] flex flex-col gap-[6px] border-b-2 border-[#CCCCCC]">
        <div className="flex flex-col gap-4">
          {plan.numberOfButtons === 1 ? (
            <button className="h-7 w-[182.23px] border-2 border-[#0D72EA] rounded-[4px] text-[#0D72EA] font-bold text-sm">
              One-time plans available
            </button>
          ) : (
            <>
              <button className="text-[13px] text-white font-bold h-[26px] w-[98.08px] bg-[#0D72EA] rounded-[4px]">
                1 month free
              </button>
              <button className="h-7 w-[182.23px] border-2 border-[#0D72EA] rounded-[4px] text-[#0D72EA] font-bold text-sm">
                One-time plans available
              </button>
            </>
          )}
        </div>
        <div>
          <h2 className="text-[23px] font-bold">{plan.title}</h2>
          <p>{plan.description}</p>
          <p>{plan.numberOfAccountsFor}</p>
        </div>
      </div>
      <div className="h-[224px] pt-5 flex flex-col gap-1">
        {plan.facilities.map((facility, index) => (
          <div className="flex gap-[13px]" key={index}>
            <TickIcon />
            <p className="w-[189.17px]">{facility.facility}</p>
          </div>
        ))}
      </div>
      <div className="h-12 w-full flex justify-center border-b">
        <button className="h-full w-[237px] py-[15px] bg-black rounded-full text-white font-bold flex items-center justify-center">
          View Plans
        </button>
      </div>
      <div className="h-20">
        <p className="text-xs text-[#535353] leading-none pt-4">
          <span className="underline">Terms and conditions apply.</span>
          <span> {plan.termsAndConditions}</span>
        </p>
      </div>
    </div>
  );
};

export default PlanCard;

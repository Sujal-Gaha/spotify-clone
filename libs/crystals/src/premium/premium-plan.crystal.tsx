import { PlanData } from '@spotify-clone/libs/inerts';
import {
  AmexQuark,
  DCIQuark,
  MastercardQuark,
  PaytmQuark,
  TickQuark,
  UpiQuark,
  VisaQuark,
} from '@spotify-clone/libs/quarks';
import { useState } from 'react';
import { TPlan } from '@spotify-clone/libs/compositions';

const PlanCard = ({ plan }: { plan: TPlan }) => {
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
            <TickQuark />
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

const PlanCardContainer = ({ PlanData }: { PlanData: TPlan[] }) => {
  return (
    <div className="h-[555px] w-[1140px] flex justify-between">
      {PlanData.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export const PremiumPlan = () => {
  const [planData, setPlanData] = useState(PlanData);

  return (
    <div className="h-[977px] pt-[69px] pb-[75px] w-full bg-[#EFEFEF] flex items-center justify-center">
      <div className="h-[833.16px] w-[1140px] flex flex-col items-center gap-8">
        <div className="flex flex-col gap-[50px] items-center">
          <div className="h-[114.16px] w-[455.93px] flex flex-col gap-4">
            <div className="flex flex-col gap-[3px] items-center">
              <h1 className="text-[38px] font-bold">Pick your Premium</h1>
              <h2>Listen without limits on your phone, speaker, and other devices.</h2>
            </div>
            <div className="flex justify-center gap-[7px]">
              <UpiQuark />
              <PaytmQuark />
              <VisaQuark />
              <MastercardQuark />
              <AmexQuark />
              <DCIQuark />
            </div>
          </div>
          <PlanCardContainer PlanData={planData} />
        </div>
        <div className="h-[82px] w-[752.39px] bg-white rounded-[10px] shadow flex items-center justify-center gap-[7px]">
          <p className="text-[23px] font-bold">Special discount for eligible students in university</p>
          <button className="text-[13px] font-bold border-2 border-black rounded-full h-[52px] py-4 px-[35px] leading-none">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

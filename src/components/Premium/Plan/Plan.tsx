"use client";

import PlanData from "@/constants/Premium/Plan";
import AmexIcon from "@/components/icons/Premium/Amex";
import DCIIcon from "@/components/icons/Premium/DCI";
import MastercardIcon from "@/components/icons/Premium/Mastercard";
import PaytmIcon from "@/components/icons/Premium/Paytm";
import UpiIcon from "@/components/icons/Premium/Upi";
import VisaIcon from "@/components/icons/Premium/Visa";
import React, { useState } from "react";
import PlanCardContainer from "./PlanCardContainer";

const Plan = () => {
  const [planData, setPlanData] = useState(PlanData);

  return (
    <div className="h-[977px] pt-[69px] pb-[75px] w-full bg-[#EFEFEF] flex items-center justify-center">
      <div className="h-[833.16px] w-[1140px] flex flex-col items-center gap-8">
        <div className="flex flex-col gap-[50px] items-center">
          <div className="h-[114.16px] w-[455.93px] flex flex-col gap-4">
            <div className="flex flex-col gap-[3px] items-center">
              <h1 className="text-[38px] font-bold">Pick your Premium</h1>
              <h2>
                Listen without limits on your phone, speaker, and other devices.
              </h2>
            </div>
            <div className="flex justify-center gap-[7px]">
              <UpiIcon />
              <PaytmIcon />
              <VisaIcon />
              <MastercardIcon />
              <AmexIcon />
              <DCIIcon />
            </div>
          </div>
          <PlanCardContainer PlanData={planData} />
        </div>
        <div className="h-[82px] w-[752.39px] bg-white rounded-[10px] shadow flex items-center justify-center gap-[7px]">
          <p className="text-[23px] font-bold">
            Special discount for eligible students in university
          </p>
          <button className="text-[13px] font-bold border-2 border-black rounded-full h-[52px] py-4 px-[35px] leading-none">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;

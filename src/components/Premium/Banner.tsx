const Banner = () => {
  return (
    <div className="h-[480px] w-full py-10 bg-premiumBannerColour flex items-center justify-center">
      <div className="h-[400px] w-[1140px] py-[72px] flex flex-col items-center justify-center gap-8">
        <h1 className="font-bold text-[39px] text-white">
          Get Premium free for 1 month
        </h1>
        <h2 className="text-2xl text-white">
          Just $1.99/month after. Debit and credit cards accepted. Cancel
          anytime.
        </h2>
        <div className="h-[52px] w-full flex justify-center gap-2">
          <button className="py-4 px-[35px] rounded-full bg-black text-white text-[13px] font-bold">
            GET STARTED
          </button>
          <button className="py-4 px-[35px] rounded-full text-white text-[13px] font-bold border-2 border-white">
            SEE OTHER PLANS
          </button>
        </div>
        <h6 className="text-white text-[11px]">
          <span className="underline">Terms and conditions apply. </span>
          <span>
            1 month free not available for users who have already tried Premium.
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Banner;

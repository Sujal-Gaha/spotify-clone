import { LogoIcon } from "../icons/premium/logo";
import { footerData } from "@/constants/Premium/footer";
import { EarthIcon } from "@/components/icons/premium/earth";
import { InstagramIcon } from "@/components/icons/premium/instagram";
import { TwitterIcon } from "@/components/icons/premium/twitter";
import { FacebookIcon } from "@/components/icons/premium/facebook";

export const FooterPremium = () => {
  return (
    <div className="w-full pt-20 pb-[50px] px-[135px] bg-black">
      <div className="h-[424px] w-fullflex flex-col">
        <FooterTopLayout />
        <FooterBottomLayout />
      </div>
    </div>
  );
};

const FooterTopLayout = () => {
  return (
    <div className="h-full flex justify-between text-lessFocusColour text-xs">
      <div className="flex gap-12">
        <LogoIcon />
        <div className="w-[585px] h-full flex">
          {footerData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 h-full w-full pt-4 px-[15px]"
            >
              <div className="uppercase font-bold">{data.title}</div>
              <div className="flex flex-col gap-[18px] text-base font-normal text-white">
                {data.links.map((link, index) => (
                  <span key={index}>{link}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex gap-[15px]">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
        </div>
        <div className="flex gap-[0.5px] items-center justify-end py-[13px] px-[4.3px]">
          <EarthIcon /> <span>Nepal (English)</span>
        </div>
      </div>
    </div>
  );
};

const FooterBottomLayout = () => {
  return (
    <div className="h-[39px] flex justify-between text-lessFocusColour text-xs leading-3">
      <div className="px-4 py-3 flex items-center gap-6">
        <span>Legal</span>
        <span>Privacy Center</span>
        <span>Privacy Policy</span>
        <span>Cookies</span>
        <span>About Ads</span>
      </div>
      <div>&copy; 2024 Spotify YZ</div>
    </div>
  );
};

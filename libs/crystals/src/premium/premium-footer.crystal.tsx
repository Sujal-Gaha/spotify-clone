import { footerData } from '@spotify-clone/libs/inerts';
import { EarthQuark, FacebookQuark, InstagramQuark, LogoQuark, TwitterQuark } from '@spotify-clone/libs/quarks';

export const PremiumFooter = () => {
  return (
    <div className="w-full pt-20 pb-[50px] px-[135px] bg-black">
      <div className="h-[424px] w-fullflex flex-col">
        <div className="h-full flex justify-between text-lessFocusColour text-xs">
          <div className="flex gap-12">
            <LogoQuark />
            <div className="w-[585px] h-full flex">
              {footerData.map((data, index) => (
                <div key={index} className="flex flex-col gap-6 h-full w-full pt-4 px-[15px]">
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
              <InstagramQuark />
              <TwitterQuark />
              <FacebookQuark />
            </div>
            <div className="flex gap-[0.5px] items-center justify-end py-[13px] px-[4.3px]">
              <EarthQuark /> <span>Nepal (English)</span>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

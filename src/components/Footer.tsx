import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-[403px] w-full pt-10">
      <div className="h-[363px] w-full pt-2 px-8 pb-10 flex flex-col justify-between">
        <div className="h-[212px] w-full flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-semibold">Company</h1>
            <div className="flex flex-col gap-1 text-lessFocusColour">
              <p>About</p>
              <p>Jobs</p>
              <p>For the Record</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-semibold">Communities</h1>
            <div className="flex flex-col gap-1 text-lessFocusColour">
              <p>For Artists</p>
              <p>Developers</p>
              <p>Advertising</p>
              <p>Investors</p>
              <p>Vendors</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-semibold">Useful links</h1>
            <div className="flex flex-col gap-1 text-lessFocusColour">
              <p>Support</p>
              <p>Free Mobile App</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-semibold">Ongaku Plans</h1>
            <div className="flex flex-col gap-1 text-lessFocusColour">
              <p>Premium Individual</p>
              <p>Premium Duo</p>
              <p>Premium Family</p>
              <p>Premium Student</p>
              <p>Ongaku Free</p>
            </div>
          </div>
          <div className="flex gap-5 text-white text-[33px] pt-1 pl-20">
            <FaInstagram className="hover:text-lessFocusColour cursor-pointer" />
            <FaXTwitter className="hover:text-lessFocusColour cursor-pointer" />
            <FaFacebook className="hover:text-lessFocusColour cursor-pointer" />
          </div>
        </div>
        <div className="border-t pt-16 text-lessFocusColour flex justify-between text-sm">
          <div className="flex gap-4">
            <p>Illegal</p>
            <p>Ongaku & Privacy Center</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>About Ads</p>
            <p>Accessibility</p>
          </div>
          <div>2024 Ongaku YZ</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

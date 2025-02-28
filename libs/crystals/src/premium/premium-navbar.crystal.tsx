import { LogoQuark } from '@spotify-clone/libs/quarks';

export const PremiumNavbar = () => {
  return (
    <nav className="h-20 w-full py-5 bg-black flex justify-around items-center sticky top-0">
      <LogoQuark />
      <div className="flex items-center text-white gap-9 font-bold">
        <p>Premium</p>
        <p>Support</p>
        <p>Download</p>
        <div className="h-4 w-[1px] bg-white"></div>
        <p className="text-signInAndLogInTextColour">Sign up</p>
        <p className="text-signInAndLogInTextColour">Log in</p>
      </div>
    </nav>
  );
};

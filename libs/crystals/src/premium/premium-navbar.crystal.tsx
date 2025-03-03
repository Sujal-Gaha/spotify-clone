import { _FULL_ROUTES } from '@spotify-clone/libs/catalysts';
import { LogoQuark } from '@spotify-clone/libs/quarks';
import { Link } from 'react-router-dom';

export const PremiumNavbar = () => {
  return (
    <nav className="h-20 w-full py-5 bg-black flex justify-around items-center sticky top-0">
      <Link to={_FULL_ROUTES.HOME}>
        <LogoQuark />
      </Link>
      <div className="flex items-center text-white gap-9 font-bold">
        <p>Premium</p>
        <p>Support</p>
        <p>Download</p>
        <div className="h-4 w-[1px] bg-white"></div>
        <Link to={_FULL_ROUTES.REGISTER} className="text-signInAndLogInTextColour hover:text-white">
          Sign up
        </Link>
        <Link to={_FULL_ROUTES.LOGIN} className="text-signInAndLogInTextColour hover:text-white">
          Log in
        </Link>
      </div>
    </nav>
  );
};

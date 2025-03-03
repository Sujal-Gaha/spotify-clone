import { _FULL_ROUTES } from '@spotify-clone/libs/catalysts';
import { AppleLoginQuark, FacebookLoginQuark, GoogleLoginQuark, LogoDarkQuark } from '@spotify-clone/libs/quarks';
import { Link } from 'react-router-dom';

const ContinueWithExternalService = () => {
  return (
    <div className="flex flex-col gap-y-2.5">
      <button className="bg-[#1877F2] text-white text-sm font-bold uppercase flex items-center justify-center gap-x-2.5 py-3 rounded-full border">
        <FacebookLoginQuark />
        Continue With Facebook
      </button>
      <button className="bg-black text-white text-sm font-bold uppercase flex items-center justify-center gap-x-2.5 py-3 rounded-full border">
        <AppleLoginQuark />
        Continue With Apple
      </button>
      <button className="bg-white text-[#6A6A6A] text-sm font-bold uppercase flex items-center justify-center gap-x-2.5 py-3 rounded-full border border-[#878787]">
        <GoogleLoginQuark />
        Continue With Google
      </button>
      <div className="flex items-center gap-4">
        <div className="h-0.5 bg-[#D9DADC] w-full"></div>
        <p className="text-black font-bold text-sm">OR</p>
        <div className="h-0.5 bg-[#D9DADC] w-full"></div>
      </div>
    </div>
  );
};

export const LoginPage = () => {
  return (
    <main>
      <nav className="p-6 flex items-center justify-center border-b border-[#D9DADC]">
        <LogoDarkQuark />
      </nav>
      <div className="flex items-center justify-center mt-8 2xl:mt-32 pb-16">
        <section className="w-[450px]">
          <ContinueWithExternalService />
          <form>
            <div className="flex flex-col gap-y-4 w-full mt-4">
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="email-username" className="text-black font-bold text-[13px]">
                  Email address or username
                </label>
                <input
                  id="email-username"
                  type="text"
                  className="rounded-md p-3.5 border border-[#878787] placeholder:text-[#878787]"
                  placeholder="Email address or username"
                />
              </div>
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="password" className="text-black font-bold text-[13px]">
                  Password
                </label>
                <input
                  id="password"
                  type="text"
                  className="rounded-md p-3.5 border border-[#878787] placeholder:text-[#878787]"
                  placeholder="Password"
                />
              </div>
              <Link to={_FULL_ROUTES.FORGOT_PASSWORD} className="text-lg font-medium underline">
                Forgot your password?
              </Link>
              <div className="flex justify-between">
                <div className="space-x-2">
                  <input type="checkbox" />
                  <label htmlFor="">Remember me</label>
                </div>
                <button className="rounded-full bg-[#1ED760] uppercase font-bold text-base py-4 px-8">Log In</button>
              </div>
            </div>
            <div className="mt-[22px] mb-[30px]">
              <div className="h-0.5 bg-[#D9DADC] w-full"></div>
            </div>
            <div className="flex flex-col justify-between items-center gap-y-6 w-full">
              <p className="font-bold text-black text-[17px]">Don't have an account?</p>
              <Link to={_FULL_ROUTES.REGISTER} className="w-full">
                <button className="bg-white w-full text-[#6A6A6A] text-sm font-bold uppercase flex items-center justify-center gap-x-2.5 py-3 rounded-full border border-[#878787]">
                  Sign Up For Spotify
                </button>
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

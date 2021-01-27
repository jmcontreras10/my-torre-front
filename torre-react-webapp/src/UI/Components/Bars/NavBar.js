import {
  useScreenContext,
  useLoadingContext,
} from "../../../Modules/Screen/ScreenProvider";

import { useUserHandlerContext } from "../../../Modules/User/UserProvider";

const NavBar = () => {
  const { setScreen } = useScreenContext();
  const { logout } = useUserHandlerContext();
  const { setGlobalLoading } = useLoadingContext();

  const logOut = async () => {
    try {
      setGlobalLoading(true);
      await logout();
      setScreen(0);
      setGlobalLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="fixed z-20 w-full">
      <div className="w-full bg-secondary flex flex-row justify-between items-center shadow-2xl">
        <h1 className="text-4xl text-white">
          <img
            className="p-2"
            src="https://res.cloudinary.com/torre-technologies-co/image/upload/v1601512321/origin/bio/organizations/Torre_logo_small_uubm3e.png"
            alt="Torre logo"
          />
        </h1>

        <h1 className="text-5xl mb-3">Your Network</h1>
        <button
          className="text-onPrimary justify-self-end bg-primary ml-3 p-2 rounded-lg mx-5 px-5"
          onClick={logOut}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

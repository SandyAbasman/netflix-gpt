import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");

        //navigate to error page
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="fixed w-full  px-8 flex justify-between items-center py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex  gap-2 items-center">
          <p className="text-white font-bold">{user.displayName}</p>

          <select
            className="bg-black p-2 rounded-md text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifer} value={lang.identifer}>
                {lang.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleGptSearchClick}
            className=" bg-purple-500 p-2 rounded-md text-white mx-4"
          >
            Gpt Search
          </button>
          <img
            className=" w-6 h-6  rounded-full"
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://avatars.githubusercontent.com/u/74963378?v=4"
            }
            alt="user icon"
          />
          <button
            onClick={handleSignOut}
            className=" font-bold text-white hover:text-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;

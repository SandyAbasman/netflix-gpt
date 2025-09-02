import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full px-4 md:px-8 flex justify-between items-center py-2 bg-gradient-to-b from-black z-50">
      {/* Logo */}
      <div className="flex relative justify-center items-center">
        <img
          className="w-32 md:w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        <p className="text-white hidden lg:block lg:left-40 absolute text-5xl font-semibold">
          GPT
        </p>
      </div>

      {user && (
        <>
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 items-center">
            <img
              className="w-8 h-8 rounded-full"
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://avatars.githubusercontent.com/u/74963378?v=4"
              }
              alt="user icon"
            />

            <p className="text-white font-bold text-sm lg:text-base">
              {user.displayName}
            </p>

            <button
              onClick={handleGptSearchClick}
              className="  flex items-center gap-2 
                   px-3 py-2 rounded-full backdrop-blur-md bg-white/20 
                   border border-white/30 text-red-100 hover:bg-white/30 transition"
            >
              {!showGptSearch ? "GPT Search" : "Homepage"}
            </button>

            {showGptSearch && (
              <select
                className="  flex items-center gap-2 
                   px-3 py-2 rounded-full border-r-8 text-red-700
                    backdrop-blur-md bg-white/20 
                   border border-white/0  hover:bg-white/30 transition"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifer} value={lang.identifer}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleSignOut}
              className="font-bold text-white hover:text-red-600 text-sm"
            >
              Sign Out
            </button>
          </div>

          {/* Mobile Menu (shown when menu button is clicked) */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 p-2 flex flex-col items-center gap-2">
              <p className="text-white font-bold">{user.displayName}</p>

              {showGptSearch && (
                <select
                  className="bg-black p-2 rounded-md text-white w-full max-w-xs"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifer} value={lang.identifer}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}

              <button
                onClick={handleGptSearchClick}
                className="bg-purple-500 p-2 rounded-md text-white w-full max-w-xs"
              >
                {!showGptSearch ? "GPT Search" : "Homepage"}
              </button>

              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://avatars.githubusercontent.com/u/74963378?v=4"
                  }
                  alt="user icon"
                />

                <button
                  onClick={handleSignOut}
                  className="font-bold text-white hover:text-red-600"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Header;

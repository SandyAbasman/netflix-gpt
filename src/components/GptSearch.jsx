import { useSelector } from "react-redux";
import { BG_url } from "../utils/constant";
import { GptMovieSuggestion } from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  const { showGptSuggestion, isLoading } = useSelector((store) => store.gpt);

  return (
    <div className="w-full min-h-screen relative">
      {/* Background Image with responsive sizing */}
      <div className="fixed inset-0 ">
        <img
          alt="background"
          src={BG_url}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <GptSearchBar />

        {showGptSuggestion && (
          <div className="px-2 md:px-0">
            {isLoading ? (
              <div className="w-full bg-black/70 py-20 flex justify-center items-center md:h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : (
              <GptMovieSuggestion />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearch;

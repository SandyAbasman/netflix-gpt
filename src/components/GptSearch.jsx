import { useSelector } from "react-redux";
import { BG_url } from "../utils/constant";
import { GptMovieSuggestion } from "./GptMovieSuggestion";

import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  const { showGptSuggestion, isLoading } = useSelector((store) => store.gpt);

  return (
    <div className="w-full">
      <div className="fixed  h-screen top-0 -z-10">
        <img alt="logo" src={BG_url} />
      </div>
      <div>
        <GptSearchBar />

        {showGptSuggestion && (
          <div>
            {" "}
            {isLoading ? (
              <div className=" w-full bg-black/70 py-20 flex justify-center items-start h-screen">
                <div className="animate-spin  rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : (
              <GptMovieSuggestion />
            )}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearch;

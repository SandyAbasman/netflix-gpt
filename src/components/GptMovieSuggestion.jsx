import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList2";
import { toggleGptSuggestion } from "../utils/gptSlice";

export const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  const dispatch = useDispatch();

  if (!movieNames || !movieResults) {
    return null;
  }

  const handleShowGptSuggestion = () => {
    dispatch(toggleGptSuggestion());
  };

  return (
    <div className="p-2 md:p-4 w-full bg-black/90 md:bg-black/70 my-2 md:my-4 rounded-lg md:rounded-none">
      <div
        onClick={handleShowGptSuggestion}
        className="text-white hover:underline cursor-pointer px-2 md:px-4 py-2 flex justify-end items-center"
      >
        <p className="text-sm md:text-base bg-red-700 rounded-full w-6 h-6 flex items-center justify-center">
          ×
        </p>
      </div>
      <div className="max-h-[70vh] overflow-y-auto">
        {movieNames.map((movieName, index) => (
          <div key={movieName} className="mb-4 last:mb-0">
            <MovieList title={movieName} movies={movieResults[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

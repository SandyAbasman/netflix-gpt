import { useDispatch, useSelector } from "react-redux";
import MovieList from "./movieList";
import { toggleGptSuggestion } from "../utils/gptSlice";

export const GptMovieSuggestion = () => {
  const { movieResults, movieNames} = useSelector(
    (store) => store.gpt
  );
  const dispatch = useDispatch();

  
  if (!movieNames || !movieResults) {
    return;
  }

  const handleShowGptSuggestion = () => {
    dispatch(toggleGptSuggestion());
  };

  return (
    <div className="p-4 w-full bg-black/70 my-4">
      <div
        onClick={handleShowGptSuggestion}
        className="text-white hover:underline cursor-pointer px-4 flex justify-end"
      >
        <p>Close X</p>
      </div>
      <div>
        {movieNames.map((movieNames, index) => (
          <MovieList
            key={movieNames}
            title={movieNames}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

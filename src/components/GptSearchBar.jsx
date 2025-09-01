import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMoviesResult, setLoading } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    dispatch(setLoading(false));
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    //make an api to open api and get result
    dispatch(setLoading(true));

    const gptQuery = `act as a movie recommendation system based on the query: ${searchText.current.value}, don't recommend the same movies every time. Only give me names of 5 movies, comma separated like the example result given ahead. Example result: Sholay, Money Heist, Rambo, Snake in the Monkey Shadow, Death Role`;

    const gptResult = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResult.choices) {
      //handle error
    }

    console.log(gptResult.choices[0].message.content);

    //convert the movies to an array
    const gptMovies = gptResult.choices[0]?.message?.content.split(",");

    //for each movie, search tmdb api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    ///[Promise,Promise,Promise,Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMoviesResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="flex pt-[30%] md:pt-[8%] px-4 justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/4 lg:w-1/2 bg-black/70 md:bg-black/50 py-2 px-4 rounded-md gap-2 flex flex-col sm:flex-row"
      >
        <input
          ref={searchText}
          type="text"
          className="py-3 px-4 w-full rounded mb-2 sm:mb-0"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          type="submit"
          onClick={handleGptSearchClick}
          className="bg-red-700 py-3 sm:py-1 capitalize px-6 sm:px-10 font-bold rounded-md text-white whitespace-nowrap"
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

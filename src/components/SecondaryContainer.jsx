import { useSelector } from "react-redux";
import MovieList from "./movieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black py-10 px-8">
      <div className=" py-4 -mt-52 w-full relative flex flex-col  h-auto">
        <MovieList title={"Top Rated"} movies={movies.topRated} />
        <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;

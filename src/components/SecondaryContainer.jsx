import { useSelector } from "react-redux";
import MovieList from "./movieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black py-4 md:py-8 px-2 md:px-4 lg:px-8 -mt-20 md:-mt-32 lg:-mt-40 xl:-mt-52 relative z-10">
      <div className="flex flex-col gap-6 md:gap-8">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRated} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;

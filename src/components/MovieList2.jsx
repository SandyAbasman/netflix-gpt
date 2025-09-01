import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="py-2 md:py-4 px-2 md:px-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-white py-2 md:py-4 font-bold">
        {title}
      </h1>

      <div className="relative">
        <div className="flex overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-2 md:gap-4 pl-2 md:pl-4 pr-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>

        {/* Gradient fade effect for scroll indication */}
        <div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-black/80 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MovieList;

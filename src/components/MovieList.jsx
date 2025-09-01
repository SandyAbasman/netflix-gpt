import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  



  return (
    <div className="py-1 px-2 h-auto">
      <h1 className="text-2xl text-white py-4">{title}</h1>

      <div className="flex  h-auto overflow-x-scroll scrollbar-hide">
        <div className="flex px-4 h-auto">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

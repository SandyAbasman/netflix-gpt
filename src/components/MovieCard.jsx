import { useNavigate } from "react-router";
import { IMG_CDN } from "../utils/constant";

function MovieCard({ posterPath, movieID }) {
  const navigate = useNavigate();

  if (!posterPath) return null;

  return (
    <div
      onClick={() => navigate(`/movie/${movieID}`)}
      className="cursor-pointer flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 pr-2 md:pr-3"
    >
      <img
        alt="movieCard"
        src={IMG_CDN + posterPath}
        className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

export default MovieCard;

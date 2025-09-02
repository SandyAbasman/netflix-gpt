import { useNavigate } from "react-router";
import { IMG_CDN } from "../utils/constant";

function MovieCard({ posterPath, movieID }) {
  const navigate = useNavigate();

  if (!posterPath) {
    return null;
  }
  return (
    <div
      onClick={() => navigate(`/movie/${movieID}`)}
      className="pr-2 md:pr-4 cursor-pointer w-[8rem] sm:w-[9rem] md:w-[10rem] lg:w-[11rem] xl:w-[12rem] flex-shrink-0"
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

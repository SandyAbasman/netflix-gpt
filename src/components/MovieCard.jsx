import { IMG_CDN } from "../utils/constant";

function MovieCard({ posterPath }) {
  return (
    <div className=" pr-2 w-[10rem] h-full">
      <img alt="movieCard" src={IMG_CDN + posterPath} />
    </div>
  );
}

export default MovieCard;

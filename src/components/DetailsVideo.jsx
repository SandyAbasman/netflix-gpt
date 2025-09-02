import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN } from "../utils/constant";
import { useParams, useNavigate } from "react-router";
import { Calendar, Star, Clock, ArrowLeft } from "lucide-react";

const DetailsVideo = () => {
  const tmdbKey = import.meta.env.VITE_TMDB_KEY;
  const { id: movieId } = useParams();
  const navigate = useNavigate();
  const [trailer, setTrailer] = useState(null);
  const [movieDetail, setMovieDetail] = useState(null);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${tmdbKey}&language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      if (!json.results || json.results.length === 0) return;

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const selectedTrailer = filterData.length
        ? filterData[0]
        : json.results[0];

      setTrailer(selectedTrailer);
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const getMovieDetails = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdbKey}&language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      if (!json) return;
      setMovieDetail(json);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  useEffect(() => {
    getMovieDetails();
    getMovieVideos();
  }, [movieId]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Trailer OR Poster */}
      {trailer ? (
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playsinline=1&rel=0&playlist=${trailer.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : movieDetail?.poster_path ? (
        <img
          alt={movieDetail?.title}
          src={IMG_CDN + movieDetail.poster_path}
          className="absolute inset-0 w-full h-full object-scale-down"
          loading="lazy"
        />
      ) : (
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          Loading...
        </p>
      )}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-6 z-20 flex items-center gap-2 
                   px-3 py-2 rounded-full backdrop-blur-md bg-white/20 
                   border border-white/30 text-white hover:bg-white/30 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Back</span>
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start h-full px-4 md:px-16 pt-[18%] text-white">
        {/* Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          {movieDetail?.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm sm:text-base text-white/90">
          {/* Year */}
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-white/70" />
            <span>
              {movieDetail?.release_date
                ? new Date(movieDetail.release_date).getFullYear()
                : "N/A"}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>
              {movieDetail?.vote_average
                ? movieDetail.vote_average.toFixed(1)
                : "N/A"}
            </span>
          </div>

          {/* Runtime */}
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-white/70" />
            <span>
              {movieDetail?.runtime
                ? `${Math.floor(movieDetail.runtime / 60)}h ${
                    movieDetail.runtime % 60
                  }m`
                : "N/A"}
            </span>
          </div>
        </div>

        {/* Overview */}
        <p className="mt-4 text-sm sm:text-base md:text-sm lg:text-md max-w-xl text-white/90">
          {movieDetail?.overview}
        </p>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mt-4">
          {movieDetail?.genres?.map((genre) => (
            <span
              key={genre.id}
              className="backdrop-blur-lg bg-white/20 border border-white/20 
                         shadow-md rounded-full px-3 py-1 text-xs sm:text-sm"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsVideo;

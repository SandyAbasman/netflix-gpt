import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="py-2 md:py-4 px-2 md:px-6">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-white py-2 font-bold">
        {title}
      </h1>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0} // default space between slides
        slidesPerView={4} // default for mobile
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 8 },
          640: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 12 },
          1024: { slidesPerView: 5, spaceBetween: 16 },
          1280: { slidesPerView: 6, spaceBetween: 18 },
          1536: { slidesPerView: 7, spaceBetween: 20 },
        }}
        className="pb-6"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movieID={movie.id} posterPath={movie.poster_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;

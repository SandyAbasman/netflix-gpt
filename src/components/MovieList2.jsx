import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="py-1 md:py-4 px-2 md:px-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-white py-2 md:py-4 font-bold">
        {title}
      </h1>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 4 },
          768: { slidesPerView: 4, spaceBetween: 5 },
          1024: { slidesPerView: 5, spaceBetween: 6 },
          1280: { slidesPerView: 6, spaceBetween: 6 },
        }}
        className="pb-6 custom-swiper"
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

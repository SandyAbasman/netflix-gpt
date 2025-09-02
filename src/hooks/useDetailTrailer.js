import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/constant";
import { addMovieDetail } from "../utils/movieSlice";

const useDetailTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    console.log(json.results);

    // const filterData = json.results.filter((video) => video.type === "Trailer");
    // const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieDetail(json.results));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useDetailTrailer;

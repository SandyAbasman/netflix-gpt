import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/constant";
import { addTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  // Fetch Data from TMDB API and update store

  //update store
  const dispatch = useDispatch();

  const topRated = useSelector((store) => store.movies.TopRated);


  // Fetch Data
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      

      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !topRated && getTopRated();
  }, []);
};

export default useTopRated;

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRated: null,
    trailerVideo: null,
    movieDetail: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieDetail: (state, action) => {
      state.movieDetail = action.movieDetail;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRated,
  addTrailerVideo,
  addMovieDetail,
} = movieSlice.actions;
export default movieSlice.reducer;

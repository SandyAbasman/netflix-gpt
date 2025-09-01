import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    showGptSuggestion: true,
    isLoading: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
    toggleGptSuggestion: (state) => {
      state.showGptSuggestion = !state.showGptSuggestion;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMoviesResult,
  toggleGptSuggestion,
  setLoading,
} = gptSlice.actions;

export default gptSlice.reducer;

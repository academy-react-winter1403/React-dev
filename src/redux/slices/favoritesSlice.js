import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    newsFavorites: [],
    courseFavorites: [],
    displayedFavorites: [],
    searchQuery: "",
  },
  reducers: {
    setNewsFavorites: (state, action) => {
      state.newsFavorites = action.payload;
    },
    setCourseFavorites: (state, action) => {
      state.courseFavorites = action.payload;
    },
    setFilter: (state, action) => {
      const type = action.payload;
      if (type === "همه") {
        state.displayedFavorites = [
          ...state.newsFavorites,
          ...state.courseFavorites,
        ];
      } else if (type === "دوره ها") {
        state.displayedFavorites = [...state.courseFavorites];
      } else if (type === "اخبارها") {
        state.displayedFavorites = [...state.newsFavorites];
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export default favoritesSlice;

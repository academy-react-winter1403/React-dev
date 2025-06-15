import { createSlice } from "@reduxjs/toolkit";

const MyCommentsSlice = createSlice({
  name: "MyComments",
  initialState: {
    newsComments: [],
    courseComments: [],
    displayedComments: [],
    searchComments: "",
  },
  reducers: {
    setNewsComments: (state, action) => {
      state.newsComments = action.payload;
    },
    setCourseComments: (state, action) => {
      state.courseComments = action.payload;
    },
    setFilterComments: (state, action) => {
      const type = action.payload;
      if (type === "همه") {
        state.displayedComments = [
          ...state.newsComments,
          ...state.courseComments,
        ];
      } else if (type === "دوره ها") {
        state.displayedComments = [...state.courseComments];
      } else if (type === "اخبارها") {
        state.displayedComments = [...state.newsComments];
      }
    },
    setSearchComments: (state, action) => {
      state.searchComments = action.payload;
    },
  },
});

export default MyCommentsSlice;

import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    switchTheme: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;

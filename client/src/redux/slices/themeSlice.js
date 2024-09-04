import { createSlice } from "@reduxjs/toolkit";

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: getThemeFromLocalStorage(),
  reducers: {
    switchTheme: (state, action) => {
      state = action.payload;
      window.localStorage.setItem("theme", action.payload);
      return state;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;

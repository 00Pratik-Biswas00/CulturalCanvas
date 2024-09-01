import { createSlice } from "@reduxjs/toolkit";

const loginModalOpenSlice = createSlice({
  name: "user",
  initialState: false,
  reducers: {
    switchLoginModalOpen: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { switchLoginModalOpen } = loginModalOpenSlice.actions;

export default loginModalOpenSlice.reducer;

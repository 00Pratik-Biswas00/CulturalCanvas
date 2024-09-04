import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import authSlice from "./slices/authSlice";
import loginModalOpenSlice from "./slices/loginModalOpenSlice";

const store = configureStore({
  reducer: {
    user: authSlice,
    theme: themeSlice,
    loginModalOpen: loginModalOpenSlice,
  },
});

export default store;
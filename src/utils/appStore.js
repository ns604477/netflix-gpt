import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Ensure this file exists and is correctly implemented

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;

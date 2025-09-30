import { configureStore } from "@reduxjs/toolkit";

// Import your slices here
import authReducer from "./slices/authSlice";

// Create the Redux store with the reducer(s)
export const store = configureStore({
  reducer: {
    counter: authReducer, // This is where your slices will go
  },
});

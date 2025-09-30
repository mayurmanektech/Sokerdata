import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth", // Slice name
  initialState: {
    value: 0,
  },
  reducers: {},
});

// Export actions for dispatching
// export const {} = authSlice.actions;

// Export the reducer to be included in the store
export default authSlice.reducer;

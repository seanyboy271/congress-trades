import { createSlice } from "@reduxjs/toolkit";
import { senateReducers, initialState } from "./senate.reducers";
// Slice
export const senateSlice = createSlice({
  name: "senate",
  initialState,
  reducers: senateReducers,
});

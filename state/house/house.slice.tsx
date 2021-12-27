import { createSlice } from "@reduxjs/toolkit";
import { houseReducers, initialState } from "./house.reducers";
// Slice
export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: houseReducers,
});

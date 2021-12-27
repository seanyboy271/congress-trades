import { PayloadAction } from "@reduxjs/toolkit";
import { HouseEntry } from "../../models/data";

export const houseReducers = {
  loadDataSuccess: (state: HouseState, action: PayloadAction<HouseEntry[]>) => {
      state.data = action.payload as any;
      state.error = null;
  },
  loadDataFailure: (state: HouseState, action: PayloadAction<any>) => {
      state.data = [];
      state.error = action.payload;
  },
};

export interface HouseState {
  data: HouseEntry[]
  error: any;
}

export const initialState :HouseState = {
    data: [],
    error: null,
};

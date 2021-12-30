import { PayloadAction } from "@reduxjs/toolkit";
import { HouseEntry } from "../../models/data";

export const houseReducers = {
  loadDataSuccess: (state: HouseState, action: PayloadAction<HouseEntry[]>) => {
    state.data = action.payload as any;
    state.error = null;
  },
  loadDataFailure: (state: HouseState, action: PayloadAction<string>) => {
    state.data = [];
    state.error = action.payload;
  },
};

export interface HouseState {
  data: HouseEntry[] | null;
  error: any;
}

export const initialState: HouseState = {
  data: null,
  error: null,
};

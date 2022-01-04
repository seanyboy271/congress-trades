import { PayloadAction } from "@reduxjs/toolkit";
import { HouseEntry } from "../../models/data";

export const houseReducers = {
  loadDataSuccess: (state: HouseState, action: PayloadAction<HouseEntry[]>) => {
    state.data = action.payload;
    state.error = null;
    state.loading = false;
  },
  loadDataFailure: (state: HouseState, action: PayloadAction<string>) => {
    state.data = null;
    state.error = action.payload;
    state.loading = false;
  },
  dataLoading: (state: HouseState) => {
    state.loading = true;
  },
};

export interface HouseState {
  data: HouseEntry[] | null;
  error: any;
  loading: boolean;
}

export const initialState: HouseState = {
  data: null,
  error: null,
  loading: false,
};

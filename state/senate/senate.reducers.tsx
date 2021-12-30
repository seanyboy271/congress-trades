import { PayloadAction } from "@reduxjs/toolkit";
import { SenateEntry } from "../../models/data";

export const senateReducers = {
  loadDataSuccess: (
    state: senateState,
    action: PayloadAction<SenateEntry[]>
  ) => {
    state.data = action.payload as any;
    state.error = null;
  },
  loadDataFailure: (state: senateState, action: PayloadAction<string>) => {
    state.data = [];
    state.error = action.payload;
  },
};

export interface senateState {
  data: SenateEntry[] | null;
  error: any;
}

export const initialState: senateState = {
  data: null,
  error: null,
};

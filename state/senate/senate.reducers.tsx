import { PayloadAction } from "@reduxjs/toolkit";
import { SenateEntry } from "../../models/data";

export const senateReducers = {
  loadDataSuccess: (
    state: senateState,
    action: PayloadAction<SenateEntry[]>
  ) => {
    state.data = action.payload as any;
    state.error = null;
    state.loading = false;
  },
  loadDataFailure: (state: senateState, action: PayloadAction<string>) => {
    state.data = null;
    state.error = action.payload;
    state.loading = false;
  },
  dataLoading: (state: senateState) => {
    state.data = null;
    state.error = null;
    state.loading = false;
  },
};

export interface senateState {
  data: SenateEntry[] | null;
  error: any;
  loading: boolean;
}

export const initialState: senateState = {
  data: null,
  error: null,
  loading: false,
};

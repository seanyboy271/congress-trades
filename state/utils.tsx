import { RootState } from ".";

export const isLoading = (state: RootState) => {
  return state.house.loading || state.senate.loading;
};

export const hasData = (state: RootState) => {
  return !!state.house.data && !!state.senate.data;
};

export const hasError = (state: RootState) => {
  return !!state.house.error || !!state.senate.error;
};

export const hasSenateData = (state: RootState) => {
  return !!state.senate.data;
};
export const hasHouseData = (state: RootState) => {
  return !!state.house.data;
};

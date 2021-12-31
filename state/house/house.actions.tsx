import { Dispatch } from "redux";
import { houseSlice } from "./house.slice";
// Actions
const { loadDataSuccess, loadDataFailure, dataLoading } = houseSlice.actions;
export const loadHouseData = () => async (dispatch: Dispatch) => {
  try {
    dispatch(dataLoading());
    const url = process.env.NEXT_PUBLIC_HOUSE_URL ?? "";
    const res = await fetch(url);
    const data = await res.json();
    if (data.entries) {
      return dispatch(loadDataSuccess(data.entries));
    }
  } catch (e: any) {
    return dispatch(loadDataFailure(e.message));
  }
};

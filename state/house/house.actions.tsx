import { Dispatch } from "redux";
import { houseSlice } from "./house.slice";
// Actions
const { loadDataSuccess, loadDataFailure } = houseSlice.actions;
export const loadHouseData = () => async (dispatch: Dispatch) => {
  try {
    const url = process.env.NEXT_PUBLIC_HOUSE_URL ?? "";
    const res = await fetch(url);
    const data = await res.json();
    if (data.entries) {
      return dispatch(loadDataSuccess(data.entries));
    }
  } catch (e) {
    return dispatch(loadDataFailure(e));
  }
};

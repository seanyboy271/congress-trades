import { Dispatch } from "redux";
import { senateSlice } from "./senate.slice";
// Actions
const { loadDataSuccess, loadDataFailure, dataLoading } = senateSlice.actions;
export const loadSenateData = () => async (dispatch: Dispatch) => {
  dispatch(dataLoading());
  try {
    const url = process.env.NEXT_PUBLIC_SENATE_URL ?? "";
    const res = await fetch(url);
    const data = await res.json();
    if (data.entries) {
      return dispatch(loadDataSuccess(data));
    }
  } catch (e: any) {
    return dispatch(loadDataFailure(e.message));
  }
};

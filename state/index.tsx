import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { houseSlice } from "./house/house.slice";
import { senateSlice } from "./senate/senate.slice";
const reducer = combineReducers({
  house: houseSlice.reducer,
  senate: senateSlice.reducer,
});
const store = configureStore({
  reducer,
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

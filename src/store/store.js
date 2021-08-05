import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { DashboardSlice } from "../pages/Dashboard/Dashboard.Slice";

const rootReducer = combineReducers({
  dashboard: DashboardSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
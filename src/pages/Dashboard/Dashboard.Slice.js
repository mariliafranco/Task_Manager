import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tasksListApi } from "../../services/dashboard.api";

const initialState = {
  taskList: [],
  refreshList: false,
  modalIsOpen: false,
};

export const asyncActions = {
  GET_LIST: createAsyncThunk(
    "https://https://fitec-teste-frontend.free.beeceptor.com/api/dashboard",
    async () => {
      const listResult = await tasksListApi.getAll();

      return listResult.data;
    }
  ),
};

export const DashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    TOOGLE_MODAL: (state, action) => {
      state.modalIsOpen = action.payload
    },
    SAVE_NEW_TASK:(state, action) => {
      state.taskList = action.payload.push()
    }
  },
  extraReducers: (builder) => [
    builder.addCase(asyncActions.GET_LIST.fulfilled, (state, action) => {
      state.taskList = action.payload;
      state.refreshList = true;
    }),
  ],
});

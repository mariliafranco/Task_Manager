import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tasksListApi } from "../../services/dashboard.api";

const initialState = {
  taskList: [],
  refreshList: false,
  modalIsOpen: false,
};

export const asyncActions = {
  GET_LIST: createAsyncThunk("GET_TASK_LIST", async () => {
    const listResult = await tasksListApi.getAll();

    // eslint-disable-next-line no-eval
    return eval(listResult.data);
  }),
};

export const DashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    TOOGLE_MODAL: (state, action) => {
      state.modalIsOpen = action.payload;
    },
    SAVE_NEW_TASK: (state, action) => {
      console.log(action.payload)
      state.taskList = state.taskList.concat(action.payload);
      state.modalIsOpen = !state.modalIsOpen;
      state.refreshList = true
    },
  },
  extraReducers: (builder) => [
    builder.addCase(asyncActions.GET_LIST.fulfilled, (state, action) => {
      state.refreshList = true;
      state.taskList = action.payload;
    }),
  ],
});

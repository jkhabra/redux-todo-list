/* eslint-disable */
import { REHYDRATE } from "redux-persist/es/constants";
import { createSlice } from "@reduxjs/toolkit";

export interface TodoProps {
  count: number;
  value: number
}

const counterReducer = createSlice({
  name: "todo",
  initialState: {
    value: 0,
    count:0,

  },
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
});

// case under reducers becomes an action
export const { increase, decrease } = counterReducer.actions;
export default counterReducer.reducer;

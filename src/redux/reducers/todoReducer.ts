/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

export interface TodoItenProp {
  id: number;
  text: string;
  isDone: boolean;
}

export interface TodoProps {
  todoList: TodoItenProp[];
  count: number;
}

const initialState: TodoProps = {
  todoList: [],
  count: 0,
};

const todoReducer = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      console.log("---pay--", action, state);
      const newTask: TodoItenProp = {
        id: Math.random(),
        isDone: false,
        text: action.payload.text,
      };
      state.todoList = [...state.todoList, newTask];
    },
    updateTask: (state, action) => {
      const findItem = state.todoList.find(
        (item) => item.id === action.payload.id
      );
      const filtered = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
      if (findItem) {
        state.todoList = [
          ...filtered,
          { ...findItem, isDone: !findItem.isDone },
        ];
      }
    },
    deleteTask: (state, action) => {
      const filtered = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
      state.todoList = filtered;
    },
  },
});

// case under reducers becomes an action
export const { addTask, updateTask, deleteTask } = todoReducer.actions;
export default todoReducer.reducer;

/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

export interface TodoItenProp {
  id: number;
  text: string;
  isDone: boolean;
}

export interface TodoProps {
  todoList: TodoItenProp[];
}

const initialState: TodoProps = {
  todoList: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask: TodoItenProp = {
        id: Math.random(),
        isDone: false,
        text: action.payload.text,
      };
      state.todoList = [...state.todoList, newTask];
    },
    updateTask: (state, action) => {
      const updateTodo = state.todoList.map((item) =>
        item.id === action.payload.id ? { ...item, isDone: !item.isDone } : item
      );
      state.todoList = updateTodo;
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

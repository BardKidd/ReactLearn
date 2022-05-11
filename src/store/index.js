import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slices/todo";

const store = configureStore({
  reducer: {
    todoReducer, // 接收 reducer
  },
});

export default store;

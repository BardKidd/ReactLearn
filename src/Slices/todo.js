import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};
export const todoSlice = createSlice({
  // 都會有這三個屬性。
  name: "todo", // 該 Slice 的名稱
  initialState, // 初始值
  reducers: {
    // 自動產生 Action
    //  1. state 當下的狀態
    // 2. action 對應的動作
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    addTimestamp: (state) => {
      state.todoList.push(Date.now().toString());
    },
  }, // 接收 Action，幾個 function 就要定義幾個 reducers
});

export const { addTodo, addTimestamp } = todoSlice.actions; // 輸出 action

export default todoSlice.reducer; // 預設傳出 reducer

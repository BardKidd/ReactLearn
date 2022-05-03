// 有需要就從該資料夾內引用，確保 action 指令來源只有這裡。
export const ADD_TODO = "ADD_TODO";

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

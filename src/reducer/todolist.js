import * as actions from "../Action/todolist";
// 將資料結構列出以及預設初始資料。
const initState = {
  todoList: ["first", "second"],
};

// 初始資料、對該資料的動作
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload.todo],
      };
    default:
      return state;
  }
};

export default todoReducer;

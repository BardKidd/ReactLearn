// 將資料結構列出以及預設初始資料。
const initState = {
  todoList: ["first", "second"],
};

// 初始資料、對該資料的動作
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
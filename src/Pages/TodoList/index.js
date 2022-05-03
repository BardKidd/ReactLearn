import React from "react";

const TodoListContext = React.createContext();

const Task = (props) => {
  const { task } = props;
  return <li>{task}</li>;
};

const TodoList = () => {
  const todoList = React.useContext(TodoListContext);
  return todoList.map((task) => {
    <ul key={task}>
      <Task task={task} />
    </ul>;
  });
};

const TodoListPage = () => (
  <div>
    <div>其他內容甚麼的</div>
    <TodoList></TodoList>
  </div>
);

const CurrentTask = () => {
  const todoList = React.useContext(TodoListContext);
  return <div>{`下一件要做的事情: ${todoList[0]}`}</div>;
};

const Main = () => {
  const [todoList] = React.useState(["first", "second"]);
  return (
    <TodoListContext.Provider value={todoList}>
      <div>
        <span>{`代辦事項數: ${todoList.length}`}</span>
        <TodoListPage></TodoListPage>
        <CurrentTask></CurrentTask>
      </div>
    </TodoListContext.Provider>
  );
};

export default Main;

import React from "react";
import { useSelector } from "react-redux";

const Task = (props) => {
  const { task } = props;
  return <li>{task}</li>;
};

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);
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
  const todoList = useSelector((state) => state.todoList);
  return <div>{`下一件要做的事情: ${todoList[0]}`}</div>;
};

const MainRedux = () => {
  const todoList = useSelector((state) => state.todoList);
  return (
    <div>
      <span>{`代辦事項數: ${todoList.length}`}</span>
      <TodoListPage></TodoListPage>
      <CurrentTask></CurrentTask>
    </div>
  );
};

export default MainRedux;

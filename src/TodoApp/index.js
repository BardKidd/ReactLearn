import { useState } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { addTimestamp, addTodo } from "../Slices/todo";
const Wrapper = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h2`
  font-weight: 900;
  margin-top: 2rem;
`;

const NoteInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: 0.5rem;
  box-sizing: border-box;
`;

const SubmitBtn = styled.button`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  border: 0;
  font-weight: 900;
  margin-top: 1rem;
  :active {
    background: #000000be;
  }
`;

const Item = styled.div`
  margin-top: 1rem;
  > b {
    margin-right: 0.5rem;
  }
`;

function TodoApp() {
  const todoReducer = useAppSelector((state) => state.todoReducer);
  const todoList = todoReducer.todoList;
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  return (
    <Wrapper>
      <Title>TODO LIST</Title>
      <NoteInput
        value={text}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <SubmitBtn
        onClick={() => {
          if (!text) {
            alert("請輸入一些訊息");
            return;
          }
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Submit
      </SubmitBtn>
      <SubmitBtn
        onClick={() => {
          dispatch(addTimestamp());
        }}
      >
        Record Timestamp
      </SubmitBtn>
      <Title>List</Title>

      {todoList.map((data, index) => {
        return (
          <Item key={`${index}${data}`}>
            <b>{index + 1}</b>
            {data}
          </Item>
        );
      })}
    </Wrapper>
  );
}

export default TodoApp;

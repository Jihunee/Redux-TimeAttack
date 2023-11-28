import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const ListWarpper = styled.div`
  background-color: blanchedalmond;
  padding: 10px;
`;

const Card = styled.div`
  background-color: salmon;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
`;

function TodoList({ isDone }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeButtonHandler = (id) => {
    const answer = window.confirm("삭제하시겠습니까?");
    if (!answer) return;
    dispatch(removeTodo(id));
  };

  const switchButtonHandler = (id) => {
    dispatch(switchTodo(id));
  };

  return (
    <ListWarpper>
      <h1>{isDone ? "완료한 일" : "할 일 목록"}</h1>
      {todos
        .filter((item) => item.isDone !== !isDone)
        .map((item) => {
          return (
            <Card key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.contents}</p>
              <p>완료여부 : {item.isDone.toString()}</p>
              <Buttons>
                <button onClick={() => switchButtonHandler(item.id)}>
                  {isDone ? "취소" : "완료"}
                </button>
                <button onClick={() => removeButtonHandler(item.id)}>
                  삭제
                </button>
              </Buttons>

              <button
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                상세보기
              </button>
            </Card>
          );
        })}
    </ListWarpper>
  );
}

export default TodoList;

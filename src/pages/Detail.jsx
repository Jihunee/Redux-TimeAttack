import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { removeTodo } from "../redux/modules/todos";

const DetailWarpper = styled.div`
  background-color: salmon;

  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;

function Detail() {
  const todos = useSelector((state) => state.todos);
  const paramsId = useParams().id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const foundData = todos.find((item) => item.id === paramsId);

  const DetailRemoveButtonHandler = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <DetailWarpper>
      <h3>{foundData.title}</h3>
      <p>{foundData.contents}</p>
      <p>완료여부 : {foundData.isDone.toString()}</p>
      <button
        onClick={() => {
          const answer = window.confirm("삭제하시겠습니까?");
          if (!answer) return;

          DetailRemoveButtonHandler(foundData.id);
          navigate("/");
        }}
      >
        삭제
      </button>
      <button onClick={() => navigate("/")}>이전</button>
    </DetailWarpper>
  );
}

export default Detail;

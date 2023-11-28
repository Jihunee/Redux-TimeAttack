import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

const InputWarpper = styled.div`
  background-color: salmon;
  padding: 10px;
`;

function Form() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const dispatch = useDispatch();

  const titleHandeler = (e) => {
    setTitle(e.target.value);
  };

  const contentsHandeler = (e) => {
    setContents(e.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (title === "" || contents === "") {
      alert("제목과 내용을 입력해주세요.");
      return false;
    }
    const newTodo = {
      id: uuid(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContents("");
  };

  return (
    <InputWarpper>
      <form onSubmit={addTodoHandler}>
        제목 : <input value={title} onChange={titleHandeler} type="text" />
        내용 :{" "}
        <input value={contents} onChange={contentsHandeler} type="text" />
        <button>추가</button>
      </form>
    </InputWarpper>
  );
}

export default Form;

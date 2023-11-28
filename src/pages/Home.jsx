import React from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";

function Home() {
  return (
    <>
      <Form />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
}

export default Home;

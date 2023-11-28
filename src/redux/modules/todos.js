import uuid from "react-uuid";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const initialState = [
  {
    id: uuid(),
    title: "리액트 심화 공부하기",
    contents: "강의 듣기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "리덕스 복습하기",
    contents: "강의 듣기",
    isDone: true,
  },
  {
    id: uuid(),
    title: "TIL 작성하기",
    contents: "배운 내용 정리",
    isDone: false,
  },
  {
    id: uuid(),
    title: "리액트 숙련 복습하기",
    contents: "강의 듣기",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default todos;

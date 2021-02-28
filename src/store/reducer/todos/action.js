import { INITTODO } from "./action-types";
import { promiseTimeout } from "../../../utils";

export const initTodo = (todos) => {
  return {
    type: INITTODO,
    todos: todos,
  };
};

export const getTodo = () => {
  return (dispatch) => {
    return promiseTimeout((resolve) => {
      resolve(["奥特曼打小怪兽"]);
    }).then((data) => {
      dispatch(initTodo(data));
    });
  };
};

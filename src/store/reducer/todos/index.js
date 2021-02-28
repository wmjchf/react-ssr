import { INITTODO } from "./action-types";

export const todos = (state = [], action) => {
  switch (action.type) {
    case INITTODO:
      return action.todos;
    default:
      return state;
  }
};

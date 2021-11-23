import { ADD_TODO, DEL_TODO, EDI_TODO } from "./TodoTypes";

export const AddTodo = (message) => {
  return {
    type: ADD_TODO,
    message,
  };
};
export const DelTodo = (id) => {
  return {
    type: DEL_TODO,
    id,
  };
};
export const EdiTodo = ({ message, id }) => {
  return {
    type: EDI_TODO,
    message,
    id,
  };
};

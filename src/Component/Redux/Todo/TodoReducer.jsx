import { ADD_TODO, DEL_TODO, EDI_TODO } from "./TodoTypes";
const initialState = {
  todo: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.message],
      };
    case DEL_TODO:
      return {
        ...state,
        todo: [...state.todo.filter((index) => index.id !== action.id)],
      };
    case EDI_TODO:
      return {
        ...state,
        todo: [
          ...state.todo.filter((index) => index.id !== action.id),
          { task: action.message, id: action.id },
        ],
      };
    default:
      return state;
  }
};

export default TodoReducer;

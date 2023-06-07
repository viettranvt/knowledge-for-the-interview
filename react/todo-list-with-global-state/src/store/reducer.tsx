import { ADD_TODO, DELETE_TODO, SET_TODO } from "./constants";

export interface TodoState {
  todoList: string[];
  todoInput: string;
}

export const initState: TodoState = {
  todoList: [],
  todoInput: "",
};

export interface ActionPayload {
  type: string;
  value: string | number;
}

function reducer(state: TodoState, action: ActionPayload): TodoState {
  switch (action.type) {
    case SET_TODO:
      if (typeof action.value === "string") {
        return {
          ...state,
          todoInput: action.value,
        };
      }
      break;
    case ADD_TODO:
      if (typeof action.value === "string") {
        return {
          ...state,
          todoList: [...state.todoList, action.value],
        };
      }
      break;

    case DELETE_TODO:
      if (typeof action.value === "number") {
        const newTodoList = [...state.todoList];
        newTodoList.splice(action.value, 1);

        return {
          ...state,
          todoList: newTodoList,
        };
      }
      break;
    default:
      throw new Error("Invalid action");
  }

  return state;
}

export default reducer;

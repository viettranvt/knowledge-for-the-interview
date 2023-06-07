import { ADD_TODO, DELETE_TODO, SET_TODO } from "./constants";
import { ActionPayload } from "./reducer";

export const setTodo = (payload: string): ActionPayload => {
  return {
    type: SET_TODO,
    value: payload,
  };
};

export const addTodo = (payload: string): ActionPayload => {
  return {
    type: ADD_TODO,
    value: payload,
  };
};

export const deleteTodo = (payload: number): ActionPayload => {
  return {
    type: DELETE_TODO,
    value: payload,
  };
};

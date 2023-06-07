import { ADD_JOB, DELETE_JOB, SET_JOB } from "./contant";

export interface ActionPayload {
  type: "SET" | "ADD" | "DELETE";
  payload: string | number;
}

export const setJob = (payload: string): ActionPayload => {
  return {
    type: SET_JOB,
    payload,
  };
};

export const addJob = (payload: string): ActionPayload => {
  return {
    type: ADD_JOB,
    payload,
  };
};

export const deleteJob = (payload: number): ActionPayload => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

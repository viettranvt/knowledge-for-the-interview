import { ActionPayload } from "./action";
import { ADD_JOB, DELETE_JOB, SET_JOB } from "./contant";

//useReducer
export interface TodoState {
  job: string;
  jobs: string[];
}
// 1. init state

export const initState: TodoState = {
  job: "",
  jobs: [],
};

// 3.reducer
const reducer = (state: TodoState, action: ActionPayload): TodoState => {
  let newState = state;

  switch (action.type) {
    case SET_JOB:
      if (typeof action.payload === "string") {
        newState = {
          ...state,
          job: action.payload,
        };
      }

      break;
    case ADD_JOB:
      if (typeof action.payload === "string") {
        newState = {
          ...state,
          jobs: [...state.jobs, action.payload],
        };
      }

      break;
    case DELETE_JOB:
      if (typeof action.payload === "number") {
        const newJobs = [...state.jobs];
        newJobs.splice(action.payload, 1);
        newState = {
          ...state,
          jobs: newJobs,
        };
      }

      break;

    default:
      throw new Error("Invalid action");
  }

  return newState;
};

export default reducer;

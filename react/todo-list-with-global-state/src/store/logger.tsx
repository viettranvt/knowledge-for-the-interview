import { ActionPayload, TodoState } from "./reducer";

const logger = (
  reducer: (state: TodoState, action: ActionPayload) => TodoState
) => {
  return (prevState: TodoState, action: ActionPayload) => {
    console.group(action.type);
    console.log("prev state: ", prevState);
    console.log("action:", action);

    const newState = reducer(prevState, action);

    console.groupEnd();
    return newState;
  };
};

export default logger;

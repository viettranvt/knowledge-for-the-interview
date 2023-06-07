import { useReducer } from "react";
import Context from "./Context";
import reducer, { ActionPayload, TodoState, initState } from "./reducer";
import logger from "./logger";

interface Props {
  children: JSX.Element;
}

export type ContextType = [TodoState, React.Dispatch<ActionPayload>];

function Provider({ children }: Props) {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;

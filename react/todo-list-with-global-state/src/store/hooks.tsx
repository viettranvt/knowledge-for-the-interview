import { useContext } from "react";
import Context from "./Context";
import { ContextType } from "./Provider";

export const useStore = (): ContextType => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};

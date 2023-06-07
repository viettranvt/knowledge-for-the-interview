import { createContext } from "react";
import { ContextType } from "./Provider";

const Context = createContext<ContextType>([
  { todoInput: "", todoList: [] },
  () => {},
]);

export default Context;

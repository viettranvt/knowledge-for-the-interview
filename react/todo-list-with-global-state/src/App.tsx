import { useRef } from "react";
import "./App.css";
import { addTodo, deleteTodo, setTodo, useStore } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { todoList, todoInput } = state;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    dispatch(addTodo(todoInput));
    dispatch(setTodo(""));
    inputRef.current?.focus();
  };

  return (
    <div className="App">
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo"
        onChange={(e) => {
          dispatch(setTodo(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <span onClick={() => dispatch(deleteTodo(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

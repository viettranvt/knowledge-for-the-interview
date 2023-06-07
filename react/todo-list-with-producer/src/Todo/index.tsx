import { Fragment, useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addJob, deleteJob, setJob } from "./action";
import logger from "./logger";

function Todo() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current?.focus();
  };

  return (
    <Fragment>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}> &times;</span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Todo;

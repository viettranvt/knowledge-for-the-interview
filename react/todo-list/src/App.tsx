import { useState } from "react";
import "./App.css";

function App() {
  const [job, setJob] = useState<string>("");
  const [jobs, setJobs] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem("jobs") || "[]");
  });

  const handleClick = () => {
    if (job) {
      setJobs((prev) => {
        const newJobs = [...prev, job];
        localStorage.setItem("jobs", JSON.stringify(newJobs));

        return newJobs;
      });
    }

    setJob("");
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleClick}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

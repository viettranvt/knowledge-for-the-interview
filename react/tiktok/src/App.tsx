import { useState } from "react";
import "./App.css";

const courses: Object[] = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function App() {
  const [checked, setChecked] = useState<number[]>([]);

  const handleSubmit = () => {
    console.log(checked);
  };

  const handleCheck = (id: number): void => {
    if (checked.includes(id)) {
      setChecked(checked.filter((data) => data !== id));
      return;
    }

    setChecked([...checked, id]);
  };

  return (
    <div className="App">
      {courses.map((course: any) => {
        return (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        );
      })}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;

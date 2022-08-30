import React, { useState } from "react";
import { Overview } from "./components/Overview";
import "./index.css";
// App.js is going to handle the input field with the logic

const App = () => {
  const [task, setTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTask((prev) => ({ ...prev, [name]: value }));
    // console.log(task);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();

    setAllTasks((prev) => [task, ...prev]);
    setTask({});
  };
  const handleDelete = (indexOfTask) => {
    setAllTasks((prev) => prev.filter((task, index) => index !== indexOfTask));

    return;
  };

  return (
    <div className="container">
      <h2>Todo Widget</h2>
      <form onSubmit={handleSubmitTask}>
        <div className="title box">
          <input
            type="text"
            name="title"
            placeholder="Task name..."
            maxLength={55}
            required={true}
            value={task.title || ""}
            onChange={handleChange}
          ></input>

          <button type="submit">Add</button>
        </div>
        {!task.title ? (
          ""
        ) : (
          <textarea
            className="description"
            placeholder="Description..."
            name="description"
            value={task.description}
            onChange={handleChange}
          ></textarea>
        )}
      </form>

      <Overview tasks={allTasks} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

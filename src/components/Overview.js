import React from "react";

// Overview.js should just render our tasks.
export const Overview = ({ tasks, handleDelete }) => {
  return (
    <ul>
      {tasks.map(({ title, description }, index) => (
        <li className="tasks" key={index} value={title}>
          <div className="li-header">
            <h3 className="title">{title}</h3>
            <button onClick={() => handleDelete(index)}>&#10006;</button>
          </div>
          <p className="description">{description}</p>
        </li>
      ))}
    </ul>
  );
};

import React, { useState } from "react";
import "./App.css";

function App4() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learning JS", status: 0 },
    { id: "task_2", title: "Coding a Todo List", status: 0 },
  ]);

  const [showIncomplete, setShowIncomplete] = useState(true);
  const [newTask, setNewTask] = useState("");

  const handleIncompleteItem = () => {
    showIncomplete ? setShowIncomplete(false) : setShowIncomplete(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="container">
        <div>
          <h1 className="title">
            Todo List
            <span>Get things done, one item at a time.</span>
          </h1>
        </div>
        <div>
          <ul className="task-list">
            {tasks
              .filter((task) => showIncomplete && task.status !== 1)
              .map((task) => (
                <li key={task.id} className={task.status ? "done" : ""}>
                  <span className="label">{task.title}</span>
                  <div className="actions">
                    <input
                      type="checkbox"
                      className="btn-action btn-action-done"
                    />
                    <button className="btn-action btna-action-delete">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </li>
              ))}
          </ul>

          <div className="filter-wrapper">
            <label htmlFor="filter" className="filter-label">
              Show incompleted task only
            </label>
            <input
              type="checkbox"
              id="filter"
              checked={showIncomplete}
              onChange={handleIncompleteItem}
            />
          </div>
        </div>

        <form action="#" className="form" onSubmit={handleSubmit}>
          <label htmlFor="newItem">Add to the todo list</label>
          <input type="text" id="newItem" />
          <button>Add Item</button>
        </form>
      </div>
    </section>
  );
}

export default App4;

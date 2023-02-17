import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./FormAdd.module.scss";

const FormAdd = (props) => {
  const { addTask } = props;
  const [taskName, setTaskName] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const task = {
      name: taskName,
      checked: false,
      id: uuidv4(),
    };

    addTask(task);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.FormAdd}>
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        required
        autoFocus
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default FormAdd;

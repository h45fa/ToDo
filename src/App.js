import { useState } from "react";
import FormAdd from "./components/FormAdd/FormAdd";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter(task => task.id !== id))
  }

  return (
    <div className="App">
      {/* <h1>Todo List</h1> */}
      <FormAdd addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
};

export default App;

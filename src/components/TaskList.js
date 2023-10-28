import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks, currentCategory } = props;

  
  const filteredTasks = currentCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === currentCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
